# Python Setup for Urban Data Analytics

**Complete beginner's guide · Windows 10 / 11 · Miniforge + VS Code**

> **New to this? Read this first.** This guide assumes you have never installed Python before. You do not need to understand the commands, only to copy them carefully. Two quick ideas: the **Miniforge Prompt** is a window where you type instructions instead of clicking, and you only use it for the one-time install below; after that, everything happens inside **VS Code**, a single program where you write code, run notebooks, and get help from an AI assistant. Go one step at a time, and do not worry when lots of text scrolls past.

You will set up three things, in order:

- **Miniforge**, a small program that gives you `conda`.
- An environment named `GISclass` holding the libraries the course uses (geopandas, rasterio, osmnx and a few others).
- **VS Code**, where you will write and run code, work in notebooks, and use an AI coding assistant, all in one window.

> **You only do this once.** The whole setup takes about 30 to 40 minutes, mostly waiting for downloads. After today you will not repeat it; each week you just open your project folder in VS Code and start.

---

## 1. Download the Miniforge installer

Download the Windows installer, named `Miniforge3-Windows-x86_64.exe`. Nearly every Windows laptop uses this file. It saves to your **Downloads** folder.

- Download page: <https://github.com/conda-forge/miniforge/releases/latest>

To find Downloads, open **File Explorer** (the yellow folder icon on the taskbar) and click **Downloads** on the left.

## 2. Run the installer

In your Downloads folder, **double-click** `Miniforge3-Windows-x86_64.exe`. A setup window opens. Click through it making these choices:

1. On the welcome screen, click **Next**.
2. On the licence screen, click **I Agree**.
3. For "Install for", choose **Just Me**, then **Next**.
4. Keep the **default install location** and click **Next**.
5. On **Advanced Options**, leave **Add Miniforge3 to my PATH** _unchecked_. Leave the other boxes at their defaults, then click **Install**.
6. When it finishes, click **Next**, then **Finish**.

> **About PATH: leave it unchecked on purpose.** The installer shows a red warning next to that box, which is expected. You do not need PATH, because you will use the **Miniforge Prompt** and VS Code, both of which already know where conda is. Leaving PATH unchecked avoids clashes with any Python you install later.

## 3. Open the Miniforge Prompt and check conda

Click the **Start** button (or press the Windows key), type **Miniforge**, and click **Miniforge Prompt** when it appears. A black window opens with `(base)` at the start of the line. Confirm conda is installed by typing this and pressing **Enter**:

```bat
conda --version
```

> **Use the Miniforge Prompt, not the ordinary Command Prompt.** Windows also has a plain **Command Prompt** (Start, then type `cmd`). Do not use that one; it will say `'conda' is not recognized`. Always use the **Miniforge Prompt** for the commands in this guide. To paste into it, **right-click** inside the window (or press **Ctrl+V**), then press **Enter**.

## 4. Create the GISclass environment

Save the `environment.yml` file your instructor provided into an easy-to-find folder, for example your **Documents** folder. In the Miniforge Prompt, move into that folder and build the environment:

```bat
cd %USERPROFILE%\Documents
conda env create -f environment.yml
```

This downloads and installs everything and takes several minutes. If it asks you to confirm with `Proceed ([y]/n)?`, type `y` and press Enter. If you were not given the file, type this instead as a single line:

```bat
conda create -n GISclass -c conda-forge python=3.12 ipykernel pandas geopandas matplotlib contextily mapclassify requests folium rasterio osmnx
```

> **That is the last of the Miniforge Prompt for now.** Everything from here happens inside VS Code. If `environment.yml` is in a OneDrive folder with spaces or unusual characters and the command cannot find it, move it to a plain path such as `C:\Users\YourName\Documents` and try again.

## 5. Install VS Code

Download VS Code and run the installer. When asked, choose the **User Installer** (it needs no administrator rights). Accept the default options; ticking **Add to PATH** and **Open with Code** is fine.

- Download page: <https://code.visualstudio.com/download>

## 6. Install the Python and Jupyter extensions

