const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none', // production, development, none
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  entry: {
    bundle: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        type: 'asset',
        generator: {
          filename: '[name][ext]?[hash]'
        },
        parser: {
          dataUrlCondition: {
            // 10KB 파일 미만의 파일은 url-loader에서 base64 인코딩 문자열로 처리
            // 그 이상은 file-loader가 처리
            maxSize: 10 * 1024 // 10KB
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // target 기본값인 web에 es5를 추가하여 IE 지원
  // IE를 지원하지 않을 경우 안해도 될듯?
  target: ['web', 'es5']
};
