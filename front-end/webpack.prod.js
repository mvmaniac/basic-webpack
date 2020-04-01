const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // 오른쪽에서 왼쪽으로 사용됨
        // css-loader -> MiniCssExtractPlugin.loader
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleDateString()}
      `
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: ''
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
});
