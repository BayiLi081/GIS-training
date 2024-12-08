# Global verses Local Statistics

Compared to global statistics, local statistics more press on **where the specific patterns occur**

| Global Statistics                                          | Local Statistics                                             |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| Indentify and measure the pattern of the entire study area | Identify **spatial variation** across the study area, focusing on individual features and their relationships to nearby fatures |

**What can perfectly describe location A cannot explain location B at same level.**

**The neigbourhoods matter (local explanation than a universal explanation of some phenomenons)**

## Common global and local statistics

#### Global spatial autocorrelation and local spatial association

The sum of LISAs for all observations is propotional to a global indicator of spatial association.

#### Global regression (Ordinary least squares) and Local regression model (Geographically weighted Regression)

##### Global regression - Ordinary Least Squares (OLS)

OLS is a statistical method used to estimate the relationship between a dependent variable and one or more independent variables. 

It is a linear regression technique used to find the best-fitting line for a set of data points by minimizing the sum of the squared differences between the observed and predicted values of the dependent variable.

##### local regression - Geographically weighted regression (GWR)

$$
y_i=\beta_{i0}+\sum_{j=1}^{m}\beta_{ij}x_{ij}+\epsilon_i
$$

where:

- $y_i$ is the dependent variable for the $i^{th}$ observation.
- $\beta_i0$ is the spatially varying intercept at location $i$.
- $\beta_ij$ is the spatially varying coefficient for the $j^{th}$ independent variable at location $i$.
- $x_{ij}$ is the value of the $j^{th}$ independent variable for the $i^{th}$ observation.
- $\epsilon_i$ is the random error term for the $i^{th}$ observation.

GWR is a statistical technique that takes into account spatial variation in the relationship between the dependent and independent variables.

The GWR model assumes that the relationship between the variables varies spatially across the study area, and the model estimates a different set of coefficients for each location.

The GWR model uses a weighted least squares approach, where observations closer to the location being modeled have a higher weight than those further away.

#### Main differences

The main difference between OLS and GWR is that OLS assumes a global relationship between the variables, whereas GWR takes into account the spatial variation in the relationship. 

Therefore, GWR can provide a better modelling performance than OLS, particularly when the relationship between the variables varies across space. 

