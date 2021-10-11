
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');
// let conf = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'main.js',
//     publicPath: 'dist/'

//   },
  // devServer: {
  //   overlay: true
  // }
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       // exclude:  '/node_modules/'
  //     }
  //   ]
  // }
// };

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },


  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

// module.exports = conf;