module.exports = {
  presets: [
    [
      // 기본적으로 ECMAScript 2015+를 ES5 버전으로 변환 할 수 있는 것만 빌드함
      // 대표적으로 Promise 는 지원하지 않음
      '@babel/preset-env',
      {
        targets: {
          // https://github.com/browserslist/browserslist 참고
          browsers: ['defaults']
        }
      }
    ]
  ],
  plugins: [
    [
      // Promise 에 대한 polyfill 설정
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ]
};
