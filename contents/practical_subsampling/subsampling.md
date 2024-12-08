# Subsampling

Subsampling in geospatial data processing is typically employed in situations where **working with the entire dataset is computationally expensive or unnecessary**. 

   - The geospatial dataset is **too large to process efficiently** due to its high spatial or temporal resolution.

   - The processing tasks can work effectively with **a representative sample**.
   - Displaying the full geospatial dataset on maps or dashboards leads to **cluttered or slow-rendering visualisations**.

   - The analysis requires coarser data resolution or lower detail to **match other datasets** or **meet specific modelling requirements**.

## Practices

### Test Data

 [raw_subsampling](..\..\data\leaflet_popupimg\raw_subsampling.csv) 

"C:\Users\LiBayi\Documents\work\GIS-training\data\leaflet_popupimg\raw_subsampling.csv"

| First 10 rows |             |                                  |        |
| ------------- | ----------- | -------------------------------- | ------ |
| latitude      | longitude   | time                             | id     |
| -6.1600891    | 106.817773  | 2024-11-25 09:37:51.211000+07:00 | loc_1  |
| -6.1600891    | 106.817773  | 2024-11-25 09:37:51.299000+07:00 | loc_2  |
| -6.1600892    | 106.8177722 | 2024-11-25 09:37:51.398000+07:00 | loc_3  |
| -6.1600882    | 106.8177711 | 2024-11-25 09:37:51.498000+07:00 | loc_4  |
| -6.1600884    | 106.81777   | 2024-11-25 09:37:51.599000+07:00 | loc_5  |
| -6.160088     | 106.8177691 | 2024-11-25 09:37:51.699000+07:00 | loc_6  |
| -6.1600877    | 106.8177683 | 2024-11-25 09:37:51.799000+07:00 | loc_7  |
| -6.1600876    | 106.8177673 | 2024-11-25 09:37:51.898000+07:00 | loc_8  |
| -6.1600875    | 106.8177666 | 2024-11-25 09:37:52+07:00        | loc_9  |
| -6.1600872    | 106.8177657 | 2024-11-25 09:37:52.099000+07:00 | loc_10 |

The total rows is 7036 points.

There are two ways of subsampling:

1. random subsampling

```python
#%%
subsampled_df = data.sample(frac=0.1, random_state=42)
```

2. Equal-Interval Subsampling

Subsampling by equal intervals is another common method to reduce the size of a dataset. In this example, we will subsample the dataset by selecting every 20th row.

```python
# subsample every 20th row
subsampled_df = data.iloc[::20, :]
```

3. grid subsampling

For grid subsampling, we need to define the grid size and the aggregation function. In this example, we will use a grid size of 0.0001 degrees (around 100 m) and the first point in each grid cell as the aggregation function.

> The distance for 1 degree of latitude is roughly 111.32 km everywhere on Earth since lines of latitude are evenly spaced.

```python
# Define grid size
grid_size = 0.0001

# Create grid
data['lat_idx'] = (data['latitude'] // grid_size) * grid_size
data['lon_idx'] = (data['longitude'] // grid_size) * grid_size

# Perform grid subsampling by selecting the first point in each grid cell
subsampled_df = data.groupby(['lat_idx', 'lon_idx']).first().reset_index(drop=True)
```

4. Time-based subsampling

Time-based subsampling is useful when the dataset contains a time dimension. In this example, we will select one point that close to the timepoint of every 30 seconds.

```python
# Convert time column to datetime
data['time'] = pd.to_datetime(data['time'], format="ISO8601")

# Sort the dataset by time
data = data.sort_values('time')

data['second'] = (data['time'] - data['time'][0]).dt.total_seconds()

# Perform time-based subsampling by selecting the first point within each 30-second interval
subsampled_df = data.groupby(data['second'] // 1).first().reset_index(drop=True)
```

Print out the original and subsampled datasets to compare the results.

```python
# Print results
print("Original Dataset:")
print(data.tail())
print("\nSubsampled Dataset (10%):")
print(subsampled_df.tail())
```

In this case, we will be using the grid subsampling, to ensure that the data is not too dense for the visualization.

| The comparison of subsampling by location                    |
| ------------------------------------------------------------ |
| ![subsampling_outputs](C:\Users\LiBayi\Documents\work\GIS-training\imgs\subsampling_outputs.png) |

