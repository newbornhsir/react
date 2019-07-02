const path = require('path')
const HtmlWebpackPlugn = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    openPage: 'app.html'
  },
  module: {
    rules: [
          {
              test: /\.jsx?$/, // babel 转换为兼容性的 js
              exclude: /node_modules/,
              use: [{
                  loader: 'babel-loader',
                  options: {
                      presets: ['react', 'es2015']
                  }
              }]
          }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugn({
      title: 'react-project',
      filename: 'app.html',
      template: 'template/index.html'
    })
  ]
}