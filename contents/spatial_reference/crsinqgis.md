# Setting up CRS in QGIS

Create a new project, save it on the drive, and name it as you like. 

Drag the [bus_stops_singapore.shp](../../../GIS-bootcamp_qgisfiles/data/bus_stops_singapore.shp) into the canvas of QGIS

# Extra intro of QGIS

Right click of the layer, open the "Layer Properties"

Go through the tabs under layer properties:

1. Information

   General

   Coordinate Reference System

   Fields

2. Source

   Layer name

   Data source encoding (Gibberish text due to )

   Assigned CRS (Layer CRS)

3. Symbology

   Where you can play the visualisation (colour, size, etc.)

4. Labels

5. Fields

   Attributes data model

6. Other tabs are not usually used, but you can play around upon yourself.

## CRS management in QGIS

### Project CRS

Each project you open in QGIS has a coordinate reference system associated with it. This is called the project CRS. The project CRS determines how the data you add to a project is displayed on the map canvas. You can view the project CRS in the bottom right corner of the screen.

#### Default settings

When you open a new project, the project CRS is set to WGS84 (EPSG:4326) by default. When you add your first layer to an empty project, the project CRS will be automatically changed to match the CRS of the data that you have imported (following the first layer).

If this is not the case then you can change the default settings by navigating to Settings » Options... (Windows) / QGIS » Preferences... (Mac) and selecting the CRS tab in the window that opens. The choice to "use CRS from first layer added" is under the CRS for projects section.

#### Changing the project CRS

You can change the project CRS by following these simple steps:

**Step 1:** Click on the EPSG code in the bottom right corner of the QGIS interface.

**Step 2:** Search for a CRS in the search box using either its name or EPSG code.

**Step 3:** Select the CRS from the list of results. Make sure that you select the one with the correct EPSG code, many coordinate systems have the same name!

**Step 4:** Click OK. The map canvas view will be changed to show the data in the coordinate system that you have selected.

**Step 5:** If you see a pop-up window asking you to select a transformation, click OK.

### Layer CRS

As you can imagine, different layers added to a project can have different coordinate reference systems. 

In QGIS, all layers are re-projected and displayed on the map canvas using the project CRS.

### Re-projecting layers

**Only reproject this will change the properties of file**

**Can also tranform the file from projected CRS back to geographic CRS**

If you want to change the coordinate system of a layer, you can re-project it using the following steps or use the reproject tool.

**Step 1:** Right-click on the layer in the layers panel.

**Step 2:** Select Export » Save Feature As... from the menu.

**Step 3:** Choose a file name and path by clicking on the ... on the right beside the file name field.

**Step 4:** Select a different CRS from the drop-down menu (only shows recently used coordinate systems). Click on the button beside this to select a projection from the complete list of available options.

**Step 5:** Leave all other fields the same and click OK. You have now created a new file containing the same data as the original, but with a different CRS.

## Project the file to another CRS

The use of **Reproject layer** tool in QGIS

The [bus_stops_singapore.shp](../../../GIS-bootcamp_qgisfiles/data/bus_stops_singapore.shp) comes with 4326, try to project to 3857

