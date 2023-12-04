const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "Todo list",
            header: "Todo list",
            template: "./src/index.html",
            filename: "./index.html",
            inject: 'body',
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
    output: {
        clean: true,
    },
    mode: "development", //Change to production when finished
}

//https://www.codeinwp.com/blog/webpack-tutorial-for-beginners/#what-is-webpack