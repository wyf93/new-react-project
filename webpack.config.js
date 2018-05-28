var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 2334
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}