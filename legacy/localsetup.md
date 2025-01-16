# Optional: Setting Up a Python Development Environment Locally  

For detailed instructions on installing Python and setting up a virtual environment, refer to:  

[The Hitchhiker's Guide to Python: Best Practices for Development – Properly Installing Python](https://docs.python-guide.org/starting/installation/)  

Alternatively, you can manually download Python from the official website:  

- [Download Python | Python.org](https://www.python.org/downloads/)  

---

## Integrated Development Environment (IDE)  

There are several IDEs available, such as PyCharm and Visual Studio Code. Personally, I prefer [VS Code Insiders](https://code.visualstudio.com/insiders/), but your choice will depend on your own preferences.  

---

While it is not mandatory to develop within a virtual environment or use a Linux system, following the steps below can help minimise errors and save time during setup and development.  

If you are committed to becoming a more in-depth Python developer, consider completing the following setup.  

---

## Virtual Environment  

After installing Python, it is a best practice to use a virtual environment to create an isolated environment for each project.  

### Why Use a Virtual Environment?  
A virtual environment helps manage dependencies for your project without interfering with other Python projects on your system.  

### Instructions for Setting Up a Virtual Environment  

- **Windows**: Install `virtualenvwrapper-win` with the following command:  
  ```bash  
  pip install virtualenvwrapper-win  
  ```  

- **Mac**: Follow this guide for installing `virtualenv` and `virtualenvwrapper`:  
  [Installing virtualenv and virtualenvwrapper on macOS | Stack Overflow](https://stackoverflow.com/questions/49470367/install-virtualenv-and-virtualenvwrapper-on-macos)  

- **Linux**: Learn how to manage Python virtual environments using `virtualenvwrapper`:  
  [Managing Python Virtual Environments using Virtualenvwrapper | Medium](https://jkariukidev.medium.com/managing-python-virtual-environments-using-virtualenvwrapper-9c6ebde27ee4)  

---

## (For Windows Systems) Linux on Windows with WSL  

### Why Use Linux on Windows?  

1. **Consistency with production environments:** Many production servers run on Linux.  
2. **Simplified package management:** Linux offers powerful package managers like APT and YUM.  
3. **Access to command-line tools:** Linux provides a wide range of tools that are not natively available on Windows.  

### What Is WSL?  
WSL (Windows Subsystem for Linux) allows developers to run a Linux environment directly within Windows, enabling access to Linux-specific tools, libraries, and workflows.  

### Setting Up WSL  
For instructions on installing WSL, refer to:  
[How to Install Linux on Windows with WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/install)  