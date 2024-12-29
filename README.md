# Python Bootcamp

Course hours: 3 hours x 3. 

Prerequisites:

1. Laptop to use in hands-on session
2. Preferred to have basic knowledge in GIS
3. Run through the training materials and FAQ
4. Ensure you are able to login to the [Google Colab](https://colab.research.google.com/) before the bootcamp
5. Download the zip of data and upload to your Google Drive

Expected outcome:

1. A better understanding of Python as a programming language
2. Write simple scripts to improve efficiency of geospatial processing
3. Basic visualisation of geospatial data

All contents will be delivered in a hybrid manner of **Lecture and Practice**.

## Preparation: Having the coding environment ready

Setting up a Python programming environment can be both complex and time-consuming. In this study, we aim to simplify the process by using cloud-based platform. Please create an account on [Google Colab](https://colab.research.google.com/). 

### Optional: Setting up locally

If you prefer to set up a Python programming environment on your own computer, please refer to the following resources: 

- [Download Python | Python.org](https://www.python.org/downloads/)

After installing Python, it is common practice to use a virtual environment to manage an isolated environment for your project. While optional, setting up a virtual environment is recommended for better project management. If you're interested, follow the instructions below:  

- **Windows**: Install virtualenvwrapper for Windows using the command:  
  `pip install virtualenvwrapper-win`
  
- **Mac**: Refer to this guide on installing virtualenv and virtualenvwrapper:  
  [Installing virtualenv and virtualenvwrapper on macOS | Stack Overflow](https://stackoverflow.com/questions/49470367/install-virtualenv-and-virtualenvwrapper-on-macos)
  
- **Linux**: Learn how to manage Python virtual environments with virtualenvwrapper:  
  [Managing Python Virtual Environments using Virtualenvwrapper | Medium](https://jkariukidev.medium.com/managing-python-virtual-environments-using-virtualenvwrapper-9c6ebde27ee4)

## Part I: Basics of Python

Main Topic: **Basic knowledge of data structure and library use in Python**

Sub Topics:

1. Graphical User Interface GIS (e.g., ArcGIS, QGIS) VS Programming Language (e.g., Python, R)

2. Common data structures (string, list, dictionary, set) and tabular data structure (DataFrame)

   Practice: 

   - How to create different types of data structures in Python
   - How to read excel file/csv as DataFrame?
   - How to get a quick statistical summary of the DataFrame
   - Deal with Null/NA value and outliers in your data

3. How to conduct basic data cleaning (merge, rename, append, replace and coding categorical column, etc.) ?

4. Loop creation and practice of batch modifying the DataFrame through a for loop.

Practice 01: [Python code to manage questionnaire-collected data (Categorical and Ordinal)]()

Practice 02: A quick Explorative Data Analysis (EDA) on the structural data

## Part II: Basics of Geospatial Analysis with Python

Main Topic: **Basic Knowledge of common geospatial Data: Vector and Raster; and how to process them with Python**

Sub Topics:

1. What is GeoDataFrame? 

   [Jupyter Notebook of 2-01 GeoPandas Basics](2-01_gpd_basics.ipynb)

2. How to use **GeoPandas** to create it (polygon, lines and points) from:
   - csv files
   - A DataFrame with coordinate information
   - spatial data files (e.g., shapefile, GeoJSON).

   [Jupyter Notebook of 2-02 GeoPandas Read Files](2-02_gpd_readfiles.ipynb)

3. Basic spatial analysis with GeoDataFrame, including spatial queries, spatial joins and plotting

4. Common formats of geospatial data (e.g., Shapefile, Geopackage, GeoJSON, GPX) and their pros & cons

   Practice: Use Python to transform geospatial data between different formats 

5. Read raster files (.tif) and practice of calculating time-series of NDVI value (evaluate the change of greenness; example source: https://developers.google.com/earth-engine/tutorials/community/modis-ndvi-time-series-animation)

   <img src="images\modis-ndvi-time-series-animation.gif" alt="example_gee_animation" style="zoom: 80%;" />

6. `Easy, Visualisation` Creating a choropleth map of population density by planning area in Singapore with Python (Source: https://doi.org/10.1038/s41598-020-75697-z)

   <img src="images\41598_2020_75697_Fig1_HTML.webp" alt="41598_2020_75697_Fig1_HTML" style="zoom: 25%;" />

   **Optional** `Easy, Data processing` geocoding and reversed geocoding (address <--> coordinates) with Python

## Part III: Advance Visualization for Reporting

Main Topic: 

**How to create a journal quality graph for your report?**

Sub Topics:

1. We will create a graph similar to the reference graph using Python (source: https://doi.org/10.1016/j.apgeog.2024.103460). Which will include data visualisation with Matplotlib and Seaborn ([Seaborn example gallery](https://seaborn.pydata.org/examples/index.html))

   <img src="images\1-s2.0-S0143622824002650-gr3.jpg" alt="1-s2.0-S0143622824002650-gr3" style="zoom:50%;" />

Example of using Python in a real urban research question

1. How to form a workflow for your research question?
2. How to find the data you need from internet? Popular data sources for Singapore and other countries.

Practices

1. **Optional** - `Easy, Data acquiring` [utilising geemap for data acquiring](./contents/geemap.md); the jupyter notebook can be found at [MUSPP_geemap.ipynb](https://colab.research.google.com/drive/1JX-r4sHJhFNW15NWvT_prSXsxcbjKb8D?usp=sharing)
2. **Optional** - `Medium, Spatial analysis`: [How to use Python scripts to power up your spatial analysis task in QGIS?](./contents/pyqgis.md)

## FAQ

For questions, please raise them at [issues section](https://github.com/BayiLi081/GIS-training/issues). Referring to [Creating an issue from a repository](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-repository) for how to raise an issue from GitHub repository online
