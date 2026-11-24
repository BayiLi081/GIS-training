"""Download one snapshot of Singapore LTA traffic camera images from data.gov.sg.

Usage: python download_sample.py [output_folder]
  No argument: writes images/ and metadata.csv next to this file, replacing the teaching sample.
  With a folder name (e.g. snapshot_2026-11-25_0800): keeps each snapshot separately.
Licence: Singapore Open Data Licence v1.0 - https://data.gov.sg/open-data-licence
"""
import csv
import hashlib
import sys
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

API = "https://api.data.gov.sg/v1/transport/traffic-images"  # no API key needed for light use
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent
SIZE = (640, 360)  # downscaled so licence plates are not legible (privacy)

snapshot = requests.get(API, timeout=30).json()["items"][0]
(OUT / "images").mkdir(parents=True, exist_ok=True)

rows = []
for cam in snapshot["cameras"]:
    img = requests.get(cam["image"], timeout=30).content
    assert hashlib.md5(img).hexdigest() == cam["image_metadata"]["md5"], f"corrupt download: {cam['camera_id']}"
    name = f"cam_{cam['camera_id']}.jpg"
    Image.open(BytesIO(img)).convert("RGB").resize(SIZE, Image.LANCZOS).save(OUT / "images" / name, quality=90)
    rows.append({
        "file": f"images/{name}",
        "camera_id": cam["camera_id"],
        "latitude": cam["location"]["latitude"],
        "longitude": cam["location"]["longitude"],
        "timestamp": cam["timestamp"],
        "width": SIZE[0],
        "height": SIZE[1],
        "source_url": cam["image"],
    })

with open(OUT / "metadata.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)
print(f"saved {len(rows)} images from snapshot {snapshot['timestamp']}")
