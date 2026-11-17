"""Clean fictional teaching data. Run from the repository root.
Requires GeoPandas, pandas and a working GeoPackage file engine.
Outputs are written to output/sdp_practical; rerunning replaces these demo layers.
"""
from pathlib import Path
import geopandas as gpd
import pandas as pd

raw = gpd.read_file("data/sdp/facilities_raw.geojson")
print(raw.head())
print(raw.dtypes)
print(raw.crs, raw.total_bounds)
print(raw.geometry.geom_type.value_counts(dropna=False))
print(raw.isna().sum())

if raw.crs is None:
    raise ValueError("Source CRS must be verified")

work = raw.to_crs(3414).copy()
work["source_row"] = range(1, len(work) + 1)
work["category_raw"] = work["category"]
work["capacity_raw"] = work["capacity"]

work["category"] = work["category_raw"].astype("string").str.strip().str.upper()
work["capacity"] = pd.to_numeric(
    work["capacity_raw"].astype("string").str.replace(",", "", regex=False),
    errors="coerce"
)
work["capacity_parse_failed"] = (
    work["capacity_raw"].notna() & work["capacity"].isna()
)

# Exact repeats in every source attribute AND geometry.
# Compare before adding the distinct source_row field.
comparison = raw.drop(columns=raw.geometry.name).copy()
comparison["geometry_wkb"] = raw.geometry.to_wkb()
repeat_mask = comparison.duplicated(keep="first")
repeats = work.loc[repeat_mask].copy()
work = work.loc[~repeat_mask].copy()

work["review_reason"] = ""
checks = {
    "missing_geometry": work.geometry.isna(),
    "empty_geometry": work.geometry.is_empty,
    "invalid_geometry": (~work.geometry.isna() & ~work.geometry.is_valid),
    "invalid_capacity": (work["capacity"].isna()
                         | work["capacity"].lt(0)
                         | work["capacity"].mod(1).ne(0)),
    "conflicting_id": work["facility_id"].duplicated(keep=False),
}
for reason, mask in checks.items():
    work.loc[mask.fillna(False), "review_reason"] += reason + ";"

review = work.loc[work["review_reason"].ne("")].copy()
clean = work.loc[work["review_reason"].eq("")].copy()

assert len(raw) == len(clean) + len(review) + len(repeats)
assert clean["facility_id"].is_unique
assert clean.geometry.notna().all()
assert (~clean.geometry.is_empty).all()
assert clean.geometry.is_valid.all()
assert clean["capacity"].ge(0).all()

out = Path("output/sdp_practical")
out.mkdir(parents=True, exist_ok=True)
clean.to_file(out / "clean.gpkg", layer="facilities", driver="GPKG")
review.to_file(out / "review.gpkg", layer="review", driver="GPKG")
repeats.to_file(out / "repeats.gpkg", layer="repeats", driver="GPKG")

reopened = gpd.read_file(out / "clean.gpkg", layer="facilities")
assert len(reopened) == len(clean)
assert reopened.crs == clean.crs
assert set(reopened["facility_id"]) == {"A01", "A02", "A06"}

log = pd.DataFrame([
    {"stage": "raw", "rows": len(raw), "rule": "Fictional source; preserve original"},
    {"stage": "repeats", "rows": len(repeats), "rule": "Exact source attributes and geometry WKB"},
    {"stage": "review", "rows": len(review), "rule": "See review_reason in review layer"},
    {"stage": "clean", "rows": len(clean), "rule": "Passes stated teaching checks"},
])
log.to_csv(out / "cleaning_log.csv", index=False)
import platform
import shapely
import pyproj
(out / "environment.txt").write_text(
    f"Python {platform.python_version()}\nGeoPandas {gpd.__version__}\n"
    f"pandas {pd.__version__}\nShapely {shapely.__version__}\npyproj {pyproj.__version__}\n",
    encoding="utf-8",
)
print(log.to_string(index=False))
print(f"Outputs: {out.resolve()}")
