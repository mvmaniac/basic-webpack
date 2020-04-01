const childProcess = require('child_process');

const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // 오른쪽에서 왼쪽으로 사용됨
        // css-loader -> MiniCssExtractPlugin.loader
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
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
        env: '(개발용)'
      }
    })
  ],
  devServer: {
    port: 9000
  }
});
