# 🌥️ CloudTasks & Local Task v1.0.0 

A minimal, lightweight, and user-friendly task manager designed to keep your everyday tasks organized. Built as a web application with persistent local storage, it can also be packaged and run as a native macOS desktop app.

[![Mac Release](https://img.shields.io/badge/Mac%20Release-v1.0.0-blue.svg?style=for-the-badge&logo=apple&logoColor=white)](https://github.com/armanhossen-dev/To-Do-List/releases/tag/v1.0.0)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-cloudtasks.vercel.app-brightgreen?style=for-the-badge)](https://cloudtasks.vercel.app)

---

## 🖼️ Preview

| Updated Look | First Look |
| :---: | :---: |
| ![CloudTasks - Second Look](https://raw.githubusercontent.com/armanhossen-dev/To-Do-List/refs/heads/main/images/Screenshot-2026.png) | ![CloudTasks - First Look](https://raw.githubusercontent.com/armanhossen-dev/To-Do-List/refs/heads/main/images/cloudtasks.png) |

---

## ✨ Features

- ✏️ **Add Tasks:** Quick and seamless task creation.
- ✅ **Mark Complete:** Check off completed items instantly.
- ❌ **Delete Tasks:** Easily remove unwanted or finished tasks.
- 💾 **Persistent Storage:** Leverages `localStorage` so your data stays saved after closing or refreshing the browser.
- ⌨️ **Keyboard Shortcuts:** Press **Enter** to instantly add tasks.
- 🎨 **Responsive UI:** Clean, distraction-free interface built for both desktop and mobile screens.
- 🖥️ **Mac Desktop App:** Package and run locally on macOS.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Storage:** Browser `localStorage`
- **Packaging:** [Pake CLI](https://github.com/tw93/Pake)

---

## 🖥️ Run as a Mac Desktop App

You can package the web application as a standalone macOS desktop app using **Pake**:

### 1. Prerequisites
Ensure you have **Node.js** and **Homebrew** installed on your Mac.

### 2. Build & Install

```bash
# Install Pake globally
npm install -g pake-cli

# Package the Web App into a macOS App
pake [https://cloudtasks.vercel.app](https://cloudtasks.vercel.app) --name "Local Task"
```
