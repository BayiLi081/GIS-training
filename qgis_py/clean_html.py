# --- Run in QGIS Python Console ---
from qgis.PyQt.QtCore import QVariant
from qgis.core import QgsProject, QgsField
import pandas as pd
import html

# Choose layer: use the currently selected layer in Layers panel
layer = iface.activeLayer()
if not layer:
    raise RuntimeError("No active layer. Select your layer first.")

# Name of the source field that holds the HTML
SRC_FIELD = "Description"

# --- Your parser using pandas.read_html, adapted for QGIS ---
def parse_with_read_html(cell: str) -> dict:
    if cell is None:
        return {}
    if not str(cell).strip():
        return {}
    s = html.unescape(str(cell))
    try:
        tbl = pd.read_html(s)[0]  # first table
    except ValueError:
        return {}
    # Expect 2 columns: [attribute, value]; drop header rows like "Attributes"
    if tbl.shape[1] >= 2:
        kv = tbl.iloc[:, :2]
        kv = kv[kv.iloc[:, 1].notna()]
        kv = kv[kv.iloc[:, 0].astype(str).str.strip().str.lower() != "attributes"]
        return dict(zip(kv.iloc[:, 0].astype(str).str.strip(),
                        kv.iloc[:, 1].astype(str).str.strip()))
    return {}

# --- First pass: discover all keys present in the layer ---
all_keys = set()
src_idx = layer.fields().indexOf(SRC_FIELD)
if src_idx == -1:
    raise RuntimeError(f"Field '{SRC_FIELD}' not found in layer.")

for f in layer.getFeatures():
    kv = parse_with_read_html(f[SRC_FIELD])
    all_keys.update(kv.keys())

# --- Add missing fields (as text). You can customize types later. ---
provider = layer.dataProvider()
new_fields = []
for k in sorted(all_keys):
    if layer.fields().indexOf(k) == -1:
        new_fields.append(QgsField(k, QVariant.String))
if new_fields:
    provider.addAttributes(new_fields)
    layer.updateFields()


# --- populate values (per-field updates) ---
layer.startEditing()
for f in layer.getFeatures():
    kv = parse_with_read_html(f[SRC_FIELD])  # or parse_pairs(...) for the regex variant
    if not kv:
        continue

    # write each key/value
    for k, v in kv.items():
        idx = layer.fields().indexOf(k)
        if idx != -1:
            layer.changeAttributeValue(f.id(), idx, v)

layer.commitChanges()
print("Done: attributes updated with layer.changeAttributeValue().")
