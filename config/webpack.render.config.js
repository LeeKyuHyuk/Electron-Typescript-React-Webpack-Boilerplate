const lodash = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.config');

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.devServer = {
  contentBase: path.join(__dirname, './dist/renderer.bundle.js'),
  port: 3000,
  hot: true,
  inline: true,
};
rendererConfig.entry = './src/renderer/renderer.tsx';
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
];

module.exports = [rendererConfig];
