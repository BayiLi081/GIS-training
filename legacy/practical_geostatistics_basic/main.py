#%%
import geopandas as gpd

import matplotlib.pyplot as plt
#%%
# Path to the shapefile
HDB_BFP = 'data/HDB_buildingfootprint.shp'
HDB_ISO = 'data/HDB_400misochrone_fromHDBCentroid.shp'
All_FOOD = 'data/all_foodretails.shp'

# Read the shapefile
HDB_BFP = gpd.read_file(HDB_BFP)
HDB_ISO = gpd.read_file(HDB_ISO)
All_FOOD = gpd.read_file(All_FOOD)

#%%
# find if there is duplicated osm_id in HDB_BFP
HDB_BFP[HDB_BFP.duplicated(subset=['osm_id'], keep=False)]
# remove the duplicated osm_id
HDB_BFP_nodup = HDB_BFP.drop_duplicates(subset=['osm_id'], keep='first')

#%%
HDB_BFP.plot()

# Show the plot
plt.show()
#%%
HDB_ISO.plot()

# Show the plot
plt.show()
# %%
All_FOOD.plot()

# Show the plot
plt.show()

#%%
# You may have noticed that they have different coordinate reference systems (CRS).
# Let's check the CRS of each GeoDataFrame.
print(HDB_BFP.crs)
print(HDB_ISO.crs)
print(All_FOOD.crs)

# Therefore, we need to transfer the crs of ALL_FOOD to the same as HDB_ISO
# Transfer the crs of ALL_FOOD to the same as HDB_ISO
All_FOOD = All_FOOD.to_crs(HDB_ISO.crs)

#%%
# Check the crs again
print(HDB_BFP.crs)
print(HDB_ISO.crs)
print(All_FOOD.crs)
# %%
# check the table of All_FOOD
All_FOOD.head()
# Split the file into two categories based on the column healthy
healthy = All_FOOD[All_FOOD['healthy'] == 1]
unhealthy = All_FOOD[All_FOOD['healthy'] == 0]
# %%
healthy.plot()

# Show the plot
plt.show()
# %%
unhealthy.plot()

# Show the plot
plt.show()
# %%
##############################################################
# Spatial Join the Isochrone to the healthy food #
# The join way should be one isochrone to multiple points#
##############################################################
# Perform spatial join
healthy_joined = gpd.sjoin(healthy, HDB_ISO, how='inner', op='intersects')
#%%
unhealthy_joined = gpd.sjoin(unhealthy, HDB_ISO, how='inner', op='intersects')
# %%
healthy_joined.plot()

# Show the plot
plt.show()
# %%
unhealthy_joined.plot()

# Show the plot
plt.show()
# %%
##############################################################
# Summary part#
##############################################################
# clean a little of the table
healthy_cleaned = healthy_joined[['osm_id2', 'wd_mn', 'wd_af', 'wd_ev', 'wd_nh', 'geometry']]
unhealthy_cleaned = unhealthy_joined[['osm_id2', 'wd_mn', 'wd_af', 'wd_ev', 'wd_nh', 'geometry']]

# for same osm_id2, we need to sum the wd_mn, wd_af, wd_ev, wd_nh
healthy_summary = healthy_cleaned.groupby('osm_id2').sum()
unhealthy_summary = unhealthy_cleaned.groupby('osm_id2').sum()
# %%
# rename the columns: add prefix 'healthy_' to the columns of healthy_summary
healthy_summary.columns = ['h_' + col for col in healthy_summary.columns]
unhealthy_summary.columns = ['unh_' + col for col in unhealthy_summary.columns]
# %%
# merge the two tables
summary = healthy_summary.join(unhealthy_summary, how='outer')
# %%
# fill the NaN with 0
summary = summary.fillna(0)

# %%
summary[(summary['h_wd_mn'] > 0) & (summary['unh_wd_mn'] > 0)]
# %%
# calculate the diff of the two columns
summary['diff_mn'] = summary['h_wd_mn'] - summary['unh_wd_mn']
summary['diff_af'] = summary['h_wd_af'] - summary['unh_wd_af']
summary['diff_ev'] = summary['h_wd_ev'] - summary['unh_wd_ev']
summary['diff_nh'] = summary['h_wd_nh'] - summary['unh_wd_nh']

#%%

HDB_BFP_inner = HDB_BFP_nodup.merge(summary, left_on='osm_id', right_on='osm_id2', how='inner')

