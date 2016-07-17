var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

console.log(helpers.root('src/client/styles'));

module.exports = {
    entry: {
        'polyfills': './config/polyfills.ts',
        'vendor': './config/vendor.ts',
        'app': './src/client/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.html']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loaders: ['html']
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            include: helpers.root('src/client/images'),
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.css$/,
            exclude: helpers.root('src/client/styles'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loaders: ['raw']
        }]
    },

    sassLoader: {
        includedPaths: [helpers.root('src/client/styles/index.scss')]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
