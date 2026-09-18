# Graph Report - GIS-training  (2026-09-18)

## Corpus Check
- 17 files · ~3,884,421 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 238 nodes · 347 edges · 15 communities
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fb6f7fcb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- query_app.js
- remark-latest.min.js
- Bootcamp: Introduce to Geospatial Python
- highlight
- custom.js
- Python Setup for Urban Data Analytics
- challenge_answer.md
- Python Setup for Urban Data Analytics
- Example: Assessing Social Equity in Hawker Centre in Singapore
- Git Setup for Urban Data Analytics
- Discussion and Q&A
- todo.md

## God Nodes (most connected - your core abstractions)
1. `highlight()` - 17 edges
2. `Python Setup for Urban Data Analytics` - 16 edges
3. `highlightBlock()` - 15 edges
4. `Python Setup for Urban Data Analytics` - 14 edges
5. `init()` - 11 edges
6. `initDeckEnhancements()` - 11 edges
7. `forEach()` - 11 edges
8. `escape()` - 10 edges
9. `querySingle()` - 9 edges
10. `highlight()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `initHighlighting()` --indirect_call--> `highlightBlock()`  [INFERRED]
  src/remark-latest.min.js → src/remark-latest.min.js  _Bridges community 3 → community 1_

## Import Cycles
- None detected.

## Communities (15 total, 0 thin omitted)

### Community 0 - "query_app.js"
Cohesion: 0.10
Nodes (41): activeEtypes, actorAEl, actorBEl, actorContext(), actorPolicySnippetEdgeIds(), adjacency(), cityLabelEl, clearSnippets() (+33 more)

### Community 1 - "remark-latest.min.js"
Cohesion: 0.08
Nodes (28): apply(), extend(), forEach(), forwardEvents(), getDimensions(), getRatio(), getTextInBrackets(), gotoFirstSlide() (+20 more)

### Community 2 - "Bootcamp: Introduce to Geospatial Python"
Cohesion: 0.07
Nodes (25): [1-01: Data Types and Structures](./jupyters/1-01_data.ipynb), [1-02: DataFrame and GeoDataFrame](./jupyters/1-02_dataframe_geo.ipynb), [1-03: Questionnaires and Survey Data Cleaning](./jupyters/1-03_questionnaires.ipynb), [2-01: Vector Data Analysis](./jupyters/2-01_vector.ipynb), [2-02: Raster Analysis](./jupyters/2-02_raster.ipynb), [2-03: Network Analysis](./jupyters/2-03_network.ipynb), [3-01: Geocoding](./jupyters/3-01_datawrangling_geo.ipynb), [3-02: Data Visualization](./jupyters/3-02_datavis.ipynb) (+17 more)

### Community 3 - "highlight"
Cohesion: 0.19
Nodes (20): escape(), fixMarkup(), getLanguage(), highlight(), buildSpan(), endOfMode(), keywordMatch(), langRe() (+12 more)

### Community 4 - "custom.js"
Cohesion: 0.19
Nodes (16): addReferenceItem(), buildSlideData(), clamp(), collectSlideReferences(), escapeHtml(), getSlides(), hasModifierKey(), initDeckEnhancements() (+8 more)

### Community 5 - "Python Setup for Urban Data Analytics"
Cohesion: 0.12
Nodes (16): 10. Make a project folder and open it, 11. Select the GISclass environment, 12. Create a notebook and check everything works, 1. Open the Terminal, 2. Find out which chip your Mac has, 3. Download the Miniforge installer, 4. Run the installer, 5. Restart the Terminal and check it worked (+8 more)

### Community 6 - "challenge_answer.md"
Cohesion: 0.13
Nodes (14): 1-01_data, 1-02_dataframe_geo, 1-03_questionnaires, 2-01_vector, 2-03_network, 3-02_datavis, 3-03-01_staticmapping, 3-03-02_interactivemapping (+6 more)

### Community 7 - "Python Setup for Urban Data Analytics"
Cohesion: 0.13
Nodes (14): 10. Create a notebook and check everything works, 1. Download the Miniforge installer, 2. Run the installer, 3. Open the Miniforge Prompt and check conda, 4. Create the GISclass environment, 5. Install VS Code, 6. Install the Python and Jupyter extensions, 7. Install an AI coding assistant (+6 more)

### Community 8 - "Example: Assessing Social Equity in Hawker Centre in Singapore"
Cohesion: 0.18
Nodes (10): **1. Define the Research Question**, **2. Data Collection**, **3. Data Preprocessing**, **4. Apply the 2SFCA Method**, **5. Visualize Results**, Example: Assessing Social Equity in Hawker Centre in Singapore, **Step 2: Compute Travel Distances**, **Step 3: Apply the 2SFCA Method** (+2 more)

### Community 9 - "Git Setup for Urban Data Analytics"
Cohesion: 0.20
Nodes (9): 1. Install Git, 2. Tell Git who you are, 3. Clone your resume repository with VS Code, 4. Edit, commit and push, Git Setup for Urban Data Analytics, Learn more, macOS, Troubleshooting (+1 more)

### Community 10 - "Discussion and Q&A"
Cohesion: 0.25
Nodes (7): Discussion and Q&A, **Effective Use of AI for Better Coding**, **Finding Data and Code Online**, **Forming a Workflow for Your Research Question**, **Graphical User Interface GIS (e.g., ArcGIS, QGIS) vs. Programming Languages (e.g., Python, R)**, **Organising your code with Git and GitHub**, The Strengths and Limitations

### Community 11 - "todo.md"
Cohesion: 0.50
Nodes (3): Bootcamp, New course content, To do list

## Knowledge Gaps
- **96 isolated node(s):** `NODE_COLORS`, `EDGE_COLORS`, `ETYPES`, `ETYPE_LABELS`, `rawNodes` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 123 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `highlight()` connect `highlight` to `remark-latest.min.js`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `highlightBlock()` connect `highlight` to `remark-latest.min.js`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `highlightBlock()` (e.g. with `close()` and `open()`) actually correct?**
  _`highlightBlock()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `init()` (e.g. with `edgeStyle()` and `nodeStyle()`) actually correct?**
  _`init()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `NODE_COLORS`, `EDGE_COLORS`, `ETYPES` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `query_app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09639953542392567 - nodes in this community are weakly interconnected._
- **Should `remark-latest.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07549361207897794 - nodes in this community are weakly interconnected._