# Spatial Pattern

Spatial analysis investigates spatial pattern and process ([O'Sullivan & Unwin, 2003](https://www.wiley.com/en-us/Geographic+Information+Analysis%2C+2nd+Edition-p-9780470288573)).

- What is the spatial pattern?

  - Random?

    Spatial data **may** have pattern.

  - Trend?

    Spatial dependency

  - Clustered or dispersed?

    Spatial autocorrelation

| ![spatialpattern_002](../imgs/spatialpattern_002.png)        |
| ------------------------------------------------------------ |
| Visual examples of common types of spatial distribution patterns for point data |
| Source: [Developing a Geospatial Protocol for Coral Epizootiology](https://www.researchgate.net/publication/296695387_Developing_a_Geospatial_Protocol_for_Coral_Epizootiology) |

## Is the pattern random?

### Common inferential statistics

*p-values*: probabilities

*z-scores*: standard deviations

*z-scores* can be mapped to specific *p-values* (Source: [What is a z-score? What is a p-value?—ArcGIS Pro | Documentation](https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-statistics/what-is-a-z-score-what-is-a-p-value.htm))

| *p-values* | *z-scores* |
| ---------- | ---------- |
| 0.01       | +/- 2.58   |
| 0.05       | +/- 1.96   |
| 0.10       | +/- 1.65   |

You can always see such statistics in the report of spatial analysis.

**Interpretation**: a z-score of 1.96, with a p-value of 0.05

Given the z-score of 2.58, there is less than 5% likelihood that this  cluster of high values could be the result of random chance

### Research question of spatial pattern

Questions to ask about spatial pattern:

- What process created this pattern?
- Is the pattern always evident?

In an urban research, examples of research question could be:

- Which site is most accessible to XX?
- Where is the centre of XX and the weighted centre (for example, weighted by population), and how they are changing over time?
- Which group of XX has the broadest spatial distribution?
- Is there a directional trend in the spatial distribution of XX? Is it changing over time?

## Addition: the Modifiable Areal Unit Problem (MAUP)

- **Scale effect**: Different results are obtained when the same set of data are grouped into areal units of different size.
- **Selection effect**: Different results are obtained when the shape or location of same-sized areal units is changed.

| ![](../imgs/spatialpattern_003.jpeg)                         |
| ------------------------------------------------------------ |
| The modifiable areal unit problem                            |
| Source: [Analysis of existing urban areas: methodology and data (Appendix B)](https://neptis.org/publications/chapters/analysis-existing-urban-areas-methodology-and-data-appendix-b) |

Select a system of areal units that minimise these effects based on the nature of the research.

