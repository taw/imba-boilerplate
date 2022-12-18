let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: 'imba/loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      }
    ],
  },
  resolve: {
    extensions: [".imba", ".js", ".json", ".scss"]
  },
  entry: ["./src/app.imba", "./src/app.scss"],
  output: {  path: __dirname + '/dist', filename: "app.js" },
  plugins: [
    new MiniCssExtractPlugin({filename: 'app.css'})
  ]
}
