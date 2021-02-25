const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const publicFolderPath = path.join(__dirname, "public");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: publicFolderPath,
        port: 3000,
        historyApiFallback: true,
    },
});
