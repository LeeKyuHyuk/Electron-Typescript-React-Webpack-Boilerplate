# Electron + TypeScript + React + Webpack Boilerplate

This template consists of a combination of Electron + React + TypeScript + Webpack.  
Basically, ESLint and Prettier are set to follow the Airbnb Coding Convention.  
You can use this template to easily create desktop applications with a combination of Electron +
React + TypeScript + Webpack and it works on Windows, Linux, macOS.

## Getting Started

```sh
git clone https://github.com/LeeKyuHyuk/Electron-Typescript-React-Webpack-Boilerplate.git ProjectName
```

Please modify the following fields in the `package.json` file to match the project information you
want to create.  
For details on each field, please refer to the
[npm package.json document](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

```json
{
  "name": "Project Name",
  "version": "Project Version",
  "description": "Project Description",
  "build": {
    "appId": "App Id",
    "productName": "Product Name",
    "buildVersion": "Build Number"
  },
  "author": "Author",
  "license": "Project License",
  "repository": "Project Repository URL",
  "keywords": ["Project Keywords"],
  "bugs": "Project Issue Tracker URL",
  "homepage": "Project Homepage URL"
}
```

Install the required packages with the command below:

```sh
cd ProjectName
npm install
```

Run the Electron project in development mode with the command below. When code is changed, it is
rebuilt and rendered in real time.

```sh
npm run dev
```

## Building Application Installer

You can use `electron-builder` to build installer for electron application. That work on Windows,
Linux and macOS.

- **Windows :**

```sh
npm run build:win
```

- **Linux :**

```sh
npm run build:linux
```

- **macOS :**

```sh
npm run build:mac
```

## Structure

```
├── .eslintrc.yml
├── .prettierrc.yml
├── LICENSE
├── README.md
├── config
│   ├── webpack.common.config.js
│   ├── webpack.config.js
│   ├── webpack.main.config.js
│   └── webpack.render.config.js
├── dist
├── node_modules
├── out
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── main
│   │   └── main.ts
│   └── renderer
│       └── renderer.tsx
└── tsconfig.json
```

- `config` : Webpack configuration files are stored
- `dist` : Result of merging multiple files into one by Webpack is saved
- `out` : built application installer file is saved
- `public` : Static resource files used globally are stored
- `src/main` : Backend modules used in Electron applications are saved
- `src/main/main.ts` : Entry point of 'electron-main'
- `src/renderer` : Frontend module (React.js) used in Electron application is saved
- `src/renderer/renderer.tsx` : Entry point for 'electron-renderer'
- `tsconfig.json` : TypeScript configuration file
- `webpack.config.js` : Webpack configuration file
- `.eslintrc.yml` : ESLint configuration file
- `.prettierrc.yml` : Prettier configuration file

## Start step by step

Create a project with the command below:

```sh
npm init
```

Install and add the packages required for the Electron + TypeScript + React + Webpack combination
using the command below:

```sh
npm install --save @types/react @types/react-dom @types/react-router @types/react-router-dom react react-dom react-router react-router-dom
npm install --save-dev concurrently copy-webpack-plugin cross-env css-loader electron electron-builder file-loader html-webpack-plugin lodash rimraf source-map-loader style-loader ts-loader ts-node typescript webpack webpack-cli webpack-dev-server
```

To use ESLint with Airbnb Coding Convention, install the package with the command below:

```sh
npx install-peerdeps --dev eslint-config-airbnb
npm install eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin --save-dev
```

Refer to the '[Structure](#Structure)' above to compose the project.
