# Basic Webpack

### 1. 강의 실습 예제 기반

- [프론트엔드 개발환경의 이해와 실습](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD# "프론트엔드 개발환경의 이해와 실습") 참고
- [프론트엔드 개발자를 위한 웹팩](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9# "프론트엔드 개발자를 위한 웹팩") 참고

### 2. 차이점

- EditorConfig 설정 추가
- ESLint & Prettier 설정 추가
- webpack-merge 사용

### 3. TODO

-

### 4. Setting

#### 4-1. front-end

- webpack

  ```javascript
  npm i -D webpack webpack-cli webpack-dev-server
  npm i -D webpack-merge
  ```

- webpack loader & plugin

  ```javascript
  npm i -D babel-loader
  npm i -D css-loader style-loader
  npm i -D sass-loader node-sass
  npm i -D clean-webpack-plugin mini-css-extract-plugin html-webpack-plugin
  npm i -D css-minimizer-webpack-plugin
  npm i -D copy-webpack-plugin
  ```

- babel & core-js

  ```javascript
  npm i -D @babel/core @babel/preset-env
  npm i -D @babel/eslint-parser
  npm i -D core-js
  ```

- eslint & prettier

  ```javascript
  npm i -D eslint
  npm i -D eslint-config-airbnb-base eslint-plugin-import eslint-import-resolver-alias
  npm i -D prettier eslint-config-prettier
  ```

- husky & lint-staged

  ```javascript
  npm i -D husky lint-staged
  ```

- connect-api-mocker

  ```javascript
  npm i -D connect-api-mocker
  ```

- axios

  ```javascript
  npm i axios
  ```

- etc

  ```javascript
  npm i custom-event-polyfill
  ```

#### 4-2. back-end

- express & morgan & cors

  ```javascript
  npm i express morgan cors
  ```

- eslint & prettier

  ```javascript
  npm i -D eslint
  npm i -D eslint-config-airbnb-base eslint-plugin-import
  npm i -D prettier eslint-config-prettier
  ```

### 5. etc

- IE에서 [CustomEvent](https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent "CustomEvent")를 지원하지 않아서 [custom-event-polyfill](https://www.npmjs.com/package/custom-event-polyfill "custom-event-polyfill") 를 사용함
