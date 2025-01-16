# Find the data

## Example of finding the Singapore bus route in spatial format

1. We went to the more official data source, such as the LTA datamall government website. Found the [bus route information](https://datamall.lta.gov.sg/content/dam/datamall/datasets/PublicTransportRelated/BusRoutes.zip) in the LTA data mall.

2. Download it and use text editor to open the file.

3. Take a look of the data .json, we will find there are no geographical information inside. GeoJSON is a type of JSON file, but this one is not a GeoJSON file.

4. Then we open the BusRoute.xml with your web browser such as Chrome or Edge or Firefox (drag the file into broswer window). It also doesn't contain the geographical information.

5. Normally I will just Google "Singapore bus route geojson OR geojson" to find if there are existing data source.

6. People always host the data source on Github or Kaggle, so its a good start from these sites.

7. By using Google, we find [cheeaun/busrouter-sg: BusRouter SG: Singapore Bus Routes Explorer (github.com)](https://github.com/cheeaun/busrouter-sg) where the authour shared the route information we need, but the data folder was updated two years ago. So we probably want the most updated one, but this will be a very perfect backup dataset.

8. But we also read the data section of the markdown in this repo, then we found the person listed the data source. 

   One is the LTA one, which we have confirmed there is no existing one we can use.

   Another is linking us to another repo, [cheeaun/sgbusdata: Singapore Bus data (github.com)](https://github.com/cheeaun/sgbusdata), where the data folder was just updated two weeks ago. 

9. We can just open the folder, and find the data we want! And it's in GeoJSON format which we can just open it with QGIS.

10. Remember to double check the source, as it is not official source. It might contains errors which you need to correct them manually.

11. Also remember cite the author as appreciation!

