var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {'modules': false}],
            'stage-0',
            'react'
          ],
          plugins: [
            'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
