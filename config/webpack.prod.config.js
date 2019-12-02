const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '../')
const distPath = path.resolve(rootPath, './dist');

module.exports = {
  entry: path.resolve(rootPath, './src/index.ts'),
  mode: 'production',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'index.html')
    }),
  ],
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
}