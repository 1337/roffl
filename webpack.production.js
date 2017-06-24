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
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: true
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "www"),
        publicPath: "/js/",
        compress: true,
        port: 8103
    }
};
