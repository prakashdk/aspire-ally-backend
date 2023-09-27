const slsw = require("serverless-webpack");
const path = require("path");
// const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: process.env.STAGE == "dev" ? "development" : "production",
    entry: slsw.lib.entries,
    optimization: {
        minimize: false,
    },
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "src")],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".html"],
    },
    output: {
        libraryTarget: "commonjs",
        path: path.join(__dirname, ".webpack"),
        filename: "[name].js",
    },
    target: "node",
    externals: ["aws-sdk", 'chrome-aws-lambda'],
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false
                }
            },
        ],
    },
    // plugins: [
    //     new CopyWebpackPlugin({
    //         patterns: [
    //             { from: path.resolve(__dirname, "src/resources/invoice.html"), to: 'src/api/invoice.html' }
    //         ]
    //     })
    // ]
};