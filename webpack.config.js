const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const DotENVWebpack = require('dotenv-webpack')
const { VueLoaderPlugin } = require('vue-loader')

require('dotenv').config()

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'cheap-module-source-map' : false,
  entry: path.resolve(__dirname, 'src/app.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // vue$: 'vue/dist/vue.esm.js',
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCSSExtractPlugin(),
    new CleanWebpackPlugin(),
    new DotENVWebpack(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.[jt]s$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.s?css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
