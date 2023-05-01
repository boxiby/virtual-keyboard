const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        //use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
      }, {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
}