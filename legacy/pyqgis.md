# Using Python in QGIS

## Basic

**Open Python Console**

Plugins -> Python Console

QGIS is using the **Interactive Console** (If you use ArcGIS Pro, it will be using Jupyter Notebook)

You can also click "Show Editor" to write a complete Python script, run, and save it.

```python
# Import the required modules
from qgis.core import QgsProject

# Get the current project
project = QgsProject.instance()

# Get the layer by its name or ID
layer = project.mapLayersByName('Singapore_planningarea')[0]  # Replace 'YourLayerName' with the actual name of your layer

# Get the CRS of the layer
crs = layer.crs()

# Print the CRS details
print("Layer CRS:")
print("Name:", crs.authid())
print("Description:", crs.description())
# get the epsg id of the layer
print("EPSG code", crs.postgisSrid())
```

Get the help of function

```python
processing.algorithmHelp("native:centroids")
```

```
Centroids (native:centroids)

This algorithm creates a new point layer, with points representing the centroid of the geometries in an input layer.

The attributes associated to each point in the output layer are the same ones associated to the original features.


----------------
Input parameters
----------------

INPUT: Input layer

	Parameter type:	QgsProcessingParameterFeatureSource

	Accepted data types:
		- str: layer ID
		- str: layer name
		- str: layer source
		- QgsProcessingFeatureSourceDefinition
		- QgsProperty
		- QgsVectorLayer

ALL_PARTS: Create centroid for each part

	Parameter type:	QgsProcessingParameterBoolean

	Accepted data types:
		- bool
		- int
		- str
		- QgsProperty

OUTPUT: Centroids

	Parameter type:	QgsProcessingParameterFeatureSink

	Accepted data types:
		- str: destination vector file, e.g. 'd:/test.shp'
		- str: 'memory:' to store result in temporary memory layer
		- str: using vector provider ID prefix and destination URI, e.g. 'postgres:…' to store result in PostGIS table
		- QgsProcessingOutputLayerDefinition
		- QgsProperty

----------------
Outputs
----------------

OUTPUT:  <QgsProcessingOutputVectorLayer>
	Centroids
```

## Get the Raster for each Singapore Planning Area

- Option1:

  If you want the satellite images for each Singapore Planning Area separately, you will probably need do it over and over again for each data zone using the **Using Clip Raster by mask layer**.

- Option2:

The code performs the clipping operation for each polygon feature in the `polygon_layer` using the corresponding feature's geometry as a mask. It saves the clipped raster as a separate TIFF file for each feature, with unique names based on the feature's name.

```python
# Import the required modules
## Importing Required Modules: The necessary modules are imported from the QGIS library to access various functionalities related to GIS data and processing.
from qgis.core import QgsProject, QgsRasterLayer, QgsRectangle, QgsGeometry, QgsFeature, QgsVectorFileWriter
from qgis.analysis import QgsRasterCalculator, QgsRasterCalculatorEntry
import processing
from processing.core.Processing import Processing

## Specifying Layer Information: The variable `layer_name` stores the name or ID of the raster layer in the QGIS project. The `layer` variable retrieves the actual layer using the provided name or ID by accessing the `QgsProject` instance.

# Specify the layer name or ID in the QGIS project
layer_name = 'LC08_L2SP_125059_20200801_20200914_02_T1_SR_B5'  # Replace 'YourLayerName' with the actual name or ID of your layer

# Get the layer by its name or ID
layer = QgsProject.instance().mapLayersByName(layer_name)[0]  # Replace 'YourLayerName' with the actual name or ID of your layer

# Specify the input TIFF file path
## Specifying Input TIFF File Path: The variable `input_tiff_path` stores the source path of the input TIFF file associated with the `layer`.
input_tiff_path = layer.source()

# Specify the vector layer containing the polygons
## 1. Specifying Vector Layer Information: The variable `polygon_layer` stores the name or ID of the vector layer containing the polygons. The `input_poly_path` variable retrieves the source path of the vector layer using the provided name or ID.
polygon_layer = QgsProject.instance().mapLayersByName('Singapore_planningarea')[0]  # Replace 'YourPolygonLayerName' with the actual name of your polygon layer

input_poly_path = polygon_layer.source()

## Iterating Over Polygon Features: The code iterates over each feature (polygon) in the `polygon_layer` using a loop.
for feature in polygon_layer.getFeatures():
    
    # Retrieving Feature Information: Within the loop, the code retrieves the feature's ID and name using the keys `'Name'` and `'PLN_AREA_N'`, respectively. These values are stored in the variables `feature_id` and `feature_name`.
    feature_id = feature['Name']  
    feature_name = feature['PLN_AREA_N']
    
    print(feature_id)
    
    # Setting Subset String: The code sets the subset string for the `polygon_layer` using the `setSubsetString` method. It filters the features based on the condition `"Name='<feature_id>'"`, where `<feature_id>` is the ID of the current feature.
    polygon_layer.setSubsetString("Name='" + str(feature_id)+'\'')
    
    # Specifying Processing Parameters: The `parameters` dictionary is created, specifying various parameters required for the `gdal:cliprasterbymasklayer` algorithm. It includes input raster, mask layer, output path, and other optional parameters.
    parameters = {'INPUT': input_tiff_path,
                'MASK': polygon_layer, 
                'NODATA': None, 
                'ALPHA_BAND': False, 
                'CROP_TO_CUTLINE': True, 
                'KEEP_RESOLUTION': False, 
                'OPTIONS': '', 
                'DATA_TYPE': 0, 
                'EXTRA': '', 
                'OUTPUT': processed_tiff_path}
    
    # Specifying Output TIFF Path: The `processed_tiff_path` variable stores the output path for the processed TIFF file. It is formatted using the `feature_name` variable to create a unique output file name based on the current feature.
    processed_tiff_path = '/Users/bayili/Documents/sutd/GIS-bootcamp_qgisfiles/outputs/ndvi_by_zone/output_{}.tif'.format(feature_name)  # Replace 'path/to/your/output' with the desired output directory
    
    # Running the Clipping Algorithm: The `processing.run` function is called to execute the `gdal:cliprasterbymasklayer` algorithm with the specified `parameters`. This algorithm clips the input raster using the mask layer and saves the result as the processed TIFF file.
    processing.run("gdal:cliprasterbymasklayer", parameters)
    
    # Resetting Subset String: After processing, the subset string for the `polygon_layer` is reset by setting it to an empty string.
    polygon_layer.setSubsetString('')
    
    # Printing Output Information: The processed TIFF file's path is printed as a confirmation, indicating that the subset TIFF has been successfully saved.
    print("Subset TIFF saved:", processed_tiff_path)
```

**Trick**:

You can always open the tool you wish to use from graphical interface and **copy as Python command**, paste into Python file and adjust the parameter accordingly.

If you want to know more about how to use QGIS to automating map layout, you can reference [PyQGIS Tutorial: Automating Map Layout (geodose.com)](https://www.geodose.com/2022/02/pyqgis-tutorial-automating-map-layout.html)