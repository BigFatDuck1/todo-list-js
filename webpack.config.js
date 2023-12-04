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
    output: {
        clean: true,
    },
    mode: "development", //Change to production when finished
}