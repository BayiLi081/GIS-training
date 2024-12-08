# Using geocoding api

What is [Nominatim (openstreetmap.org)](https://nominatim.openstreetmap.org/ui/search.html)?

[Nominatim](https://nominatim.openstreetmap.org/ui/search.html) is a free and open-source geocoding service provided by OpenStreetMap (OSM). Geocoding is the process of converting addresses or place names into geographic coordinates (latitude and longitude) that can be used for mapping and spatial analysis.

Let's open [Google Colab](https://colab.research.google.com/)

```python
import requests

# Specify the address to geocode
address = '1600 Amphitheatre Parkway, Mountain View, CA'

# Make a request to the Nominatim API
url = f'https://nominatim.openstreetmap.org/search?q={address}&format=json'
response = requests.get(url)
data = response.json()

# Extract the coordinates from the response
if data:
    location = data[0]
    latitude = float(location['lat'])
    longitude = float(location['lon'])
    print(f'Latitude: {latitude}, Longitude: {longitude}')
else:
    print('Geocoding failed.')
```

Be careful about the postcode: in other country, postcode could refer to a district rather than a building. The more information you add to your query, the more accurate the result could be.

### Add point feature to your QGIS canvas by coordinates

1. Go to Google Map, find the location you want to add, and  find its coordinates (longitude and latitude)
2. Create a point format vector layer (dont use projected crs, as we are using degree as unit, so just use 4326)
3. **Add Point Feature**
4. **Vertex tool current layer**
5. random add a point, right click the point and manually add the coordinates in the vertex editor table