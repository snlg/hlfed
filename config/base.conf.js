const webpack = require('webpack')
const path = require('path')
const packageJson = require('../package.json')

const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  output: {
    path: path.resolve(__dirname, "../public/dist"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].js"
  },
  // entry: {
  //   main: path.join(__dirname, '../src/index'),
  // },
  resolve: {
    extensions: ['.js'],
    alias: {
      containers: path.join(__dirname, '../src/containers'),
      components: path.join(__dirname, '../src/components'),
      constants: path.join(__dirname, '../src/constants'),
      utils: path.join(__dirname, '../src/utils'),
      services: path.join(__dirname, '../src/services')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // test: /.*\/containers\/.*\.js$/,
        test: /containers\/([^/]+)\/?([^/]*)\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /containers\/app.js$/,
        use: ['bundle-loader?lazy','babel-loader']
      },
      {
        test: /\.js[x]?$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader/useable', 'css-loader', 'less-loader', 'postcss-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}

// module.exports = {
//   // watchOptions: webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。webpack 默认关闭，文件改变的时候发生更新。
//   watchOptions: {
//     ignored: /node_modules/
//   },
//   mode: 'production',
//   // production 模式：
//   // 1: 默认提供所有可能的优化，如代码压缩/作用域提升等
//   // 2: 不支持 watching
//   // 3: process.env.NODE_ENV 的值不需要再定义，默认是 production
//   // 4: 生产模式可以为你提供各种优化。这包含代码压缩，作用域提升，未引用模块移除，无副作用模块修剪，还//   // 包含引入一些像 NoEmitOnErrorsPlugin 这样需要你手动使用的插件。
//   // 打包环境配置 全局env
//   // development 模式：
//   // 1: 主要优化了增量构建速度和开发体验
//   // 2: process.env.NODE_ENV 的值不需要再定义，默认是 development
//   // 3: 开发模式下支持注释和提示，并且支持 eval 下的 source maps
//   // 4: 开发模式优化了开发速度和开发体验。同样，我们会自动在你的包输出中包含像路径名，
//   // eval-source-maps 这样的功能，以便阅读代码和快速构建！
//   // 此外, webpack 4 还提供一种隐藏(none)模式，这种模式下会禁用一切优化
//   module: {
//     // webpack 4 中会默认解析 .wasm, .mjs, .js 和 .json 为后缀的文件。
//     rules: [{
//       test: /\.special\.json$/,
//       type: "javascript/auto",
//       use: "special-loader"
//     }]
//   }
//   //   删除了一些常用内置插件：
//   //   NoEmitOnErrorsPlugin -> optimization.noEmitOnErrors(生产模式默认)
//   // ModuleConcatenationPlugin -> optimization.concatenateModules （生产模式默认）
//   //   NamedModulesPlugin -> optimization.namedModules （开发模式默认）。
//   //   删除了 CommonsChunkPlugin，取而代之的是 optimization.splitChunks 和 optimization.runtimeChunk，这提供了细粒度的缓存策略控制
//   // 可以使用 module.rules[].resolve 来配置解析，它会与全局配置合并。
//   //   optimization.minimize 用于控制 minimizing 的开关。 生产模式默认为开，开发模式默认为关。
//   //   optimization.minimizer 用于配置 minimizers 和选项。
//   //   许多支持占位符(placeholders)的配置选项现也支持函数形式
//   // 错误的 options.dependencies 配置将报错
//   // sideEffects 可以通过 module.rules 覆盖
//   // output.hashFunction 可以是一个构造函数，用于自定义 hash 函数。处于性能考虑，也可以提供非加密哈希函数
//   // output.globalObject 可以用于配置运行时的全局对象引用
//   // 默认配置
//   // webpack 默认会按照.wasm, .mjs, .js 和.json 的扩展名顺序查找模块。
//   //   output.pathinfo 在开发模式下默认是打开的
//   // 生产环境下，默认关闭内存缓存
//   // entry 的默认值是 ./ src，output.path 的默认值是 ./ dist
//   // 在选择模式选项时，默认值是 production
// }