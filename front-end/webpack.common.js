const path = require('path');

const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'none', // production, development, none
  entry: {
    bundle: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '',
              name: '[name].[ext]?[hash]',
              // file-loader로 할 경우에는 limit 속성은 없는 듯?
              // 10KB 파일 미만의 파일은 url-loader에서 base64 인코딩 문자열로 처리
              // 그 이상은 file-loader가 처리
              limit: 10000 // 10KB
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 환경변수를 설정 할 수 있음
    new webpack.DefinePlugin({}),
    new CleanWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
