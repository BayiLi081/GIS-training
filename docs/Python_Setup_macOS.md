# Python Setup for Urban Data Analytics

**Complete beginner's guide · macOS (Apple Silicon & Intel) · Miniforge + VS Code**

> **New to this? Read this first.** This guide assumes you have never installed Python before. You do not need to understand the commands, only to copy them carefully. Two quick ideas: the **Terminal** is a window where you type instructions instead of clicking, and you only use it for the one-time install below; after that, everything happens inside **VS Code**, a single program where you write code, run notebooks, and get help from an AI assistant. Go one step at a time, and do not worry when lots of text scrolls past.

You will set up three things, in order:

- **Miniforge**, a small program that gives you `conda`.
- An environment named `GISclass` holding the libraries the course uses (geopandas, rasterio, osmnx and a few others).
- **VS Code**, where you will write and run code, work in notebooks, and use an AI coding assistant, all in one window.

> **You only do this once.** The whole setup takes about 30 to 40 minutes, mostly waiting for downloads. After today you will not repeat it; each week you just open your project folder in VS Code and start.

---

## 1. Open the Terminal

The **Terminal** is a small window where you type commands. To open it, hold **Command** and press **Space** to open Spotlight search, type **Terminal**, and press **Return**. You can also find it in **Finder > Applications > Utilities > Terminal**.

> **How to use it.** To run a command, click into the Terminal window, paste it with **Command+V**, and press **Return**. Keep this guide open next to the Terminal so you can copy each command as you reach it.

## 2. Find out which chip your Mac has

Click the **Apple menu** at the top-left of the screen and choose **About This Mac**. Read the **Chip** or **Processor** line. Apple M1, M2, M3 or M4 means you have **Apple Silicon**; an Intel processor means **Intel**. Both work fine. You only need this if you download the installer by hand in the next step.

## 3. Download the Miniforge installer

The simplest way is to let your Mac pick the correct file. In the Terminal, paste this command and press **Return**:

```bash
curl -L -o Miniforge3.sh \
  "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
```

This downloads a single file named `Miniforge3.sh` into the folder the Terminal is currently in (usually your home folder). Nothing else happens yet.

> **Prefer clicking a link?** Open the releases page and download the file matching your chip: `Miniforge3-MacOSX-arm64.sh` for Apple Silicon, or `Miniforge3-MacOSX-x86_64.sh` for Intel. It lands in your **Downloads** folder, so first type `cd ~/Downloads` and press Return before the next step.
>
> Releases page: <https://github.com/conda-forge/miniforge/releases/latest>

## 4. Run the installer

Still in the Terminal, run:

```bash
bash Miniforge3.sh
```

The installer now asks a few questions. Answer them like this:

1. When it says "Please press ENTER to continue", press **Return**, then keep pressing Return or the Space bar to scroll through the licence text.
2. When it asks "Do you accept the license terms?", type `yes` and press Return.
3. When it shows where it will install and asks you to confirm, just press **Return** to accept the default location.
4. When it asks whether to **initialise conda** (it may say "update your shell profile"), type `yes` and press Return. This step matters.

> **About PATH.** You do _not_ need to edit PATH by hand. Answering `yes` to the initialise-conda question is what lets the Terminal find conda afterwards. If you accidentally answered `no`, just run `bash Miniforge3.sh` again and answer yes this time.

## 5. Restart the Terminal and check it worked

Quit the Terminal completely (**Command+Q**) and open it again as in Step 1. You should now see `(base)` at the start of the line. Confirm conda is installed:

```bash
conda --version
```

You should see something like `conda 24.x.x`. If you do, conda is working.

## 6. Create the GISclass environment

Save the `environment.yml` file your instructor provided into an easy-to-find folder, for example **Downloads**. Then move the Terminal into that folder and build the environment:

```bash
cd ~/Downloads
conda env create -f environment.yml
```

This downloads and installs everything and takes several minutes. If it asks you to confirm with `Proceed ([y]/n)?`, type `y` and press Return. If you were not given the file, run this single command instead:

```bash
conda create -n GISclass -c conda-forge python=3.12 ipykernel pandas geopandas matplotlib contextily mapclassify requests folium rasterio osmnx
```

> **That is the last of the Terminal for now.** Everything from here happens inside VS Code.

## 7. Install VS Code

Download VS Code, open the downloaded `.zip`, and drag **Visual Studio Code** into your **Applications** folder. Open it from Applications (or Spotlight).

- Download page: <https://code.visualstudio.com/download>

## 8. Install the Python and Jupyter extensions

In VS Code, click the **Extensions** icon on the left (four squares), or press **Command+Shift+X**. Search for and install these two, both published by Microsoft:

- **Python** (`ms-python.python`) — <https://marketplace.visualstudio.com/items?itemName=ms-python.python>
- **Jupyter** (`ms-toolsai.jupyter`) — <https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter>

Together these let you run notebooks directly inside VS Code.

## 9. Install an AI coding assistant

Later weeks use an AI assistant to help you read, write and debug code. This course uses **Claude Code**. In the **Extensions** panel, search for **Claude Code** (published by **Anthropic**) and click **Install**. Click the Claude icon that appears in the sidebar and sign in when prompted.

- Setup guide: <https://code.claude.com/docs/en/vs-code>

> **You need a paid account for this one.** Claude Code works with any paid Claude plan (Pro, Max, Team or Enterprise) or a Claude Console account, and needs no API key. OpenAI's **Codex** extension (search `Codex` by OpenAI) is an alternative but also needs a paid ChatGPT plan. If you do not have either, **GitHub Copilot** has a free tier and is free for verified students through the GitHub Student Developer Pack. **Install whichever your instructor tells you to use.**

- Free for students: <https://education.github.com/pack>

## 10. Make a project folder and open it

Keeping each piece of work in its own folder makes projects easy to manage. Create a folder for this week (for example `Documents/GISclass/Week02`), and put your notebook and any data files inside it. In VS Code, choose **File > Open Folder** and select that folder. VS Code now treats it as your workspace and remembers its settings.

## 11. Select the GISclass environment

Open the **Command Palette** with **Command+Shift+P**, type **Python: Select Interpreter**, and choose the one labelled **GISclass** (it will mention `conda`). VS Code finds it automatically even though conda is not on PATH, and remembers this choice for the folder.

> **Not seeing GISclass?** Close and reopen VS Code so it can detect the new environment, then try **Python: Select Interpreter** again.

## 12. Create a notebook and check everything works

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

> **Your routine from now on.** Each week: open VS Code, use **File > Open Folder** to open that week's folder, and start your notebook. The kernel and interpreter are already set. You will not need the Terminal again unless you add new packages.

## If something goes wrong

- **"conda: command not found":** you either skipped the initialise-conda step or did not restart the Terminal. Close and reopen the Terminal, or run `source ~/.zshrc`.
- **GISclass does not appear in VS Code:** close and reopen VS Code, then run **Python: Select Interpreter** again.
- **The environment install is very slow:** replace `conda` with `mamba` (installed for you), e.g. `mamba env create -f environment.yml`.
- **The notebook cannot find a library:** check the kernel at the top right says **GISclass**, not a different Python.
- **Errors on campus wi-fi:** try again on a normal network, or ask your instructor; a proxy setting may be needed.

## Appendix: the environment file

If your instructor did not give you an `environment.yml` file, open TextEdit (set it to plain text with **Format > Make Plain Text**), paste in exactly the text below, and save it as `environment.yml`:

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
