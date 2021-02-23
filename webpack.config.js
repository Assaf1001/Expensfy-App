const path = require("path");

const publicFolderPath = path.join(__dirname, "public");

module.exports = {
    entry: "./src/app.jsx",
    // entry: "./playground/hoc.jsx",
    mode: "development",
    output: {
        path: publicFolderPath,
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.(jsx|js)$/,
                exclude: "/node_modules/",
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /\.s?css$/,
            },
        ],
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: publicFolderPath,
        port: 3000,
        historyApiFallback: true,
    },
};
