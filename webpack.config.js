const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watchFile } = require("fs");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: "eval-source-map",

    devServer: {
        watchFiles: "./src/template.html",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),

    ],

    module : {
        rules: [
            {
                test: /\.css$/i, // Regex matching css file types
                use:  ["style-loader", "css-loader"] // Loaders applied to css imports
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    }
}