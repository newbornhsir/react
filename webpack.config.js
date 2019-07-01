const path = require('path')
const HtmlWebpackPlugn = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugn({
      title: 'react-project',
      filename: 'app.html',
      template: './template/index.html'
    })
  ]
}