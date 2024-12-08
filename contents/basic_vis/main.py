#%%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#%%
df = pd.read_csv('all_food_retails.csv')

# delete columns that are not needed
df.drop(['ss_sat_2h', 'ss_sat_4h', 'ss_sat_6h',
       'ss_sat_8h', 'ss_sat_10h', 'ss_sat_12h', 'ss_sat_14h', 'ss_sat_16h',
       'ss_sat_18h', 'ss_sat_20h', 'ss_sat_22h', 'ss_sat_24h', 'ss_sun_2h',
       'ss_sun_4h', 'ss_sun_6h', 'ss_sun_8h', 'ss_sun_10h', 'ss_sun_12h',
       'ss_sun_14h', 'ss_sun_16h', 'ss_sun_18h', 'ss_sun_20h', 'ss_sun_22h',
       'ss_sun_24h',], axis=1, inplace=True)

# find if there are nan values
df.isnull().sum()
#%%
df['wd_mn'] = df[['wd_mon_mn', 'wd_tue_mn', 'wd_wed_mn', 'wd_thu_mn', 'wd_fri_mn']].mean(axis=1)
df['wd_af'] = df[['wd_mon_af', 'wd_tue_af', 'wd_wed_af', 'wd_thu_af', 'wd_fri_af']].mean(axis=1)
df['wd_ev'] = df[['wd_mon_ev', 'wd_tue_ev', 'wd_wed_ev', 'wd_thu_ev', 'wd_fri_ev']].mean(axis=1)
df['wd_nh'] = df[['wd_mon_nh', 'wd_tue_nh', 'wd_wed_nh', 'wd_thu_nh', 'wd_fri_nh']].mean(axis=1)

df.head()

#%%
# seperate the data into fast food and non-fast food
fast_food = df[df['healthy'] == 0]
non_fast_food = df[df['healthy'] == 1]

# average the sum of all hours for each category
summary_stat = pd.DataFrame(columns=['fast_food', 'non_fast_food'], index=['avg_mn', 'avg_af', 'avg_ev', 'avg_nh', 'avg_mon_mn', 'avg_mon_af', 'avg_mon_ev', 'avg_mon_nh', 'avg_tue_mn', 'avg_tue_af', 'avg_tue_ev', 'avg_tue_nh', 'avg_wed_mn', 'avg_wed_af', 'avg_wed_ev', 'avg_wed_nh', 'avg_thu_mn', 'avg_thu_af', 'avg_thu_ev', 'avg_thu_nh', 'avg_fri_mn', 'avg_fri_af', 'avg_fri_ev', 'avg_fri_nh'])

#%%
summary_stat.loc['avg_mn', 'fast_food'] = fast_food['wd_mn'].mean()
summary_stat.loc['avg_af', 'fast_food'] = fast_food['wd_af'].mean()
summary_stat.loc['avg_ev', 'fast_food'] = fast_food['wd_ev'].mean()
summary_stat.loc['avg_nh', 'fast_food'] = fast_food['wd_nh'].mean()

summary_stat.loc['avg_mn', 'non_fast_food'] = non_fast_food['wd_mn'].mean()
summary_stat.loc['avg_af', 'non_fast_food'] = non_fast_food['wd_af'].mean()
summary_stat.loc['avg_ev', 'non_fast_food'] = non_fast_food['wd_ev'].mean()
summary_stat.loc['avg_nh', 'non_fast_food'] = non_fast_food['wd_nh'].mean()

summary_stat

#%%
for i in ['mon', 'tue', 'wed', 'thu', 'fri']:
    summary_stat.loc[f'avg_{i}_mn', 'fast_food'] = fast_food[f'wd_{i}_mn'].mean()
    summary_stat.loc[f'avg_{i}_af', 'fast_food'] = fast_food[f'wd_{i}_af'].mean()
    summary_stat.loc[f'avg_{i}_ev', 'fast_food'] = fast_food[f'wd_{i}_ev'].mean()
    summary_stat.loc[f'avg_{i}_nh', 'fast_food'] = fast_food[f'wd_{i}_nh'].mean()

    summary_stat.loc[f'avg_{i}_mn', 'non_fast_food'] = non_fast_food[f'wd_{i}_mn'].mean()
    summary_stat.loc[f'avg_{i}_af', 'non_fast_food'] = non_fast_food[f'wd_{i}_af'].mean()
    summary_stat.loc[f'avg_{i}_ev', 'non_fast_food'] = non_fast_food[f'wd_{i}_ev'].mean()
    summary_stat.loc[f'avg_{i}_nh', 'non_fast_food'] = non_fast_food[f'wd_{i}_nh'].mean()

