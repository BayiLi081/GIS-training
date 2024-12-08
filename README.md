# GIS Training Material 

Last Update: June 2024

## Preparation

**You can sit in groups according to the GroupMembers.png in Google Shared Drive, so it will be easier to communicate and help each other**

Please make sure that you have properly installed the QGIS from the [official website](https://qgis.org/en/site/forusers/download.html) before the bootcamp started. You can download the LTR version as it is more stable to run on your computer and compatible to more extensions normally.

### Addition: Installing Python

Open [Download Python | Python.org](https://www.python.org/downloads/), choose your OS, and the corresponding version of Python. Because the update of Python libraries may not at the same speed with the latest version of Python, we can just use earlier version of Python. In our course, we will use the **3.11**, more specifically, **[3.11.9](https://www.python.org/downloads/release/python-3119/)**.

<img src="imgs\installingPython.jpg" alt="installingPython" style="zoom:33%;" />

Open your terminal, type `python -V` and enter to check the installed version of Python.

Optional steps:

1. Using virtual environment is more handy for individual project or tasks. You may refer to
   -  Linux: [Managing Python Virtual Environments using Virtualenvwrapper | by Joseph Kariuki | Medium](https://jkariukidev.medium.com/managing-python-virtual-environments-using-virtualenvwrapper-9c6ebde27ee4)
   - Windows: `pip install virtualenvwrapper-win`
   - Mac:


## Lectures

Software installation troubleshooting (QGIS)

**00:15 - 01:00**: [Introduction of GIS](./contents/001_definegis.md)

- The data model in GIS: mainly attribute data model
- What is spatial data?
  - Concept
  - Entities and terms
  - Format: Raster verses Vector
  - [Spatial reference](./contents/spatial_reference/coordinatesystem.md)

**01:00 - 01:15**: 

Break and small Q&A

**01:15 - 02:00**:

- **10 mins**: [Introduction of spatial pattern](./contents/002_spatialpattern.md)

  spatial pattern and the process created it

- **25 mins**: [Introduction of spatial analysis](./contents/002_definespatialanalysis.md)
  
  - example of spatial analysis
  - common research questions related to spatial pattern investigation in urban research
  
- **10 mins**: Basic softwares and techniques for GIS
  
  - [Open-source and closed-source solutions](./contents/os_cs.md)
  
- **10 mins**: Q&A

**02:00 - 03:00**:

[Global spatial autocorrelation and how to calcute it in QGIS/GeoDa](./contents/spatialautocorrelation.md)


**00:00 - 00:15**:

[Recap](./contents/recap_day01.md) of the day 1 contents

**00:15 - 00:45**:

- **10 mins**: [Find the data](./contents/datasearch.md)

- **15 mins**: [Local Indicators of Spatial Association (LISA)](./contents/lisa.md)
- **15 mins**: [Global verses Local Statistics](./contents/globallocal.md)

**00:45 - 01:00**:

**Practical**: [Create a map with essential elements in QGIS ](./contents/Practical01.md)

- 15 min: Short demonstration and hands-on practice
  - Download road network with QGIS plugin - QuickOSM

**01:00 - 01:15**: 

Break and small Q&A

**01:15 - 02:00**: Integration with [Remote sensing](./contents/rs.md)

- Introduction of remote sensing
  - Introduction
  - How could we apply remote sensing analysis in urban research?

- Common RS indexes and the calculation of them applied in urban research:

  - Normalized Difference Vegetation Index (NDVI)

  - Normalized Difference Built-up Index (NDBI)

  - Land Surface Temperature (LST)

**02:00 - 02:15**:

Break and small Q&A

**02:15 - 03:00**: 

- **10 mins**: Introduce some common data sources for remote sensing

- **Practical (Part1: Data Collection)**: "The change of green cover in Singapore" spatiotemporal analysis on NDVI [Longitudinal study](./contents/longitudinalNDVI.md)
  - 30 min: Instruction and demonstration
  - 5 min: Q&A

Hands-on practice is required to complete after class and to be continued in next day's class.

Reminding the students to register an account on [EROS Registration System (usgs.gov)](https://ers.cr.usgs.gov/register)

**00:00 - 00:30**: 

**Practical (Part2 : Calculation)**: "The change of green cover in Singapore" spatiotemporal analysis on NDVI [Longitudinal study](./contents/longitudinalNDVI2.md)

**00:30 - 0:40**

[Recap](./contents/recap_day02.md) of the day 1 and day 2 contents

**00:30 - 01:00**: 

[Diatance Analysis](./contents/distance_analysis.md)

**01:00 -  01:10**: 

Break and small Q&A

**01:10 -  01:40**: 

[Spatial Joins and Overlay analysis](./contents/overlay.md)

**01:40 -  01:50**: 

Break and small Q&A

**01:50 - 02:30**: 

Geospatial analysis and visualisation with other tools:

- **20 mins**: [Geocoding and address matching](./contents/geocoding.md)
- **20 mins**: [How to use Python scripts to power up your spatial analysis task in QGIS?](./contents/pyqgis.md)
  - PyQGIS tutorial and basic demonstration

**02:30 -  03:00**: 

- **Practical**: [Short demonstration of using OpenStreetMap Nominatim Service to translate address into coordinates](./contents/practical_geocoding_api.md)
  - **20 mins**: Demonstration
  - **20 mins**: Hands-on practice

**03:00 - 03:30**: Open discussion on career opportunities in the cross field and Q&A

[Introduction to the first map online](./contents/webgis.md)

## Semi-automatic tutorials 

### Data Cleaning

#### Join tables with Python

[Join attribute table of two spatial data](./contents/jointables_shp.md)

#### Subsampling

[Subsampling](./contents/subsampling.md)

### Shortest Route

[Problem of Shortest Route - Dijkstra's Algorithm](./contents/shortestroute_dijkstraalgo.md)

### Mapping

1. [Quantitative bivariate map](./contents/bivariate_map.md)

2. [Mapping tabular data (with location information and linked image) with Leaflet](./contents/practical_popupimg/leaflet_popupimg.md)

