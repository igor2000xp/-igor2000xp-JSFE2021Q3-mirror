const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


let mode = 'development';
if(process.env.NODE_ENV === 'production') {
  mode = 'production';
}
console.log(mode + ' node');

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

  resolve: {
    alias: {
      'framework': path.join(__dirname, 'src/framework')
    }
  },

   
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Art-quiz',
      template: './index.html',
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                "postcss-preset-env",
                                {
                                    // Options
                                },
                            ],
                        ],
                    },
                },
            },
            "sass-loader",
        ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    }

    ]
  },

  mode: mode

}