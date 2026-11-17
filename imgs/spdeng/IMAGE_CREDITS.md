# Journal figures and original diagrams

Yap, Winston, and Filip Biljecki (2023). A Global Feature-Rich Network Dataset of Cities and Dashboard for Comprehensive Urban Analyses. Scientific Data 10, 667.
https://doi.org/10.1038/s41597-023-02578-1

Figures 1–6 are reproduced intact as urbanity_fig1.png through urbanity_fig6.png, with display scaling only. Retrieved 15 November 2026. Article licence: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/ . The article states that figures and third-party material are included unless a credit line indicates otherwise. Underlying source and basemap credits from each caption are retained below and on the slides. No endorsement is implied.

## Original figure captions and image sources

Fig. 1 Full size image Overview of open workflow. Our workflow integrates urban data from heterogeneous open layers and provides a consistent framework to construct feature rich urban networks of global cities. Sources of the data samples: (c) OpenStreetMap contributors, Mapillary, Meta. Basemap: OpenStreetMap and Mapbox .

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig1_HTML.png

Fig. 2 Full size image OpenStreetMap preprocessing workflow. Flowchart of OpenStreetMap preprocessing workflow for road networks, building footprints, and urban points of interests. Sources of the data samples: (c) OpenStreetMap contributors. ( a ) Road networks are topologically simplified to primal planar representation. ( b ) Building footprints are converted to valid polygons. ( c ) Points of interest are retrieved, procedurally checked, and re-labelled.

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig2_HTML.png

Fig. 3 Full size image Urbanity dashboard exploratory panels. Urbanity dashboard offers an interactive, user-friendly interface for exploring urban network data without the need to code. Complementary panels provide insights into various urban scales and features, incorporating popular methods for urban network data analysis. Sources of the data samples: (c) OpenStreetMap contributors, Mapillary, and Meta. Basemap: OpenStreetMap and Mapbox . ( a ) Global comparative analyses of cites across selected indicators. ( b ) Bivariate scatterplot of network indicators across city subzones. ( c ) Univariate spatial distribution of aggregate values across city subzones. ( d ) Urban network of Paris. ( e ) Gridded density plot of urban population distribution across Paris.

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig3_HTML.png

Fig. 4 Full size image Comparing WorldPop and Meta population datasets using a spatial 100-metre gridded analysis across 25 cities. Highlighting variations in aggregated population counts across administrative boundaries in 25 cities between the WorldPop and Meta Datasets. In the heatmap, regions indicating a higher population count in the Meta dataset compared to WorldPop are visualized in red, while areas where WorldPop predicts a greater population count than the Meta dataset are represented in blue. Data Source: Meta and WorldPop . Basemap: (c) CARTO.

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig4_HTML.png

Fig. 5 Full size image Distribution of visual complexity within streetview images in Zurich. Visual complexity corresponds to information cross entropy of semantic classes in each image. We show the visual complexity distribution for the entire image set of Zurich, Switzerland (N = 18,565). Images with low visual complexity reveal little semantic information on streetscapes and are removed. Source of imagery: Mapillary.

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig5_HTML.png

Fig. 6 Full size image Multiscalar descriptive analysis of network indicators. Network indicators can be used for multi-scalar descriptive analyses of cities. ( a ) Comparative analysis of the distributions of building footprint proportions across network nodes with a 100-meter catchment area in ten cities. ( b ) Visualizing the spatial distribution of urban context and semantics layers at various levels of aggregation in Tokyo. Sources of the data samples: ( c ) OpenStreetMap contributors, Mapillary, and Meta.

Original image: https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41597-023-02578-1/MediaObjects/41597_2023_2578_Fig6_HTML.png

## Original teaching diagrams

support.svg, joins.svg, temporal.svg, density.svg, scales.svg and validation.svg were created for this lecture. They are schematic illustrations with fictional examples, not figures from the paper. Their explanations and workshop tasks are teaching material and should not be attributed as findings of the paper.

## Interpolation illustrations

haze_interpolation_comparison.png, haze_interpolation_tin.png and haze_idw_weights.png are original computed teaching figures (NumPy, SciPy, GeoPandas, Matplotlib) based on real NEA 1-hr PM2.5 regional readings for 14 October 2026, 16:00 (central 219, east 202, north 139, south 190, west 251 µg/m³). Points are data.gov.sg region label locations, not monitoring-station sites. The land outline is the dissolved URA Master Plan 2019 planning-area boundary. Surfaces are teaching demonstrations, not official air-quality estimates.

