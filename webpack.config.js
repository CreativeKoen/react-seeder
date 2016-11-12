var path = require('path');
module.exports = {
  entry: {
    main: './react/App.js'
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'public/static/js'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015', 'stage-0', 'stage-2'],
        plugins: [
          'react-html-attrs',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-flow-strip-types'
        ],
      }
    }]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
