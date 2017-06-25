const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// https://github.com/webpack/docs/wiki/configuration
module.exports = {
    devtool: 'eval',
    context: process.cwd(),
    entry: {
        app: './src/js/index.tsx'
    },
    resolve: {
        extensions: [
            ".ts", ".tsx",
            ".js", ".jsx",
            ".styl"
        ],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src/js")
        ]
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
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: path.join(__dirname, "www"),
        publicPath: "/js/",
        compress: true,
        port: 8103
    }
};
