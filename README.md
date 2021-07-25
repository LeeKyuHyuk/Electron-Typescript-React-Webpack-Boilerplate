# Electron + TypeScript + React + Webpack Boilerplate

Electron + React + TypeScript + Webpack 조합으로 구성된 템플릿입니다.  
기본적으로 Airbnb Coding Convention을 지키기 위한 ESLint와 Prettier 설정이 되어있습니다.  
이 템플릿을 사용하여 간편하게 Electron + React + TypeScript + Webpack 조합의 프로그램을 만들 수 있으며 Windows, Linux, macOS에서 작동합니다.

## 간단하게 시작하기

```sh
git clone https://github.com/LeeKyuHyuk/Electron-Typescript-React-Webpack-Boilerplate.git ProjectName
```

`package.json` 파일의 다음 필드를 생성하려는 프로젝트 정보에 맞게 수정하여 사용하시길 바랍니다.

```json
{
  "name": "프로젝트 이름",
  "version": "프로젝트 버전",
  "description": "프로젝트 설명",
  "build": {
    "appId": "App Id",
    "productName": "Product Name",
    "buildVersion": "Build Number"
  },
  "author": "제작자 이름 또는 단체",
  "license": "프로젝트의 라이센스",
  "repository": "프로젝트의 저장소 URL",
  "keywords": ["프로젝트 키워드"],
  "bugs": "이슈 등록 페이지 URL",
  "homepage": "해당 프로젝트의 홈페이지 URL"
}
```

아래의 명령어로 필요한 패키지를 설치합니다.

```sh
cd ProjectName
npm install
```

아래 명령어로 개발 모드로 Electron 프로젝트를 실행합니다. 코드가 변경되면, 실시간으로 다시 빌드 되어 렌더링 됩니다.

```sh
npm run dev
```

## Electron 애플리케이션 설치 파일 빌드

`electron-builder`를 사용하여 Windows, Linux, macOS에서 작동하는 애플리케이션의 설치 파일을 빌드 할 수 있습니다.

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

## 폴더 구조

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

- `config` : Webpack 설정 파일들이 저장되어 있는 폴더
- `dist` : Webpack으로 여러 파일을 하나로 합친 결과물이 저장되는 폴더
- `out` : 빌드 된 애플리케이션 설치 파일이 저장되는 폴더
- `public` : 전역으로 사용되는 정적 리소스 파일이 저장되는 폴더
- `src/main` : Electron 애플리케이션에서 사용되는 Backend 모듈이 저장되는 폴더
- `src/main/main.ts` : 'electron-main'의 진입점
- `src/renderer` : Electron 애플리케이션에서 사용되는 Frontend 모듈(React)이 저장되는 폴더
- `src/renderer/renderer.tsx` : 'electron-renderer'의 진입점
- `tsconfig.json` : TypeScript 설정 파일
- `webpack.config.js` : Webpack 설정 파일
- `.eslintrc.yml` : ESLint 설정 파일
- `.prettierrc.yml` : Prettier 설정 파일

## 하나하나 차근차근 시작하기

아래의 명령어로 프로젝트를 생성합니다.

```sh
npm init
```

아래 명령어를 사용하여 Electron + TypeScript + React + Webpack 조합에 필요한 패키지를 설치합니다.

```sh
npm install --save @types/react @types/react-dom @types/react-router @types/react-router-dom react react-dom react-router react-router-dom
npm install --save-dev concurrently copy-webpack-plugin cross-env css-loader electron electron-builder file-loader html-webpack-plugin lodash rimraf source-map-loader style-loader ts-loader ts-node typescript webpack webpack-cli webpack-dev-server
```

Airbnb Coding Convention로 ESLint를 사용하려면, 아래 명령어로 패키지를 설치합니다.

```sh
npx install-peerdeps --dev eslint-config-airbnb
npm install eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin --save-dev
```

위에 있는 '[폴더 구조](#폴더-구조)'를 참고하여 프로젝트를 구성합니다.