# %%
# plot with different colour based on the column diff_mn
HDB_BFP_inner.plot(column='diff_mn', legend=True)

# Show the plot
plt.show()

# %%
# add four columns to the table: mn_ratio, af_ratio, ev_ratio, nh_ratio
HDB_BFP_inner['mn_ratio'] = "no access to both"
HDB_BFP_inner['af_ratio'] = "no access to both"
HDB_BFP_inner['ev_ratio'] = "no access to both"
HDB_BFP_inner['nh_ratio'] = "no access to both"

# if the h_wd_mn =/ 0 and unh_wd_mn =/ 0, then calculate the ratio
for index, row in HDB_BFP_inner.iterrows():
    if row['h_wd_mn'] != 0 and row['unh_wd_mn'] == 0:
        HDB_BFP_inner.at[index, 'mn_ratio'] = "neutral no unhealthy"
    elif row['h_wd_mn'] == 0 and row['unh_wd_mn'] != 0:
        HDB_BFP_inner.at[index, 'mn_ratio'] = "unhealthy no neutral"
    elif row['h_wd_mn'] != 0 and row['unh_wd_mn'] != 0:
        if row['diff_mn'] > 0:
            HDB_BFP_inner.at[index, 'mn_ratio'] = "Non fast food > fast food"
        elif row['diff_mn'] < 0:
            HDB_BFP_inner.at[index, 'mn_ratio'] = "Fast food > Non fast food"
        elif row['diff_mn'] == 0:
            HDB_BFP_inner.at[index, 'mn_ratio'] = "Fast food = non fast food"
    
    if row['h_wd_af'] != 0 and row['unh_wd_af'] == 0:
        HDB_BFP_inner.at[index, 'af_ratio'] = "neutral no unhealthy"
    elif row['h_wd_af'] == 0 and row['unh_wd_af'] != 0:
        HDB_BFP_inner.at[index, 'af_ratio'] = "unhealthy no neutral"
    elif row['h_wd_af'] != 0 and row['unh_wd_af'] != 0:
        if row['diff_af'] > 0:
            HDB_BFP_inner.at[index, 'af_ratio'] = "Non fast food > fast food"
        elif row['diff_af'] < 0:
            HDB_BFP_inner.at[index, 'af_ratio'] = "Fast food > Non fast food"
        elif row['diff_af'] == 0:
            HDB_BFP_inner.at[index, 'af_ratio'] = "Fast food = non fast food"
    
    if row['h_wd_ev'] != 0 and row['unh_wd_ev'] == 0:
        HDB_BFP_inner.at[index, 'ev_ratio'] = "neutral no unhealthy"
    elif row['h_wd_ev'] == 0 and row['unh_wd_ev'] != 0:
        HDB_BFP_inner.at[index, 'ev_ratio'] = "unhealthy no neutral"
    elif row['h_wd_ev'] != 0 and row['unh_wd_ev'] != 0:
        if row['diff_ev'] > 0:
            HDB_BFP_inner.at[index, 'ev_ratio'] = "Non fast food > fast food"
        elif row['diff_ev'] < 0:
            HDB_BFP_inner.at[index, 'ev_ratio'] = "Fast food > Non fast food"
        elif row['diff_ev'] == 0:
            HDB_BFP_inner.at[index, 'ev_ratio'] = "Fast food = non fast food"

    if row['h_wd_nh'] != 0 and row['unh_wd_nh'] == 0:
        HDB_BFP_inner.at[index, 'nh_ratio'] = "neutral no unhealthy"
    elif row['h_wd_nh'] == 0 and row['unh_wd_nh'] != 0:
        HDB_BFP_inner.at[index, 'nh_ratio'] = "unhealthy no neutral"
    elif row['h_wd_nh'] != 0 and row['unh_wd_nh'] != 0:
        if row['diff_nh'] > 0:
            HDB_BFP_inner.at[index, 'nh_ratio'] = "Non fast food > fast food"
        elif row['diff_nh'] < 0:
            HDB_BFP_inner.at[index, 'nh_ratio'] = "Fast food > Non fast food"
        elif row['diff_nh'] == 0:
            HDB_BFP_inner.at[index, 'nh_ratio'] = "Fast food = non fast food"

# %%
# Save the file to a new shapefile
HDB_BFP_inner.to_file('data/HDB_BFP_inner2.shp')
# %%
