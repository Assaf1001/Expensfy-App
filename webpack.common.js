const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: path.join(__dirname, "public", "dist"),
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
