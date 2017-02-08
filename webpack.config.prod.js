const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Langa',
      template: './index.html'
    }),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    /*
    new webpack.optimize.UglifyJsPlugin({
      'screw-ie8': true,
      comments: false,
      /*
      compressor: {
        negate_iife: true,
        warnings: false,
        drop_console: true,
        unused: true,
        dead_code: true,
        unsafe: true,
        keep_fargs: false,
        pure_getters: true,
        join_vars: true,
        sequences: true,
        loops: true,
        booleans: true,
        evaluate: true,
        conditionals: true

      }
    })
      */
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /(\.scss)|(\.css)$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader'
      ],
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]',
      exclude: path.join(__dirname, 'node_modules')
    }, {
    }, {
      test: /favicon\.ico$/,
      loader: 'file-loader?name=favicon.ico',
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=25000',
      exclude: path.join(__dirname, 'node_modules')
    }]
  }
}
