var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    app: ['./clients/browser/app.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./clients/browser/index.html", // Load a custom template
      inject: true, // Inject all scripts into the body
      favicon: path.join(__dirname, '../favicon.ico')
    }),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ],
  resolveUrlLoader: {
    root: path.join(__dirname, '../')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, exclude: /node_modules/, loader: "html" },
      { test: /\.json$/, exclude: /node_modules/, loader: "json" },
      { test: /\.css$/, loader: 'style!css!resolve-url' },
      { test: /\.scss$/, loader: 'style!css!resolve-url!sass?sourceMap' },
      { test: /\.(jpg|jpeg|gif|png)$/, loader: 'url?limit=10000&name=[name].[ext]?[hash]' },
      { test: /\.(woff|woff2|svg|ttf|eot|otf)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },
  devServer: {
    inline: true
  }
};
