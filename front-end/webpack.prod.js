const webpack = require('webpack');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        // 오른쪽에서 왼쪽으로 사용됨
        // css-loader -> MiniCssExtractPlugin.loader
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 전역변수를 설정 할 수 있음
    // 환경변수도 설정 할 수 있는데 EnvironmentPlugin 사용하는게 나을 듯(?)
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('http://localhost:8081')
    }),

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
        MODE: '',
        AXIOS_URL: './vendor/axios.min.js'
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    // 외부 라이브러리를 따로 빼서 사용할 경우
    new CopyWebpackPlugin([
      {
        from: './node_modules/axios/dist/axios.min.js',
        to: './vendor/axios.min.js'
      }
    ])
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsWebpackPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true // 콘솔 로그를 제거한다.
          }
        }
      })
    ]
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  externals: {
    axios: 'axios'
  }
});
