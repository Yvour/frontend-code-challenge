const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}],
              'react'
            ],
            babelrc: false
          }
        }]      },
		{
           test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
		}
    ],
  },
  plugins: [
 
        new ExtractTextPlugin("style.css"),
    
    new HtmlWebpackPlugin(
   {
template: __dirname + "/src/app/index.html",
filename: "index.html",
inject: "body"
}
)
  ],
};
