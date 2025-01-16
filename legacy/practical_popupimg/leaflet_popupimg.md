# Mapping tabular data with Leaflet

There is an alternative way of mapping it with popup images in QGIS. But in this tutorial, we are using a Python library, [Folium documentation](https://python-visualization.github.io/folium/latest/), to conduct the task. 

| Right Click the layer -> Properties -> Display               |
| ------------------------------------------------------------ |
| ![](..\..\imgs\QGIS_visLocationalPics.png)                   |
| <img src="file:///C:/xxxxxxxxxxxxxxxxxxxxxxxxx/[% "pic_path" %]" alt="Photo" width=400> |
| Activate "Show Map Tips" and "Identify Features"             |
| ![](..\..\imgs\QGIS_visLocationalPics02.png)                 |

## Preparation

### Libraries

[Install the library: Folium](https://pypi.org/project/folium/).

[Ipynb file of using folum](folium.ipynb)

**Extra app development**

We are also using [streamlit-folium](https://github.com/randyzwitch/streamlit-folium) to enhance the deployment of your map.

> Streamlit is an open-source Python library that makes it easy to create and share interactive web applications for data visualisation, machine learning models, and other Python-based workflows. Designed specifically for data scientists and machine learning practitioners, Streamlit simplifies turning Python scripts into visually appealing apps without requiring any web development knowledge (e.g., HTML, CSS, or JavaScript).

```bash
pip install streamlit-folium
```

For app developed with Streamlit, it is required to run it in bare mode. Therefore, we no longer need to run the Jupyter Notebook. Instead, we run the [python script](folium2streamlit.py) in the terminal.

```bash
streamlit run folium2streamlit.py
```

### Data

 [subsampled.csv](..\..\data\leaflet_popupimg\subsampled.csv) 

| latitude   | longitude   | time                             | id      |
| ---------- | ----------- | -------------------------------- | ------- |
| -6.1600891 | 106.817773  | 2024-11-25 09:37:51.211000+07:00 | loc_1   |
| -6.1600795 | 106.8178007 | 2024-11-25 09:38:14.599000+07:00 | loc_235 |
| -6.1600604 | 106.817905  | 2024-11-25 09:38:16.699000+07:00 | loc_256 |
| -6.1600387 | 106.8180006 | 2024-11-25 09:38:18.199000+07:00 | loc_271 |
| -6.1600183 | 106.8181055 | 2024-11-25 09:38:19.699000+07:00 | loc_286 |
| -6.1600033 | 106.8182022 | 2024-11-25 09:38:21.199000+07:00 | loc_301 |
| -6.1599987 | 106.8182291 | 2024-11-25 09:38:21.699000+07:00 | loc_306 |
| -6.1599858 | 106.8183018 | 2024-11-25 09:38:23.199000+07:00 | loc_321 |
| -6.1599413 | 106.818404  | 2024-11-25 09:38:25.500000+07:00 | loc_344 |
| -6.1598997 | 106.8184923 | 2024-11-25 09:38:27.200000+07:00 | loc_361 |

For each row, there "ID" attribute will help to locate a corresponding image.

```python
<img src="file:///C:/Users/LiBayi/Documents/work/streetview/streetvideo/gopro-sve/specific_frames/[% "id" %].jpg" alt="Photo" width=400>
```


```
m = folium.Map((-6.145, 106.83), tiles="cartodb positron", zoom_start=14)

popup = folium.GeoJsonPopup(
    labels= False, fields = ["html"],
    localize=True,
    style="background-color: yellow;",
)

g = folium.GeoJson(
    data_gdf,
    style_function=lambda x: {
        "fillColor": "red",
        "color": "black",
        "fillOpacity": 0.4,
    },
    popup=popup,
).add_to(m)

m
```

## References

1. [Adding IFrame or Script Capability to GeoJsonPopup](https://github.com/python-visualization/folium/issues/1362)



