from qgis.core import (
    QgsProject,
    QgsLayout,
    QgsLayoutItemMap,
    QgsLayoutExporter,
    QgsLayoutSize,
    QgsLayoutPoint,
    QgsRectangle,
)
import os

# Load layers
hc_points_layer = QgsProject.instance().mapLayersByName("hc_points_cleaned — hc_points")[0]
planning_area_layer = QgsProject.instance().mapLayersByName("sg_planning_area_nosea")[0]
carto_dark_layer = QgsProject.instance().mapLayersByName("Carto Dark")[0]  # Ensure "Carto Dark" is added to the project

# Check if layers exist
if not hc_points_layer or not planning_area_layer or not carto_dark_layer:
    raise ValueError("One or more layers are missing. Please ensure the layer names are correct.")

# Create output directory
output_dir = os.path.join(QgsProject.instance().homePath(), "Planning_Area_Maps")
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Iterate through planning areas
for planning_area in planning_area_layer.getFeatures():
    planning_area_name = planning_area["PLN_AREA_N"]  # Replace "name" with the actual field name for planning areas

    # Check if the planning area contains any hawker centres
    intersects = False
    for hawker_centre in hc_points_layer.getFeatures():
        if planning_area.geometry().intersects(hawker_centre.geometry()):
            intersects = True
            break

    if not intersects:
        print(f"Skipping {planning_area_name} as it has no hawker centres.")
        continue

    print(f"Processing planning area: {planning_area_name}")

    # Create a new layout
    layout = QgsLayout(QgsProject.instance())
    layout.initializeDefaults()
    layout.name = planning_area_name

    # Define the page size and map item size
    page_width = 297  # A4 width in mm
    page_height = 210  # A4 height in mm

    # Create a map item and set its size and position
    map_item = QgsLayoutItemMap(layout)
    map_item.setRect(20, 20, page_width - 40, page_height - 40)  # Leave margins
    map_item.setExtent(planning_area.geometry().boundingBox())  # Focus on the planning area
    map_item.setLayers([hc_points_layer, planning_area_layer, carto_dark_layer])
    map_item.attemptMove(QgsLayoutPoint(20, 20))  # Set top-left corner position
    map_item.attemptResize(QgsLayoutSize(page_width - 40, page_height - 40))  # Fit map to layout
    layout.addLayoutItem(map_item)

    # Save the layout as a PDF
    planning_area_name = planning_area_name.replace(" ", "_")
    output_file = os.path.join(output_dir, f"{planning_area_name}.pdf")
    exporter = QgsLayoutExporter(layout)
    export_settings = QgsLayoutExporter.PdfExportSettings()
    result = exporter.exportToPdf(output_file, export_settings)
    if result != QgsLayoutExporter.Success:
        print(f"Failed to export map for {planning_area_name}")

print(f"Maps have been saved to {output_dir}")