var path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    es6_modules: './es6-modules',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
