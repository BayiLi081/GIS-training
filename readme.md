# Spatial Analysis of Urban Data with Python

<div align="center">
    <a href="https://lkycic.sutd.edu.sg/">
        <img src="https://img.shields.io/badge/LKYCIC-SUTD-blue" alt="LKYCIC-SUTD">
    </a>
    <a href="https://img.shields.io/github/stars/BayiLi081/GIS-training/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/BayiLi081/GIS-training.svg" alt="GitHub contributors">
    </a>
    <a href="https://github.com/BayiLi081/GIS-training/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/BayiLi081/GIS-training?color=blue" alt="GitHub license">
    </a>
    <br>
    <a href="https://github.com/BayiLi081/GIS-training">
        <img src="https://img.shields.io/github/stars/BayiLi081/GIS-training" alt="GitHub stars">
    </a>
    <a href="https://github.com/BayiLi081/GIS-training/fork">
        <img src="https://img.shields.io/github/forks/BayiLi081/GIS-training" alt="GitHub forks">
    </a>
</div>

**!!! Important !!! Perquisites:** Before the course, please go to the **[preparation section](./0-01_intro.md)** to make sure you have correctly set up the developing environment for Python.

## Run Locally

To use the slide website properly, serve it through a local Python web server.

Opening the HTML files directly as `file://...` can break shared navigation and some interactive browser features.

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Prerequisites:

1. Laptop to use in hands-on session
2. Internet connection
3. Preferred to have basic knowledge in GIS

## Environment Setup

