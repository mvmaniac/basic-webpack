const childProcess = require('child_process');

const {merge} = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const apiMocker = require('connect-api-mocker');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        // 오른쪽에서 왼쪽으로 사용됨
        // css-loader -> MiniCssExtractPlugin.loader
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // 전역변수를 설정 할 수 있음
    // 환경변수도 설정 할 수 있는데 EnvironmentPlugin 사용하는게 나을 듯(?)
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('')
    }),

    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleDateString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')} 
        Author: ${childProcess.execSync('git config user.name')} 
      `
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        MODE: '(개발용)',
        AXIOS_URL: ''
      }
    })
  ],
  devServer: {
    port: 9000,

    // mock api 서버로 사용 시
    // before: (app, server, compiler) => {
    //   app.use(apiMocker('/api', './src/mocks/'));
    // },

    // 실제 api 서버로 사용 시 (서버에서 cors 설정이 안되어 있는 경우...)
    proxy: {
      '/api': 'http://localhost:8081'
    },
    hot: true
  }
});
