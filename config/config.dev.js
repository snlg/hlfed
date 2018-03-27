const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const baseWebpackConfig = require('./base.conf')


const webpackConfig = merge(baseWebpackConfig, {
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
})

module.exports = webpackConfig