- Contains information from PM2.5 (API) accessed on 15 November 2026 from data.gov.sg which is made available under the terms of the Singapore Open Data Licence version 1.0 https://data.gov.sg/open-data-licence (dataset: https://data.gov.sg/datasets/d_e1058d6974c877257e32048ab128ad83/view).
- Contains information from Master Plan 2019 Planning Area Boundary (No Sea) accessed on 15 November 2026 from data.gov.sg which is made available under the terms of the Singapore Open Data Licence version 1.0 https://data.gov.sg/open-data-licence (dataset: https://data.gov.sg/datasets/d_4765db0e87b9c86336792efe8a1f7a66/view).
- Haze context on the slides is quoted from NEA Haze Situation Updates, 14 October 2026: https://www.nea.gov.sg/media/news/advisories/index/haze-situation-update-14-october-2026

## Feature engineering examples

fe_entropy_map.png, fe_hawker_access.png and fe_urban_form.png are original computed teaching figures (GeoPandas, OSMnx, Matplotlib). They are demonstrations of feature construction, not official statistics.

- fe_entropy_map.png: POIs from the course sample data/singapore_poi_sample.csv, from the Land & Transport Singapore (LTSG) dataset, https://github.com/BlueSkyLT/siteselect_sg . Planning areas: Master Plan 2019 Planning Area Boundary (No Sea), as above.
- fe_hawker_access.png: Contains information from Hawker Centres (GEOJSON) accessed on 15 November 2026 from data.gov.sg which is made available under the terms of the Singapore Open Data Licence version 1.0 https://data.gov.sg/open-data-licence (dataset: https://data.gov.sg/datasets/d_4a086da0a5553be1d89383cd90d07ecd/view). Contains information from Master Plan 2019 Subzone Boundary (No Sea) (GEOJSON) accessed on 15 November 2026 from data.gov.sg under the same licence (dataset: https://data.gov.sg/datasets/d_8594ae9ff96d0c708bc2af633048edfb/view). Residents: Department of Statistics Singapore, Singapore Residents by Planning Area / Subzone, Age Group, Sex and Type of Dwelling, June 2025.
- fe_urban_form.png: building footprints and walk network © OpenStreetMap contributors, available under the Open Database Licence, https://www.openstreetmap.org/copyright ; downloaded 16 November 2026 with OSMnx. Window centres: MRT station points from the course file Day2-Spatial/Practice/003_ReferenceMap/data/mrt_singapore_simplified.geojson.

raster_resampling.png is an original computed teaching figure with synthetic values; it contrasts nearest and linear array interpolation. The earlier synthetic figures interpolation_comparison.png, interpolation_tin.png and idw_weights.png are no longer used by the slides.

## Reviews case study: East Coast Park

Yang, Chenghao, and Ye Zhang (2024). Public emotions and visual perception of the East Coast Park in Singapore: A deep learning method using social media data. Urban Forestry & Urban Greening 94, 128285.
https://doi.org/10.1016/j.ufug.2024.128285

ecp_fig3.jpg, ecp_fig4.jpg and ecp_fig8.jpg are Figures 3, 4 and 8, extracted byte-for-byte from the article PDF's embedded images on 17 November 2026; no alteration apart from display scaling. Article licence: Creative Commons Attribution-NonCommercial 4.0 International, https://creativecommons.org/licenses/by-nc/4.0/ . Reuse is limited to non-commercial purposes. Photos and review text in Fig. 8 are Google Maps user content as published in the article. No endorsement is implied.

- Fig. 3: Further explanation of emotion detection and image classification (a) 27 fine-grained emotions to basic emotions (b) top-5 multiple-label scenes.
- Fig. 4: Emotion detection results from January 2019 to June 2022. Note: In Fig. 4, the change in fine-grained negative emotions and surprise between January 2020 and March 2021 is amplified and popped out.
- Fig. 8: Examples of reviews detected with neutral and fine-grained negative emotions and the corresponding image classification result (top-1 label) of accompanied images. (Note: No reviewed detected with fear, surprise, and angry have accompanied images).

## MAUP and H3 examples

maup_units.png, h3_hierarchy.png and maup_robustness.png are original computed teaching figures (GeoPandas, h3 4.4.2, Matplotlib), made on 17 November 2026. They are demonstrations of the modifiable areal unit problem, not official statistics.

- POIs: the course sample data/singapore_poi_sample.csv (8,672 POIs; `food` and `finance` type flags), from the Land & Transport Singapore (LTSG) dataset, https://github.com/BlueSkyLT/siteselect_sg .
- Planning areas and subzones: URA Master Plan 2019 boundaries, local copies storymap/data/raw/planning_areas_mp2019.geojson and subzones_mp2019.geojson (data.gov.sg, Singapore Open Data Licence version 1.0, https://data.gov.sg/open-data-licence).
- H3 cells: H3 v4 discrete global grid (Apache License 2.0), https://h3geo.org . Cells are kept when their centre lies on land.
- Method: r is the Pearson correlation between food and finance POI density (POIs per km²) across all units, including empty ones. Square grids match the global mean area of H3 resolutions 7–9 and are shifted to 16 positions (4 × 4 quarter-cell offsets).
