const webpack = require("webpack");
const saveLicense = require('uglify-save-license');

module.exports = {
  context: __dirname + '/',
  entry: {
    'cursor-parallax': './src/forBrowser',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query:{
          presets: ['es2015']
        }
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 3000
  }
};