Open VS Code. On the left, click the **Extensions** icon (four squares), or press **Ctrl+Shift+X**. Search for and install these two, both published by Microsoft:

- **Python** (`ms-python.python`) — <https://marketplace.visualstudio.com/items?itemName=ms-python.python>
- **Jupyter** (`ms-toolsai.jupyter`) — <https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter>

Together these let you run notebooks directly inside VS Code.

## 7. Install an AI coding assistant

Later weeks use an AI assistant to help you read, write and debug code. This course uses **Claude Code**. In the **Extensions** panel, search for **Claude Code** (published by **Anthropic**) and click **Install**. Click the Claude icon that appears in the sidebar and sign in when prompted.

- Setup guide: <https://code.claude.com/docs/en/vs-code>

> **You need a paid account for this one.** Claude Code works with any paid Claude plan (Pro, Max, Team or Enterprise) or a Claude Console account, and needs no API key. OpenAI's **Codex** extension (search `Codex` by OpenAI) is an alternative but also needs a paid ChatGPT plan. If you do not have either, **GitHub Copilot** has a free tier and is free for verified students through the GitHub Student Developer Pack. **Install whichever your instructor tells you to use.**

- Free for students: <https://education.github.com/pack>

## 8. Make a project folder and open it

Keeping each piece of work in its own folder makes projects easy to manage. Create a folder for this week (for example `Documents\GISclass\Week02`), and put your notebook and any data files inside it. In VS Code, choose **File > Open Folder** and select that folder. VS Code now treats it as your workspace and remembers its settings.

## 9. Select the GISclass environment

Open the **Command Palette** with **Ctrl+Shift+P**, type **Python: Select Interpreter**, and choose the one labelled **GISclass** (it will mention `conda`). VS Code finds it automatically even though conda is not on PATH, and remembers this choice for the folder.

> **Not seeing GISclass?** Close and reopen VS Code so it can detect the new environment, then try **Python: Select Interpreter** again.

## 10. Create a notebook and check everything works

Choose **File > New File**, then **Jupyter Notebook** (or open the Command Palette and run **Create: New Jupyter Notebook**). At the top right, click **Select Kernel** and choose **GISclass**. Click into the first cell, paste the code below, and press **Shift+Enter** to run it:

```python
import sys, geopandas, pandas, rasterio
print("Python   ", sys.version.split()[0])
print("geopandas", geopandas.__version__)
print("rasterio ", rasterio.__version__)
```

If you see three version numbers and no red error, your setup is complete.

---

## You are finished when...

- VS Code shows **GISclass** as the selected interpreter and notebook kernel.
- The test cell prints three version numbers with no red error message.
- Your AI assistant panel is installed and signed in.

> **Your routine from now on.** Each week: open VS Code, use **File > Open Folder** to open that week's folder, and start your notebook. The kernel and interpreter are already set. You will not need the Miniforge Prompt again unless you add new packages.

## If something goes wrong

- **"'conda' is not recognized"** in a black window: you opened the ordinary Command Prompt. Open the **Miniforge Prompt** from the Start menu instead.
- **GISclass does not appear in VS Code:** close and reopen VS Code, then run **Python: Select Interpreter** again.
- **The environment install is very slow:** in the Miniforge Prompt, replace `conda` with `mamba` (installed for you), e.g. `mamba env create -f environment.yml`.
- **The notebook cannot find a library:** check the kernel at the top right says **GISclass**, not a different Python.
- **Errors on campus wi-fi:** try again on a normal network, or ask your instructor; a proxy setting may be needed.

## Appendix: the environment file

If your instructor did not give you an `environment.yml` file, open Notepad, paste in exactly the text below, and save it as `environment.yml` (make sure Notepad does not add a `.txt` ending):

```yaml
name: GISclass
channels:
  - conda-forge
dependencies:
  - python=3.12
  - ipykernel
  - pandas
  - geopandas
  - matplotlib
  - contextily
  - mapclassify
  - requests
  - folium
  - rasterio
  - osmnx
```
