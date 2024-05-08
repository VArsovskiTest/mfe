const {merge} = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: "production",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
