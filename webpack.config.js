const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {

 entry: ["./src/js/webpack.js", "./src/sass/webpack.scss"],
 output: {
  path: path.resolve(__dirname, "./build/"),
  filename: "js/bundle.js"
 },

 module: {
  rules: [
   {
    test: /\.html$/,
    use: [{ loader: "html-loader", options: { minimize: true } }]
   },
   {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: "url-loader", options: { name: "./images/[name].[ext]", limit: 10000 }},{ loader: "img-loader" }]
   },
   {
    test: /\.css$/i,
    use: [{ loader: "style-loader" },{ loader: "css-loader" }]
   },
   {
    test: /\.ttf$/i,
    use: [{ loader: "url-loader" }]
   },
   {
    test: /\.(scss|sass)$/,
    use: ExtractTextPlugin.extract({ 
     use: [
           { loader: "css-loader", options: { minimize: true }},
           { loader: "postcss-loader" },
           { loader: "sass-loader" }
          ]
    })
   }
  ]
 },
 plugins: [
  new HtmlWebPackPlugin({
   template: "./src/dngw.html",
   filename: "./index.html"
  }),
  new ExtractTextPlugin({
   filename: "css/main.css"
  })
 ]
}
