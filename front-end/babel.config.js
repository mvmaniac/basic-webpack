const presets = [
  [
    // 기본적으로 ECMAScript 2015+를 ES5 버전으로 변환 할 수 있는 것만 빌드함
    // 대표적으로 Promise 는 지원하지 않음
    '@babel/preset-env',
    {
      targets: 'defaults',
      // Promise 에 대한 polyfill 설정
      // @babel/plugin-transform-runtime (https://babeljs.io/docs/en/babel-plugin-transform-runtime)
      // 위의 플러그인을 사용하는 방법도 있는데 인스턴스 메소드를 사용못하는 것 같음
      // core-js 를 설치하고 @babel/preset-env 로 설정하는 방법으로 함 (Promise 등이 전역 스코프로 설정됨)
      useBuiltIns: 'usage',
      corejs: {version: '3.18', proposals: true}
    }
  ]
];

const plugins = [
  // @babel/preset-env 로 설정하는 방식으로 변경
  // [
  //   '@babel/plugin-transform-runtime',
  //   {
  //     corejs: {version: 3}
  //   }
  // ]
];

module.exports = {presets, plugins};