Setting up a Python programming environment can be both complex and time-consuming. In this study, we aim to simplify the process by using collaborative, browser-based IDEs. Please create an account on [Google Colab](https://colab.research.google.com/). 

If you prefer to set up a Python programming environment on your own computer, please refer to the following resources: 

- [Download Python | Python.org](https://www.python.org/downloads/)

After installing Python, it is common practice to use a virtual environment to manage an isolated environment for your project. While optional, setting up a virtual environment is recommended for better project management. If you're interested, follow the instructions below:  

- **Windows**: Install virtualenvwrapper for Windows using the command:  
  `pip install virtualenvwrapper-win`
  
- **Mac**: Refer to this guide on installing virtualenv and virtualenvwrapper:  
  [Installing virtualenv and virtualenvwrapper on macOS | Stack Overflow](https://stackoverflow.com/questions/49470367/install-virtualenv-and-virtualenvwrapper-on-macos)
  
- **Linux**: Learn how to manage Python virtual environments with virtualenvwrapper:  
  [Managing Python Virtual Environments using Virtualenvwrapper | Medium](https://jkariukidev.medium.com/managing-python-virtual-environments-using-virtualenvwrapper-9c6ebde27ee4)

## Intended Learning Outcomes

By the end of this course, students should be able to:

1. Explain fundamental GIS concepts and distinguish between major types of spatial data
2. Apply GIS methods to analyse vector, raster, and network-based geospatial data
3. Create maps and visual outputs to communicate spatial information clearly
4. Apply basic spatial statistical methods to interpret spatial patterns and relationships
5. Design a reusable analytical workflow for investigating a real-world urban issue
6. Use GeoAI critically and work in a group to publish a transparent and reproducible open-source workflow

- Basic visualisation of geospatial data

All contents will be delivered in a hybrid manner of **Lecture and Practice**. 

## Course Outline

### 0-3 Hour: Basics of Python

Main Topic: **Structural data**

Sub Topics:

1. Graphical User Interface GIS (e.g., ArcGIS, QGIS) VS Programming Language (e.g., Python, R)

2. Common data structures (string, list, dictionary, set) and tabular data structure (DataFrame)

   Practice: 

   - How to create different types of data structures in Python

   - How to read excel file/csv as DataFrame? And how to get a quick statistical summary of the DataFrame
   - How to merge two DataFrame based on common column?

3. Loop creation and practice of modifying the DataFrame through a loop.

4. Appending a DataFrame

5. (optional) Practice of unstructured data: How to batch extract text information from multiple PDFs with Python? (OCR and AI-based method)

### 3-6 Hour Spatial Day

Main Topic: **Geospatial Data: Vector and Raster**

Sub Topics:

1. What is GeoDataFrame? and How to properly create it from a DataFrame with coordinate information.

2. Basic spatial Analysis with GeoDataFrame, including spatial queries, spatial joins and plotting

3. Common formats of geospatial data (e.g., Shapefile, Geopackage, GeoJSON, GPX) and their pros & cons

   Practice: Use Python to transform geospatial data between different formats 

4. Read raster files (.tif) and practice of calculating time-series of NDVI value (evaluate the change of greenness)

5. (Optional - Easy) geocoding and reversed geocoding (address <--> coordinates) with Python

### 6-9 Hour

Main Topic: **Data acquiring, cleaning, mining, and basic visualisation**

Sub Topics:

1. How to find the data you need from internet? Popular data sources for Singapore and other countries.
2. Handling abnormal values (outliers, na, null) and coding categorical variables
3. Exploratory Data Analysis (EDA) with Python
4. Data visualisation with Matplotlib and Seaborn ([Seaborn example gallery](https://seaborn.pydata.org/examples/index.html))

(Optional - Medium): [How to use Python scripts to power up your spatial analysis task in QGIS?](./contents/pyqgis.md)

### 9-12 Hour

Main Topic **Advance analysis and visualisation**

1. [Distance analysis with Python (shortest path, isochrone)](./contents/distance_analysis.md)
2. Mapping with Folium and Kepler.gl
3. Interactive visualisation with [Pyecharts - Document](https://gallery.pyecharts.org/#/README_EN)

Topic-oriented practice: analysis the factors behind health level

1. Practice 01: Linear regression with Python and OLS analysis
2. Practice 02: Geographically weighted regression (GWR)
3. Discussion: At which aspects, GWR analysis improved the performance of OLS?

(Optional - Hard) [Mapping tabular data (with location information and linked image) with Folium](./contents/practical_popupimg/leaflet_popupimg.md)

### 12-15 Hour

Main Topic **Python for Paper**

1st Part:

At the final day, we will find a complex figure, including elements of map and charts,from a well-known journal. We will try to recreate the figure by Python programming as similar as possible.

2nd Part:

We find the popular urban research questions voted by the students from a provided list. We tried to deconstructed the research question and find a solution to address them efficiently.

3rd Part (optional):

How to use AI to improve the efficiency of programming?

## View Online

Scan the QR code below to visit the online version of this project:

![QR Code](imgs/qr_site.jpg)

# References and Additional Resources

1. [dlab-berkeley/Python-Geospatial-Fundamentals](https://github.com/dlab-berkeley/Python-Geospatial-Fundamentals)
1. [GEOG 160: Mapping our Changing World](https://www.e-education.psu.edu/geog160/)
# 

Check out the following resources to learn more about Geospatial programming and analysis:

* [ArcGIS-Online-Fundamentals](https://github.com/dlab-berkeley/ArcGIS-Online-Fundamentals)
* [Geospatial Fundamentals in QGIS](https://github.com/dlab-berkeley/Geospatial-Fundamentals-in-QGIS)
* [R-Geospatial-Fudamentals](https://github.com/dlab-berkeley/R-Geospatial-Fundamentals)

## Declaration

**Use of third-party materials.** Parts of this course draw on information, figures and examples from publicly available online sources. We have tried to cite every source. If an attribution is missing or incorrect, the omission is unintentional. Please let us know and we will correct it or remove the material.

**Use of generative AI.** Some content in this course was drafted or refined with AI tools. The authors reviewed and edited all AI-assisted content before including it. Despite these checks, some errors or inaccuracies may remain; any such errors are unintentional.

To report a missing citation, an inaccuracy or any other concern, please [open an issue](https://github.com/BayiLi081/GIS-training/issues).
