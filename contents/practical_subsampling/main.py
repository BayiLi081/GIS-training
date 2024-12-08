import pandas as pd

# Example dataset
data = pd.read_csv("../../data/leaflet_popupimg/raw_subsampling.csv")

data.head()

# Define grid size
grid_size = 0.0001

# Create grid
data['lat_idx'] = (data['latitude'] // grid_size) * grid_size
data['lon_idx'] = (data['longitude'] // grid_size) * grid_size

# Perform grid subsampling by selecting the first point in each grid cell
subsampled_df = data.groupby(['lat_idx', 'lon_idx']).first().reset_index(drop=True)

# Print results
# print("Original Dataset:")
# print(data.tail())
# print("\nSubsampled Dataset (0.0001 degree):")
# print(subsampled_df.tail())

# Save subsampled dataset
subsampled_df.to_csv("../../data/leaflet_popupimg/subsampled.csv", index=False)
