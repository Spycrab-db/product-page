const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.css$/i, use: ["style-loader", "css-loader"]},
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
    },
    devtool: 'inline-source-map',
}