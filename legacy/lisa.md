# Local Indicators of Spatial Association (LISA)

The extent of significant spatial clustering of similar values around the observation.

## Anselin Local Moran's I

$$
I_i=(\frac{x_{i}-\bar{x}}{m_2})\cdot\sum_{j=1}^{n}w_{ij}(x_{j}-\bar{x})
$$

$$
m_2=\sum_{i=1}^{n}\frac{(x_{i}-\bar{x})^{2}}{n}
$$

n is the number of cases

xi and xj denote the attribute values at location i, j

x-bar is the mean value of the variable across all spatial units

w_ij denote weights from the spatial weight matrix

**Global Moran’s I is the mean of local Moran’s I**, which we will talk this more detailly in the [Global verses Local Statistics](./globallocal.md)

**Discernible spatial pattern**

- Positive I value

  - Feature is surrounded by features **with similar values**, either high or low.
  - Feature is **part of a cluster**.
  - Statistically significant clusters can consist of high values (HH) or low values (LL)

- Negative I value

  - Feature is surrounded by features **with dissimilar values**.
  - Feature is **an outlier**.
  - Statistically significant outliers can be a feature with a high value surrounded by features with low values (HL) or a feature with a low value surrounded by features with high values (LH).
  
- Not significant area

  The local Moran's I index generates **a z-score for each feature**, which is calculated by dividing the observed local Moran's I value by **the standard deviation of the expected local Moran's I values** under the null hypothesis of spatial randomness. 

  A feature with a high z-score (i.e., greater than 1.96 or less than -1.96) indicates that the observed clustering is unlikely to have occurred by chance alone, and therefore, the feature is considered statistically significant.

| ![lisa_001](../imgs/lisa_001.webp)                           |
| ------------------------------------------------------------ |
| Spatial autocorrelation of the local indicators of spatial association (LISA) analysis. |
| Source: [An Application of the Spatial Autocorrelation Method on the Change of Real Estate Prices in Taitung City](https://www.mdpi.com/2220-9964/8/6/249) |

## Calculating Local Moran's I

Use [GeoDa]([Download | GeoDa on Github (geodacenter.github.io)](https://geodacenter.github.io/download.html)), because of no internal analysis tool for local Moran's I in QGIS.

It is also a open source software.

> the spatial *lag* is a weighted sum of the *values* observed at *neighboring locations*, since the non-*neighbors* are not included