summary_stat

#%%

summary_stat = summary_stat[:8]
sns.set_theme(style="whitegrid", palette="muted")

# Draw a categorical scatterplot to show each observation
ax = sns.swarmplot(data=summary_stat, x="openinghr", y="time", hue="type")
ax.set(ylabel="")

# reorder the labels in y-axis
#ax.set_yticklabels(['Morning', 'Afternoon', 'Evening', 'Night'])
# save the plot as svg
plt.savefig('openinghr_time.svg')

#%%
# Read the CSV file
data = pd.read_csv('agg_openninghr_hexagon2vis.csv')

data.head()
#%%
# Overlay density plot of columns: sum_neu_allhrs, sum_unheal_allhrs, sum_allhrs
data.plot(kind='density', subplots=True, layout=(3,3), sharex=False)

# Show the plot
plt.show()
# %%

# hide both values are zero
data_no0 = data[(data['sum_neu_allhrs'] != 0) & (data['sum_unheal_allhrs'] != 0)]

# remove nan values
data_no0 = data_no0.dropna()

data_onlyunheal = data[(data['sum_neu_allhrs'] == 0) & (data['sum_unheal_allhrs'] != 0)]
data_onlyneu = data[(data['sum_neu_allhrs'] != 0) & (data['sum_unheal_allhrs'] == 0)]

# create a The Four-Quadrant Chart on sum_neu_allhrs, sum_unheal_allhrs
unheal_median = data_no0['sum_unheal_allhrs'].median()
neu_median = data_no0['sum_neu_allhrs'].median()

# color the points based on their relation to the medians
data_no0['color'] = '#A3FF73'
data_no0.loc[(data_no0['sum_unheal_allhrs'] > unheal_median) & (data_no0['sum_neu_allhrs'] < neu_median), 'color'] = '#FF7F7F'
data_no0.loc[(data_no0['sum_unheal_allhrs'] < unheal_median) & (data_no0['sum_neu_allhrs'] > neu_median), 'color'] = '#C9D3FE'
data_no0.loc[(data_no0['sum_unheal_allhrs'] > unheal_median) & (data_no0['sum_neu_allhrs'] > neu_median), 'color'] = '#C9D3FE'

#%%
left = 0.1
bottom = 0.1
top = 0.9
right = 0.9

main_ax = plt.axes([left, bottom, right - left, top - bottom])
top_ax = plt.axes([left, top, right - left, 1 - top])
plt.axis('off')
right_ax = plt.axes([right, bottom, 1 - right, top - bottom])
plt.axis('off')

# plot the four quadrants
main_ax.scatter(data_no0['sum_neu_allhrs'], data_no0['sum_unheal_allhrs'], c=data_no0['color'], alpha=0.5, s=1)
main_ax.scatter(data_onlyunheal['sum_neu_allhrs'], data_onlyunheal['sum_unheal_allhrs'], c='#f4ad4e', alpha=0.5, s=1)
main_ax.scatter(data_onlyneu['sum_neu_allhrs'], data_onlyneu['sum_unheal_allhrs'], c='#22afff', alpha=0.5, s=1)

top_ax.boxplot(data_no0['sum_neu_allhrs'], positions=[0], notch=True, widths = 0.6, vert=False)
right_ax.boxplot(data_no0['sum_unheal_allhrs'], positions=[0], notch=True, widths = 0.6, vert=True)


# plot a horizontal line at y= median of sum_unheal_allhrs
main_ax.axhline(y=unheal_median, color='#35c9bd', linestyle='-')
# plot a text at y= median of sum_unheal_allhrs
main_ax.text(100, unheal_median, f'Median of Unhealed = {unheal_median}', color='black')

# plot a vertical line at x= median of sum_neu_allhrs
main_ax.axvline(x=neu_median, color='#35c9bd', linestyle='-')
# plot a text at x= median of sum_neu_allhrs
main_ax.text(neu_median, 50, f'Median of Neutral = {neu_median}', color='black', rotation=90)

# plt.xlabel('')
# plt.ylabel('')
# plt.title('')
plt.show()
# save the plot as svg
#plt.savefig('four_quadrants.svg')
# %%
data_onlyunheal['color'] = '#FF0000'
data_onlyneu['color'] = '#00A884'