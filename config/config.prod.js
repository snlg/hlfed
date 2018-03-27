const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseWebpackConfig = require('./base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
})
