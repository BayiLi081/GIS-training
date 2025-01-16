# Distance Analysis

## Type of Distances

| ![NetworkAnalysis_002](../imgs/NetworkAnalysis_002.png)      |
| ------------------------------------------------------------ |
| Types of distance                                            |
| Source: Apparicio et al. (2008) and [Comparing two distance measures in the spatial mapping of food deserts: The case of Petržalka, Slovakia](https://sciendo.com/article/10.1515/mgr-2017-0009) |

Common research questions regarding distance include:

- Find Nearest

- Shortest Distance

- Fastest Route
- Find the coverage of services

### Distance Analysis between different spatial types

| ![NetworkAnalysis_001](../imgs/NetworkAnalysis_001.png)      |
| ------------------------------------------------------------ |
| Finding the near feature by geometry type is shown.          |
| Source: [Near (Analysis)](https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/near.htm) |

## Network Analysis

### Practice

#### Data:

- SG_schools.shp
- Singapore_mainland_roadnetwork.shp
- bus_stops_singapore.shp
- Singapore_planningarea.shp

#### Task:

Calculating the number of bus stops within 500 meters from School in North east area.

#### Step by step:

1. Select the NORTH-EAST REGION (column: REGION_N) from the Singapore planning area layer (use the **Select by Attribute**)

2. Use the **Clip** under vector overlay category

   Input layer: All three other layers

   Overlay layer: Singapore planning area (tick in **Selected features only**)

3. Use **Service Area (From Layer)** tool under Network analysis module

   Vector layer representing network: the new road network layer

   Path type to calculate: shortest

   Start point: new school layer

   Travel cost: 500 m

4. Use the **Convex Hull** tool to generate the polygons of 500 meter catchment from each school.

5. Use **Count points in polygon** tool to count the bus stops with the catchment:

   Polygons: The catment layer

   Points: New bus stop layer

6. Use **Join Attributed by Field Value**

   Input layer: sg_ne_schools

   Input layer 2: the new count layer

   Fields: ID column

7. Visualise the results based on NUMPOINTS column

   Can use the **Size** Method, then change the transparency of each symbol of classifications

   

   





