# Overlay Analysis

> The process of stacking digital representations of various spatial data on top of each other so that each position in the area covered can be analysed in terms of these data (Burrough and McDonnell, 1998)

In this section, we only focus on vector overlay as it is the common type of overlay analysis in urban research.

## Point and Polygon Overlay

- Point layer
- Polygon layer

Depends on which one is the input layer, the information with other layer (overlay layer) can be aggregated to the input layer.

| <img src="../imgs/overlay_002.jpeg" alt="overlay_001" style="zoom: 33%;" /> |
| ------------------------------------------------------------ |
| Point-in-Polygon Overlay                                     |
| <img src="../imgs/overlay_003.jpeg" alt="overlay_001" style="zoom: 33%;" /> |
| Polygon-on-Point Overlay                                     |
| Source: [Multiple Layer Analysis](https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s11-02-multiple-layer-analysis.html) |

#### Examples of Point-in-Polygon Overlay Analysis in Urban Research

Use frequency, proportion,or rate to summarize the occurrence of certain events in statistical unit.

For example, the number of COVID-19 cases by planning zones in Singapore

| ![overlay_001](../imgs/overlay_004.webp)                     |
| ------------------------------------------------------------ |
| MOH unveils new Covid-19 map                                 |
| Source: [MOH unveils new Covid-19 map: Areas in Jurong, Bedok, Sengkang among those frequently visited by cases](https://www.straitstimes.com/singapore/health/areas-in-jurong-bedok-sengkang-and-woodlands-among-those-frequently-visited-by) |



## Polygons Overlay

Finding the intersections between polygons in two layers.

#### Examples of overlay operations

| ![overlay_001](../imgs/overlay_001.jpeg)                     |
| ------------------------------------------------------------ |
| **Vector Overlay Methods**                                   |
| Source: [Multiple Layer Analysis](https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s11-02-multiple-layer-analysis.html) |



## Spatial Joins Actions in QGIS

Summarise the total number of bus stops for each planning areas in Singapore:

Using the **count points in polygon** 

After calculating the number (New Field NUMPOINTS will be added to the new count file).

Go to Symbology of the Layer properties. Choose Graduated scheme; value, color ramp.

And choose one mode of classification.

classify and apply.



