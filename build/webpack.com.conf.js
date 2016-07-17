var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.com.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/assets/sass/index.js'
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.com.productionSourceMap, extract: true })
  },
  devtool: false,
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.com.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('css/web-style.css'),
  ]
})



module.exports = webpackConfig
