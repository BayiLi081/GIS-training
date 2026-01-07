## To do list

- [ ] The MAUP problem is underexplored, can move to early week with vector data analysis
- [ ] Add more information on the urban new data, and possibly, more cases studies
- [ ] Seperate the assignment requirements from the appliedgis.html
- [ ] Add a nav bar at the bootom of each page to easier navigate to each section of slide.

From the feedback collected from first round, the following tasks to improve the quality:

1. (Done) OneMap provides good geocoding api for SG addresses. For 3-01 geocoding example, adding OneMap API example could be useful.

2. Raster analysis can be removed as remote sensing analysis is not important skills for urban science students. Make it optional.

3. 1-03 and 3-02 can be merged into one, or the order be more close. Find a better practice example of questionnaire/survey data.

4. 2-01 vector: introducing shapely objects first, then teach how to translate them into GeoDataFrame. Otherwise, can easily get confused.

4. 2-03 Network analysis can use a simple 3x3 Manhattan road network as a example of network distance. Use a complex road network in real world can be confusing.

4. 3-03-02 can teach mapping A data, let the students practice with B data.

5. 3-03-01 static mapping is no longer a big thing to do with Python. Can change to use Python console in QGIS to batch generate journal-quality maps.

6. AI is a big thing now. It is hard to not mention the role of AI-assist coding even AI-generated coding workflow nowadays.

7. Add `Open in Colab` button to each jupyter notebook file, so the students can open directly from Github to Colab

---

Including everything within 9 hours bootcamp is challenging. To see if the rhythm works.

A good reference for dealing with messy real-world data and creating publication-quality graphics in Python.

**Session 1: Introduction to the Python data stack and data import**
Introduction to the core Python tools for data analysis, with a focus on `pandas` and the idea of tidy, table-based data. Participants learn how to read common data formats (CSV, Excel, JSON, simple text files), inspect datasets for errors or inconsistencies, and start basic cleaning workflows using practical examples in Jupyter notebooks.

**Session 2: Hands-on use of pandas to filter, transform, and reshape data**
Hands-on practice with `pandas` for day-to-day data wrangling. Topics include selecting rows and columns, filtering with conditions, creating and transforming variables, handling missing values, and recoding categories. Participants also learn how to reshape data between wide and long formats with `melt`, `pivot`, and `pivot_table`, and prepare clean analysis-ready tables.

**Session 3: Building plots with seaborn and matplotlib**
Introduction to the plotting workflow in Python using `seaborn` on top of `matplotlib`. Participants learn how to build core plot types (scatterplots, line charts, bar charts, boxplots, histograms) directly from tidy `pandas` DataFrames. The session covers the logic of mapping variables to visual elements, using figure and axis objects, and layering simple plot elements.

**Session 4: Customising plots and exporting publication-quality graphics**
In-depth work on improving visualisations using `seaborn` and `matplotlib` options. Topics include custom colour palettes, scales and axis limits, themes and style settings, labels, legends, and annotations. The session also covers basic principles for clear and accessible graphics and how to export figures at high resolution for reports, slides, and publications.

**Session 5: Joining datasets and preparing data for integrated analysis**
Techniques to combine information from multiple tables using `pandas.merge` and related functions. Participants learn how to carry out left, right, inner, and outer joins, stack tables with `concat`, and manage keys and indexes. The focus is on building integrated analysis datasets from raw, fragmented sources.

**Session 6: Creating multi-panel figures and complete workflows**
Arranging several plots into coherent figures using `matplotlib` layouts such as `subplots` and `gridspec`. Participants work through real-world case studies that start with messy data, move through cleaning and joining in `pandas`, and end with polished multi-panel visualisations. The workshop closes with a Q&A and troubleshooting session.
