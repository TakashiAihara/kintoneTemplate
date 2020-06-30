import { resolve } from 'path';
const src = __dirname + '/src';
const dist = __dirname + '/dist';

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web', // "async-" or "electron-main" or "electron-renderer" or "electron-preload" or "node" or "node-webkit" or "web" or "webworker"
  context: src,
  mode: 'development',
  entry: {
    'kintone-js-sdk.min': './src/browser/main.js',
  },
  output: {
    path: dist,
    filename: '[name].js',
    library: 'kintoneJSSDK',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // watch: env.watch,
  devtool: 'source-map',
};
