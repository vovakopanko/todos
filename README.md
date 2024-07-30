# TikoToDoListChallenge

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Troubleshooting](#troubleshooting)

## Introduction
TikoToDoListChallenge is a React Native application that allows users to manage their to-do list with features like adding, editing, and deleting tasks. The application uses a variety of libraries including `@gorhom/bottom-sheet`, `react-native-reanimated`, and `axios`.

## Prerequisites
- **Node.js** version 18 or higher.
- **npm** (comes with Node.js) or **Yarn** package manager.
- **Java Development Kit (JDK)** for Android development.
- **Xcode** for iOS development (macOS only).
- **CocoaPods** for managing iOS dependencies (macOS only).

## Installation
1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd tikoToDoListChallenge
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    yarn install
    ```

3. **Install iOS dependencies:**
    ```bash
    cd ios
    pod install
    cd ..
    ```

## Running the Project
1. **Start the Metro bundler:**
    ```bash
    npm start
    # or if you use Yarn
    yarn start
    ```

2. **Run the project on Android:**
    ```bash
    npm run android
    # or if you use Yarn
    yarn android
    ```

3. **Run the project on iOS:**
    ```bash
    npm run ios
    # or if you use Yarn
    yarn ios
    ```

## Scripts
- **`npm start`**: Starts the Metro bundler.
- **`npm run android`**: Builds and runs the app on an Android emulator or device.
- **`npm run ios`**: Builds and runs the app on an iOS simulator or device.
- **`npm run lint`**: Runs ESLint for code quality checks.

## Troubleshooting
1.  **Failed to create a worklet**
    - Follow the setup guide for `react-native-reanimated`:
      - Add Reanimated's babel plugin to your `babel.config.js`:
        ```javascript
        module.exports = {
          presets: ['module:metro-react-native-babel-preset'],
          plugins: ['react-native-reanimated/plugin'],
        };
        ```
      - Make sure to reset the cache after adding the plugin:
        ```bash
        npm start -- --reset-cache
        # or if you use Yarn
        yarn start --reset-cache
        ```
