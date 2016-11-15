var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'react', 'App.js'),
  devtool: 'inline-source-maps',
  output: {
    path: path.join(__dirname, 'public', 'Static', 'js'),
    publicPath: path.join(__dirname, 'public', 'Static', 'js'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8000,
    inline: true,
    contentBase: 'public/',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    loaders: [{
      //test: /\.jsx?$/,
      test: path.join(__dirname, 'react'),
      //loaders: ['react-hot-loader/babel', 'babel'],
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      //queries: {
      query: {
        presets: ['react', 'es2015', 'stage-0', 'stage-2', 'react-hmre'],
        plugins: [
          // 'react-hot-loader/babel',
          'react-html-attrs',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-flow-strip-types'
        ],
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin()

    // prod
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ]
};
