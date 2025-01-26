# 1-01_data

`Challenge`: Create a dictionary `SUTD`; it has four keys, and their values are:

- number of student : 1000,

- number of faculty : 100,

- location : Changi,

- year established : 2009

Using `f-string` to print a string "SUTD has 1000 students and 100 faculty members. It is located at Changi and was established in 2009."

```python
SUTD = {
    'number of student' : 1000,
    'number of faculty' : 100,
    'location' : 'Changi',
    'year established' : 2009
}

print(f"SUTD has {SUTD['number of student']} students and {SUTD['number of faculty']} faculty members. It is located at {SUTD['location']} and was established in {SUTD['year established']}.")
```

`Challenge`: Can you make a function `calculate_future_balance` to calculate the balance of the year if my bank_balance increases 10% every year?

```python
def calculate_future_balance(age, initial_balance, growth_rate, start_year, end_year):
    years = end_year - start_year
    age = age + years
    future_balance = initial_balance * ((1 + growth_rate) ** years)
    return age, future_balance
```

# 1-02_dataframe_geo

`Challenge 1:` 

1. Is the number returned from `.nunique()` equal to length of the dataframe?

```python
df['Name'].nunique() == len(df)
```

2. What does the difference in number mean?

# 1-03_questionnaires

## Challenge 1

`Challenge 1`: 

How many respondents and how many questions are there in the data?

```python
print(df.shape)
print("There are total " + str(df.shape[0]) + " respondents")
print("There are total " + str(df.shape[1]) + " questions")
```

## Challenge 2

`Challenge 2`: 

How many age groups are there in the data?

```python
df['Q2-Age'].nunique()
print(f"The number of unique age groups in the 'Q2-Age' column is: {df['Q2-Age'].nunique()}")
df['Q2-Age'].unique()
print(f"The unique age groups in the 'Q2-Age' column are: {df['Q2-Age'].unique()}")
```

```python
df['Q2-Age'].nunique()
```

to list all the age groups in the data

```python
df['Q2-Age'].unique()
```

## Challenge 3

`Challenge 3`: Add more elements to the graph.

```python
# Plot the results
age_group_frequency.plot(kind='bar', stacked=True)
plt.title('Frequency of Riding a Cycle Hire Bike by Age Group')
plt.xlabel('Age Group')
plt.ylabel('Frequency Count')
plt.legend(title='Riding Frequency')
```

# 2-01_vector

## Challenge 1

`Challenge 1`: Can you colour different planning area by different colour?

```python
planningarea_sg.plot(column='PLN_AREA_N', cmap = 'viridis', legend=False)
```

## Challenge 2

`Challenge 2`: Read the CSV file of income by planning area in Singapore

```python
income = pd.read_csv('../data/raw/part_ii/income_sg/income.csv')
income.head()
```

## Challenge 3

`Challenge 3`: Find the cycling path that intersects with the Tampines planning area.

# 2-03_network

`Challenge 1`: Read the above two files as GeoDataFrame and a quick plot

```python
hc_sg = gpd.read_file("../data/raw/project/hc_points_cleaned.geojson")
mrt_sg = gpd.read_file("../data/processed/part_ii/mrt_sg/MRT_LRT_Stations.shp")
hc_sg.plot()
mrt_sg.plot()
```

# 3-02_datavis

`Challenge 1`: Can you make a subset of data which contains only the selected variables, and print the unique values for each variable using for-loop?

```python
df_subset = df[list_var]

for var in list_var:
    print(var)
    print(df_subset[var].unique())
```

# 3-03-01_staticmapping

`Challenge 1`: We want to zoom in a specific train station, Opera House? How to define the area of interests?

```python
lat, lng = 10.77583026473087, 106.70264134588675

area_of_interest = [lng - 0.01, lat - 0.01, lng + 0.01, lat + 0.01]

# Create the plot with the GeoDataFrame
ax = metro_hcmc_a.plot(color='red', figsize=(10, 10))

# Add the Google Street basemap
ctx.add_basemap(ax, source = ctx.providers.CartoDB.Positron, crs=metro_hcmc_a.crs)

ax.set_xlim(area_of_interest[0], area_of_interest[2])
ax.set_ylim(area_of_interest[1], area_of_interest[3])

plt.show()  # Display the plot
```

`Challenge 2`: Can you import it and plot it on the map?

```python
# Load the GeoDataFrame
hcmc_boundary = gpd.read_file('../data/raw/part_iii/HCMC_Boundary.geojson')

# Create the plot with the GeoDataFrame
ax = hcmc_boundary.plot(edgecolor='red', facecolor='none', linestyle='--', figsize=(10, 10))

# Add the Google Street basemap
ctx.add_basemap(ax, source=ctx.providers.CartoDB.Positron, crs=hcmc_boundary.crs)

plt.show()  # Display the plot
```

# 3-03-02_interactivemapping
