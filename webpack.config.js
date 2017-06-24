const webpack = require('webpack');
const path = require('path');


// https://github.com/webpack/docs/wiki/configuration
module.exports = {
    context: process.cwd(),
    entry: {
        app: './src/js/index.ts'
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve('./www/js'),
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: path.join(__dirname, "www"),
        publicPath: "/js/",
        compress: true,
        port: 8103
    }

};
