const path = require('path');
const webpackBaseConfig = {
  mode:'production',
  entry: {
    goods: path.resolve(__dirname, '../goods.js'),
    order: path.resolve(__dirname, '../order.js'),
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'miniService',
  },
};
module.exports = webpackBaseConfig;
