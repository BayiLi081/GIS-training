# Singapore Traffic Camera Sample (CV teaching dataset)

8 geotagged traffic-camera images from one snapshot (2026-11-18, 14:41 SGT), for computer-vision demos in urban research (object detection, semantic segmentation, green/sky view share).

| File | Content |
|---|---|
| `images/cam_<id>.jpg` | 640×360 RGB JPEG |
| `metadata.csv` | `file, camera_id, latitude, longitude, timestamp, width, height, source_url` (WGS84 / EPSG:4326) |
| `download_sample.py` | Script that produced this folder. `python download_sample.py snapshot_<date>` saves a fresh snapshot in a new folder; with no argument it replaces this sample |

Hands-on notebook (runs in Google Colab, nothing to install): [cvurban_colab.ipynb](https://colab.research.google.com/github/BayiLi081/GIS-training/blob/gh-pages/cvurban_colab.ipynb)

Suggested uses: vehicle counts / congestion (`cam_2702`, `cam_4703`), greenery share (`cam_2704`, `cam_4712`, `cam_4713`), sky and water (`cam_2701`, `cam_4799`).

## Licence and attribution

Contains information from Traffic Images accessed on 18 November 2026 from data.gov.sg which is made available under the terms of the [Singapore Open Data Licence version 1.0](https://data.gov.sg/open-data-licence). Original data provider: Land Transport Authority (LTA).

## Privacy processing

The originals are 1920×1080. They were downscaled to 640×360 so that licence plates cannot be read, and they show no identifiable pedestrians. Keep this step if you re-run the script, and do not try to identify vehicles or people.
