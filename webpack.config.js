const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { smart } = require('webpack-merge')
const { resolve } = require('path')

require('dotenv').config()

const nodeModulePath = resolve('node_modules')
const distPath = resolve(__dirname, 'dist')
const srcDirPath = resolve(__dirname, 'src')
const entryPointFilePath = resolve(srcDirPath, 'index.js')
const templateFilePath = resolve(srcDirPath, 'index.html')

const { NODE_ENV, PORT: port, TITLE: title } = process.env

const IS_OPTIMIZED = NODE_ENV !== 'development'

const base = {
  target: 'web',

  entry: ['@babel/polyfill', entryPointFilePath],

  output: {
    libraryTarget: 'var',

    path: distPath,

    filename: 'bundle.js',

    sourceMapFilename: 'bundle.map'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [srcDirPath, nodeModulePath]
  },

  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,

        include: srcDirPath,

        use: {
          loader: 'babel-loader',

          options: {
            babelrc: false,

            retainLines: !IS_OPTIMIZED,

            cacheDirectory: !IS_OPTIMIZED,

            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-async-generator-functions',
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title,
      filename: 'index.html',
      inject: 'body',
      template: templateFilePath
    })
  ]
}

const development = {
  mode: 'development',

  devtool: 'cheap-source-map',

  devServer: {
    port,
    host: '0.0.0.0',
    inline: true,
    watchOptions: {
      ignored: [/node_modules/]
    }
  }
}

const optimized = {
  bail: IS_OPTIMIZED,

  mode: 'production',

  devtool: false,

  output: {
    pathinfo: false
  },

  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          conditionals: true,
          comparisons: false
        },
        output: {
          comments: false,
          ascii_only: true
        }
      }
    })
  ]
}

module.exports = !IS_OPTIMIZED
  ? smart(base, development)
  : smart(base, optimized)
