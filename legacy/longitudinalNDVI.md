# Download the satellite image data

Create an account on [USGS](https://ers.cr.usgs.gov/register)

1. Login through the [username and password](https://ers.cr.usgs.gov/login)
2. Open [EarthExplorer](https://earthexplorer.usgs.gov/)
3. Type in **Landsat 8 (All matched results)** in Data Set Search
4. Ask Google/ChatGPT the difference between level 1 and level 2 data set, but in the study, we use the level 2 (overall, level 2 is more accurate)
5. Read the detail and information about the [USGS EROS Archive - Landsat Archives - Landsat 8-9 OLI/TIRS Collection 2 Level-2 Science Products | U.S. Geological Survey](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-landsat-archives-landsat-8-9-olitirs-collection-2-level-2)
6. Read the [What are the band designations for the Landsat satellites? | U.S. Geological Survey (usgs.gov)](https://www.usgs.gov/faqs/what-are-band-designations-landsat-satellites)
7. Zoom to Singapore, and click **Use Map** (Or use the number of path and row of WRS: 125 and 059 in Additional Criteria)
8. Select the date range and choose the the data range you want to search (In this tutorial, we just limit to August in the search months box)
9. Limit the satellite to 8 in the additional criteria.

10. Limit the collection category to Tier 1

> What is the difference between Tier 1 and Tier 2 Landsat?
>
> **Tier 1 data have the highest radiometric and positional quality**. They have precision terrain processing and have been inter-calibrated across the Landsat sensors. The USGS recommends using Tier 1 data for all future time-series analysis. Tier 2 data are still very good images.

12. Show result
13. Use Browse overlay to double check that Singapore is covered
14. Then add the select date to bulk download (or open it and only download the band you want, in this case, band 4 and band 5 are what we are looking for)
15. Open item Basket and start order and submit
16. Later you will receive an email and download the data from the url enclosed

## Clip the file to the extent of Singapore

**Clip raster by extent**

Input Layer: for_CLIP.TIF

Clipping extent: Calculating from layer -> select the Singapore planning area layer

Clipped: Save to file -> Name it properly

**Clouds and cloud shadows?**

Clouds and cloud shadows can obscure the underlying surface features and can affect the accuracy of image analysis and interpretation.

There are algorithmns to mask out clouds in the satellite images different from products.

For example, in QGIS, you can follow [the tutorial to mask the clouds in Landsat 8 images](https://giscrack.com/application-of-masks-for-clouds-in-landsat-8-images-with-qgis/).

In this tutorial, we can just proceed to calculation as we only use the function of raster calculator.
