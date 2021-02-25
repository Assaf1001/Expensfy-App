const path = require("path");
const publicFolderPath = path.join(__dirname, "public");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: publicFolderPath,
        filename: "bundle.js",
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.(jsx|js)$/,
                exclude: "/node_modules/",
            },
            {
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                test: /\.s?css$/,
            },
        ],
    },
};
