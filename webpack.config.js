const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'bundle'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets/imgs'),
        to: path.resolve(__dirname, 'bundle/assets/imgs'),
      }]
    }),
  ],
  devServer: {
    port: 2000,
  },
  module: {
    rules: [
      { test: /\.(png|jpg|svg)$/, use: ['file-loader'] },
      { test: /\.(css|scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.ttf$/, use: ['file-loader'] },
    ],
  },
};
