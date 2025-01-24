# Example: Assessing Social Equity in Hawker Centre in Singapore

Evaluate whether Hawker Centre access is equitable across different population groups in Singapore using the <u>2SFCA method</u>.

#### **1. Define the Research Question**

- **Objective**: Assess Hawker Centre accessibility using the 2SFCA method to determine social equity in Hawker Centre services across Singapore.

- **Key Components**:

  - Locations of Hawker Centre facilities and their capacity.

  - Population distribution and demographic characteristics.

  - Travel distances or times between population centroids and Hawker Centre facilities.

- **Key considerations**: 

  - Hawker Centre facilities: locations, capacity, and catchment areas.

  - Population: spatial distribution, density, and sociodemographic factors.

#### **2. Data Collection**

1. **Hawker Centre Facility Data**:

   - Source: NEA

   - Attributes needed:
     - Address
     - Capacity (e.g., number of stalls).

2. **Population Data**:

   - Source: Census data, government open data portals.

   - Attributes needed:

     - Population counts by area.

     - Socio-demographic variables (e.g., income, age groups).

3. **Boundary and Road Network Data**:

   - Source: OpenStreetMap, government geospatial data repositories.

   - Use for defining regions and calculating travel distances.

**Load Data**:

   - Hawker Centre facility locations and capacities.

   - Population distribution as a GeoDataFrame.

   ```python
   facilities = gpd.read_file("Hawker Centre_facilities.geojson")  # Add capacity column
   population = gpd.read_file("population_data.geojson")  # Add population count column
   ```

   
### **Step 2: Compute Travel Distances**

1. **Get Road Network**:

    Use OpenStreetMap data to retrieve Singapore's road network.

    ```python
    G = ox.graph_from_place("Singapore", network_type="drive")
    ```

#### **3. Data Preprocessing**

2. **Calculate Travel Distances**:

   - Create a function to compute travel time between points using `osmnx` or `networkx`.

   ```python
   import networkx as nx

   def calculate_travel_time(G, origin, destination, speed_kmh=30):
       orig_node = ox.nearest_nodes(G, origin.x, origin.y)
       dest_node = ox.nearest_nodes(G, destination.x, destination.y)
       length = nx.shortest_path_length(G, orig_node, dest_node, weight='length')
       travel_time = length / (speed_kmh * 1000 / 60)  # Convert to minutes
       return travel_time
   ```

   - Compute distances between facilities and population centroids:
   ```python
   distances = []
   for _, facility in facilities.iterrows():
       for _, pop in population.iterrows():
           time = calculate_travel_time(G, pop.geometry, facility.geometry)
           distances.append({'facility_id': facility['id'], 'pop_id': pop['id'], 'time': time})
   distances_df = pd.DataFrame(distances)
   ```


1. **Standardize Coordinate Reference System (CRS)**:
   - Ensure all datasets use a consistent CRS, such as EPSG:3414 (SVY21 for Singapore).

2. **Clean and Format Data**:

   - Remove duplicates or irrelevant attributes.

   - Geocode Hawker Centre facilities and population centers if needed.

3. **Create Population Centroids**:
   - Generate centroids for population polygons to represent demand points.

4. **Calculate Travel Times or Distances**:

   - Use QGIS plugins (e.g., ORS Tools) to compute travel distances or times between Hawker Centre facilities and population centroids.

#### **4. Apply the 2SFCA Method**

The 2SFCA method involves two main steps:

**Step 1: Calculate Facility-to-Population Ratios** 

1. Define a catchment area for each Hawker Centre facility (e.g., 30-minute travel radius).

2. Identify all population centroids within the catchment area.

3. Calculate the facility-to-population ratio:

   $$
   R_j = \frac{S_j}{\sum_{i \in C_j} P_i}
   $$
   Where:
   - $ R_j $: Facility-to-population ratio for facility $ j $.
   - $ S_j $: Service capacity of facility $ j $ (e.g., beds or physicians).
   - $ P_i $: Population of centroid $ i $ within the catchment $ C_j $.

**Step 2: Aggregate Accessibility Scores for Each Population Point** 

1. For each population centroid, identify all facilities within its catchment.

2. Sum the $ R_j $ values for all facilities in the centroid’s catchment:

   $$
   A_i = \sum_{j \in C_i} R_j
   $$
   Where:
   - $ A_i $: Accessibility score for population centroid $ i $.
   - $ C_i $: Set of facilities within the centroid’s catchment.

#### **5. Visualize Results**

1. **Map Accessibility Scores**:

   - Join the accessibility scores ($ A_i $) to the population centroids.

   - Use choropleth maps to display accessibility disparities.

2. **Overlay Socio-Demographic Data**:
   - Compare accessibility scores with socio-demographic variables (e.g., income, age).

   - Highlight areas with low accessibility and vulnerable populations.





### **Step 3: Apply the 2SFCA Method**

1. **Step 1: Calculate Facility-to-Population Ratios**:

   - Define a catchment threshold (e.g., 30 minutes).

   - Filter population points within the catchment and compute $ R_j $.

   ```python
   catchment_threshold = 30  # minutes
   facility_ratios = []

   for facility_id, group in distances_df.groupby('facility_id'):
       within_catchment = group[group['time'] <= catchment_threshold]
       pop_sum = population.loc[population['id'].isin(within_catchment['pop_id']), 'population'].sum()
       capacity = facilities.loc[facilities['id'] == facility_id, 'capacity'].values[0]
       ratio = capacity / pop_sum if pop_sum > 0 else 0
       facility_ratios.append({'facility_id': facility_id, 'ratio': ratio})
   facility_ratios_df = pd.DataFrame(facility_ratios)
   ```

2. **Step 2: Aggregate Accessibility Scores for Each Population Point**:

   - Sum facility-to-population ratios for each population centroid within its catchment.

   ```python
   accessibility_scores = []

   for pop_id, group in distances_df.groupby('pop_id'):
       within_catchment = group[group['time'] <= catchment_threshold]
       total_accessibility = facility_ratios_df.loc[
           facility_ratios_df['facility_id'].isin(within_catchment['facility_id']), 'ratio'
       ].sum()
       accessibility_scores.append({'pop_id': pop_id, 'accessibility': total_accessibility})
   accessibility_df = pd.DataFrame(accessibility_scores)
   ```

### **Step 4: Visualization**

1. **Join Accessibility Scores to Population GeoDataFrame**:

   ```python
   population = population.merge(accessibility_df, left_on='id', right_on='pop_id')
   ```

2. **Plot Accessibility Scores**:

   ```python
   population.plot(column='accessibility', cmap='viridis', legend=True)
   ```

### **Step 5: Interpretation and Reporting**

1. **Identify Inequities**:

   - Analyze areas with low accessibility.

   - Overlay socio-demographic data (e.g., income levels) to understand disparities.

2. **Generate Insights**:
   - Highlight underserved areas and potential interventions (e.g., new facilities or increased capacity).