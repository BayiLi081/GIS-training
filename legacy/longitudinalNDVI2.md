# Calculating the NDVI in QGIS

In **Landsat 8-9 Operational Land Imager (OLI) and Thermal Infrared Sensor (TIRS**):

| Bands                                | Wavelength (micrometers) | Resolution (meters) |
| ------------------------------------ | ------------------------ | ------------------- |
| Band 1 - Coastal aerosol             | 0.43-0.45                | 30                  |
| Band 2 - Blue                        | 0.45-0.51                | 30                  |
| Band 3 - Green                       | 0.53-0.59                | 30                  |
| Band 4 - **Red**                     | 0.64-0.67                | 30                  |
| Band 5 - **Near Infrared (NIR)**     | 0.85-0.88                | 30                  |
| Band 6 - Shortwave Infrared (SWIR) 1 | 1.57-1.65                | 30                  |
| Band 7 - Shortwave Infrared (SWIR) 2 | 2.11-2.29                | 30                  |
| Band 8 - Panchromatic                | 0.50-0.68                | 15                  |
| Band 9 - Cirrus                      | 1.36-1.38                | 30                  |
| Band 10 - Thermal Infrared (TIRS) 1  | 10.6-11.19               | 100                 |
| Band 11 - Thermal Infrared (TIRS) 2  | 11.50-12.51              | 100                 |

NDVI = (Band 5 – Band 4) / (Band 5 + Band 4)

```
(Singapore_20150820_B5@1 - Singapore_20150820_B4@1) / (Singapore_20150820_B5@1 + Singapore_20150820_B4@1)
```

Can manually type in or use the NDVI in predefined expressions

Reference Layer: use one of input layers

Change the symbology

| Bil  | Vegetation Classes | Description                               | NDVI Values  |
| ---- | ------------------ | ----------------------------------------- | ------------ |
| 1    | Non-Vegetation     | Barren areas, build up area, road network | -1 to 0.199  |
| 3    | Low Vegetation     | Shrub and grassland                       | 0.2 to 0.5   |
| 3    | High Vegetation    | Temperate and Tropical urban forest       | 0.501 to 1.0 |

Urban Vegetation Classes and NDVI value (Source: [Urban vegetation classification with NDVI threshold value method with very high resolution (VHR) Pleiades imagery](https://isprs-archives.copernicus.org/articles/XLII-4-W16/237/2019/))