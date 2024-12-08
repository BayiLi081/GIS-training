# What is GIS?

A system includes:

- Geographically referenced information collection
- Manipulation and analysis
- Display and report

The core of GIS is **spatial data**.

The spatial database, the container of spatial data, includes both **spatial** and **non-spatial (attribute)** data.

## Spatial data: The translation from reality

It is the information that has a geographic component attached to it.

For example, in the following diagram, we are translating a road section from reality to the file which the computer programme can accept.

![](../imgs/definegis_001.svg)



- Real World

  What actually exists

- Data Model

  The relevant properties of the entity. We are simplify it by selecting only properties of interests (Of course, the geometry data is always something we preserve).

- Data Structure

  Then, the information was encoded to the programming structure which can be incorporated in computer programs. For example, length will be numeric in metric system.

- File Structure

  Finally, we got the spatial file. In the example, shapefile. 

## The Data Model

Generally, the data model used in GIS includes the the **attribute data model** and **spatial data model**.

### The attribute data model

The non-spatial information attached to each spatial object.

Any information relevant to describe a spatial object.

Normally, it will be structured in a tabular format, look like:

| ![](../imgs/definegis_002.png)                               |
| ------------------------------------------------------------ |
| Source: [Earth Lab](https://www.earthdatascience.org/courses/use-data-open-source-python/intro-vector-data-python/spatial-data-vector-shapefiles/) |

### Spatial data model

A spatial entity can be defined in terms of:

- Location
- Dimensions
- Time (Spatiotemporal entity)

#### Location (Spatial Reference)

This will be detailed explained in the [Spatial reference](../contents/spatial_reference/coordinatesystem.md)

#### Dimension

##### 1D

Point, Line

##### 2D

Polygon

##### 3D

Volume

*3D GIS is also a popular field bridge geography, architecture and urban planning. But it is another research direction (([3D GIS - USC GIS Online](https://gis.usc.edu/blog/all-about-3d-gis/))), not discussed in this bootcamp*

| ![](../imgs/definegis_003.png)                               |
| ------------------------------------------------------------ |
| Types of spatial data                                        |
| Source: [Urban Informatics Toolkits: Chapter 26 Spatial Analysis](https://ui.josiahparry.com/spatial-analysis.html) |

##### Time extended spatial data (Spatiotemporal entity)

2D, 3D, and time change data

### The Vector & Raster Representation

> Vector is a object-based structure, but Raster is field-based structure.

| ![](../imgs/definegis_004.png)                               |
| ------------------------------------------------------------ |
|                                                              |
| Source: [Conversion Between Data Models](https://gsp.humboldt.edu/olm/Lessons/GIS/08%20Rasters/RasterToVector.html) |

|                | Vector                                   | Raster                                                       |
| -------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **Advantages** | - More compact data structure            | - Simple data structure                                      |
|                | - More stress on topological information | - More spatial variability (variations across a continuous surface) |
|                | - More definite boundary                 | - Widely used in satellite image                             |

Resolution is mainly used for raster data; while scale and the minimum mapping unit is more used for a vector map (See more detail explanation in [StackExchange: Understanding resolution in vector maps?](https://gis.stackexchange.com/questions/288674/understanding-resolution-in-vector-maps))

Both raster and vector data are widely used in urban research, raster data is more commonly involved when spatial analysis on a continuous surface (such as hot spot analysis output as density surface) or remote sensing anslysis was implemented, and vector is more common in spatial analysis of pattern and network analysis. 

## Extra: What is Shapefile

A shpfile consists of a set of files that contain geometric and attribute data. 

The main file is .shp file.

They always being stored with same name with different file extensions in same directory.

These files include:

1. .shp file

   This file contains the geometric data of the features in the form of points, lines, and polygons.

2. .shx file

   This file is the index file for the .shp file and allows for faster access to the data.

3. .dbf file

   This file contains the attribute data associated with each feature, such as names, addresses, and other descriptive information.

   You can open the file with Excel, then you can the exact same information as in the attribute table window of QGIS.

4. .prj (optional but important)

   It specifies the coordinate system used by the data.

5. Other optional files

Now, let's move to [Spatial reference](../contents/spatial_reference/coordinatesystem.md)







