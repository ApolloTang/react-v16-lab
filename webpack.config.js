const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const config = {
    devServer: {
      host: '0.0.0.0',
      port: 8888
    },
    context: pathResolve('src'),
    entry: {
      'main': './main.js'
    },
    output: {
      filename: '[name].js'
    },
    module: {
      loaders:  [
        {
          test: /\.jsx?$/,
          loaders: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin( { template: './index.template.html', } )
    ],
    // devtool:  'eval', // Shows uncompiled webpack source code during development mode (use this when debug webpack)
    devtool:  'eval-source-map', // Shows original code during development mode (use this when debug application)
    // devtool:  'cheap-module-eval-source-map', // Won't pause in debugger, and show no code (don't use this)
  };
  return config;
}
