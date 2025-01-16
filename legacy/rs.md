# Remote Sensing

Remote sensing is the process of acquiring information about the Earth's surface, atmosphere, and oceans from a distance using sensors and instruments on board aircraft or satellites.

The common data format used in remote sensing is **raster**.

- More suitable for storing continuous data
- Easier to scale, clip, and reproject

## Introduction of Remote Sensing

[Landsat 8 Swath Animation - YouTube](https://www.youtube.com/watch?v=xBhorGs8uy8)

## Applications of Remote Sensing in Urban Planning

Remote sensing technology can be used to **detect and monitor changes** in the Earth's surface, such as vegetation patterns, land use and land cover changes, urbanization, and natural disasters. It can also be used to measure atmospheric properties such as temperature, humidity, and air quality. 

## Common RS indexes

**Mathematical combinations of spectral bands** from remote sensing imagery that are used to identify and quantify specific properties or features of the Earth's surface.

| ![rs_001](../imgs/rs_001.jpg)                                |
| ------------------------------------------------------------ |
| Spectral signatures of soil, vegetation and water, and spectral bands of LANDSAT 7.<br>The **spectral reflectance curve of healthy green vegetation** has a significant minimum of reflectance in the visible portion of the electromagnetic spectrum resulting from the pigments in plant leaves. Reflectance increases dramatically in the near infrared. **Stressed vegetation** can also be detected because stressed vegetation has a significantly lower reflectance in the infrared. |
| Source: [Siegmund, Menz 2005](https://seos-project.eu/remotesensing/remotesensing-c09-p01.html#Siegmund2005) with modifications |

Different materials have different reflectance properties, which means they reflect different amounts of light at different wavelengths.

Remote sensing sensors can measure the reflectance of light at different wavelengths, and the resulting spectral signatures can be used to distinguish between different materials. 

Remote sensing indexes combine information from multiple spectral bands to highlight specific features or properties of interest. For example, 

By using remote sensing indexes to analyze changes in spectral signatures over time, researchers can identify changes in surface materials and monitor the health and condition of natural resources, such as forests, wetlands, and agricultural land.

**We are not specialised in remote sensing, so it is not necessary to remember any of the equations, you can always Google the information**

### Normalized Difference Vegetation Index (NDVI)

NDVI measures the difference in reflectance between the **near-infrared** and **red** portions of the spectrum to identify areas of healthy vegetation.

> Healthy vegetation typically reflects more light in the near-infrared portion of the electromagnetic spectrum, while water and bare soil reflect more light in the visible and shortwave infrared portions of the spectrum.

$$
NDVI = (NIR - Red) / (NIR + Red)
$$

NDVI values range from **+1.0 to -1.0**. Areas of barren rock, sand, or snow usually show very low NDVI values (for example, 0.1 or less). Sparse vegetation such as shrubs and grasslands or senescing crops may result in moderate NDVI values (approximately 0.2 to 0.5).

### Normalized Difference Built-up Index (NDBI)

The Normalized Difference Built-up Index (NDBI) is a remote sensing index that quantifies the amount and density of built-up areas within an image or study area. 

It can provide valuable information about the extent and density of built-up areas, and can be used to monitor urban expansion, land use changes, and their impact on the environment.

It is calculated using the following formula:


$$
NDBI = (SWIR - NIR) / (SWIR + NIR)
$$




where: SWIR = **Shortwave Infrared** reflectance NIR = **Near-infrared** reflectance

The resulting NDBI values range from **-1 to +1**, with higher values indicating higher levels of built-up areas and urbanization.

### Land Surface Temperature (LST)

Land Surface Temperature (LST) is the temperature of the land surface, which can be measured remotely using thermal remote sensing data.

LST is influenced by various factors such as solar radiation, air temperature, soil moisture, vegetation cover, and surface properties. These factors can cause variations in LST, making it essential to measure LST accurately and with high spatial and temporal resolution.

LST can be used to assess the **urban heat island effect**, where urban areas experience higher temperatures than surrounding rural areas due to the high density of buildings and materials that absorb and retain heat.

To calculate the LST with Landsat 8 satellite images, you can follow tutorial: [How to calculate Land Surface Temperature with Landsat 8 satellite images](https://giscrack.com/how-to-calculate-land-surface-temperature-with-landsat-8-images/)



