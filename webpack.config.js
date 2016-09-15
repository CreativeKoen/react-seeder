var path = require('path');
module.exports = {
  entry: [
    './react/App.js'
  ],
  //devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      }
    }]
  },
  devServer: {
      inline: true,
      contentBase: './public'
  }
};
