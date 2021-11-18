const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// let mode = 'development'
// if (process.env.NODE_ENV === 'production') {
//     mode = 'production'
// }
// console.log(mode + ' mode')


module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  devtool: 'eval',

  devServer: {
    port: 4200
  },
   
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Native Framework',
      template: './index.html',
    })
  ]
}