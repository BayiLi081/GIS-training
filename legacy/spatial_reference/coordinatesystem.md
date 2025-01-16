# Spatial Reference: Coordinate reference systems

There are local, regional or global coordinate reference systems depending on the specific area.

It is important that you are working with **the correct coordinate system**.

## Geographic coordinate reference systems

| ![crs_002](../../imgs/crs_002.gif)                           |
| ------------------------------------------------------------ |
| Source: [What is Geodesy (carleton.edu)](https://serc.carleton.edu/getsi/geodesy/index.html) |

Just remember that **earth is not a perfect sphere**, so there would be **reference ellipsoids** to be the "best fit". Thus, we have different coordinate reference systems (CRS) to describe the location based on different ellipsoids.

| ![crs_003](../../imgs/crs_003.webp)                          |
| ------------------------------------------------------------ |
| Perspective of the globe with grid formed by parallels of latitude and meridians of longitude. |
| Source: [latitude and longitude](https://www.britannica.com/science/latitude) |

CRS uses unit: degree of latitude and longitude to express location

## Projected coordinate reference systems

A projected coordinate reference system is a flat, two-dimensional representation of the earth.

| ![](../../imgs/crs_001.jpeg)                                 |
| ------------------------------------------------------------ |
| Source: [Karolina Grabowska](https://www.pexels.com/photo/orange-peel-on-white-surface-5978638/) |

Imaging you are peeling an orange and your aim is to flat the skin on every corner of a paper, so there are must be some area being stretched, while some other areas being squeezed. Every map projection introduces distortion, and each has its own set of problems. 

You can go to this website: [Interactive Album of Map Projections 2.0 (psu.edu)](https://projections.mgis.psu.edu/), check the difference of projected CRSs.

Anyway, in this way, we can express the location in the unit: metres.

**Extra on the popular global projection: Mercator projection:**

Even for the the most common projection, Mercator projection, receives huge criticism for exaggerating the size of countries nearer the poles. 

| ![crs_004](/Users/bayili/Documents/sutd/GIS-bootcamp/imgs/crs_004.webp) |
| ------------------------------------------------------------ |
| The Mercator projection is a transformation of a cylindrical projection used for navigation. |
| Source: [Mercator projection](https://www.britannica.com/science/Mercator-projection) |

> On the Mercator projection Greenland appears to be roughly the same size as Africa. In reality, Greenland is 0.8 million sq. miles and Africa is 11.6 million sq. miles, nearly 14 and a half times larger.

You can go to [How big the world actually is: The true size](https://www.thetruesize.com/) to check the distortion it gives to real size.

## EPSG codes

EPSG is the unique ID linked to a specific coordinate reference system.

### The common coordinate systems and their EPSG codes

- EPSG: 4326
- EPSG: 3857
- EPSG: 7789

### EPSG codes for Singapore

[Coordinate reference systems for "Singapore" (epsg.io)](https://epsg.io/?q=Singapore)

You can always Google "What is the common coordinate reference System For <place name>?"

Normally, the data always come with projection information. If it didn't, try the common CRSs based on its location. You can always georeference it but it means extra work. (For vector data, georefernce might need extra plugin in QGIS)

## Summary

- There is no best CRS, but there is a best fit based on your research content.
- Projected your layer, if you want to calculate spatial features in metre.
- EPSG code is the ID of CRS.

Now, we can move to QGIS to import data and [set up the CRS](./crsinqgis.md).

## Reference

[1] [Coordinate reference systems - TOI-Pedia (tudelft.nl)](http://wiki.bk.tudelft.nl/toi-pedia/Coordinate_reference_systems)