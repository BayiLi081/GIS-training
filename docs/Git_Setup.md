# Git Setup for Urban Data Analytics

**Take-home guide · macOS & Windows · Git + VS Code + GitHub**

> **Why do this?** In class you edited your resume page directly on the GitHub website. That works for small changes, but for real projects you will want your code on **your own computer**, with **Git** keeping a history of every change and sending it to GitHub. This guide sets that up once. It takes about 15 minutes.

You will do four things, in order:

- **Install Git** on your computer.
- **Tell Git who you are** (your name and email).
- **Clone** (download) your resume repository to your computer with VS Code.
- **Edit, commit and push** a change back to GitHub.

> **Before you start.** You need a GitHub account and **VS Code**. If you have not installed VS Code yet, follow the Python setup guide for your system first.

---

## 1. Install Git

### macOS

Open the **Terminal** (hold **Command**, press **Space**, type **Terminal**, press **Return**) and run:

```bash
git --version
```

- If you see something like `git version 2.x.x`, Git is **already installed**. Skip to step 2.
- If a window pops up asking to install the **command line developer tools**, click **Install** and wait for it to finish (5 to 10 minutes). Then run `git --version` again.

### Windows

1. Go to <https://git-scm.com/downloads/win> and download the **64-bit Git for Windows Setup**.
2. Run the installer. **Keep all the default options** and click **Next** until it finishes.
3. Open **Git Bash** from the Start menu and run:

```bash
git --version
```

You should see something like `git version 2.x.x`.

## 2. Tell Git who you are

Every change you save (a **commit**) is labelled with your name and email. Run these two commands in the Terminal (macOS) or Git Bash (Windows), replacing the example values with your own:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

> **Use the same email as your GitHub account**, so GitHub links your commits to your profile.

Check it worked:

```bash
git config --global --list
```

## 3. Clone your resume repository with VS Code

1. Open **VS Code**.
2. Press **Ctrl+Shift+P** (Windows) or **Command+Shift+P** (macOS), type **Git: Clone** and press **Enter**.
3. Choose **Clone from GitHub**. If asked, click **Allow** and **sign in to GitHub** in the browser window that opens.
4. Pick your repository, e.g. `your-username/your-username.github.io`.
5. Choose a folder to save it in (for example, `Documents`), then click **Open** when VS Code asks whether to open the cloned repository.

You now have a copy of your repository on your computer.

## 4. Edit, commit and push

1. In VS Code, open `_config.yml` and change something small, for example your job title. Save the file (**Ctrl+S** / **Command+S**).
2. Click the **Source Control** icon on the left sidebar (it looks like a branch with three dots). Your changed file is listed there.
3. Type a short message describing the change, e.g. `Update job title`, then click **Commit**. If VS Code asks whether to stage all changes, click **Yes**.
4. Click **Sync Changes** (or **Push**) to send the commit to GitHub.
5. After 1 to 2 minutes, reload `https://your-username.github.io` to see the change.

> **The everyday Git loop:** **edit → commit → push**. If you also edit files on the GitHub website, click **Sync Changes** (which pulls first) before you start working, so your computer has the latest version.

---

## Troubleshooting

- **`git: command not found`**: Git is not installed, or the window was open during installation. Close and reopen the Terminal / Git Bash and try again.
- **"Please tell me who you are"** when committing: you skipped step 2. Run the two `git config` commands.
- **Push is rejected** ("updates were rejected"): the repository on GitHub has changes you do not have yet. Click **Sync Changes** in VS Code, then push again.
- **Asked for a password in the terminal**: GitHub no longer accepts account passwords here. Use **Clone from GitHub** in VS Code (step 3), which signs you in through the browser instead.

## Learn more

- Git documentation: <https://git-scm.com/doc>
- Using Git in VS Code: <https://code.visualstudio.com/docs/sourcecontrol/overview>
- GitHub Skills (free interactive courses): <https://skills.github.com>
