var fs = require('fs');
var path = require('path');
var glob = require('glob');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var htmlFiles = glob.sync('./src/**/*.html');
var html = htmlFiles.map(function (item) {
    return new HtmlWebpackPlugin({
        data: {
            build: true
        },
        filename: item.substr(6),
        template: 'ejs-compiled-loader!' + item,
        inject: false,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: true,
            collapseInlineTagWhitespace: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            caseSensitive: true,
            minifyJS: true,
            minifyCSS: true,
            quoteCharacter: '"'
        }
    });
});

// baseWebpackConfig.module.preLoaders = [];

var webpackConfig = merge(baseWebpackConfig, {
    bail: true,
    module: {
        loaders: utils.styleLoaders({sourceMap: true, extract: true})
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: utils.assetsPath('[name].[hash].js'),
        chunkFilename: utils.assetsPath('[id].[hash].js')
    },
    plugins: [
        new webpack.DefinePlugin({
            title: '博客平台'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin(utils.assetsPath('[name].[hash].css')),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'scripts/vendor',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) && count > 1
                );
            }
        }),
        function () {
            this.plugin('done', function (stats) {
                var replaceInFile = function (filePath, toReplace, replacement) {
                    var str = fs.readFileSync(filePath, 'utf8');
                    var out = str.replace(toReplace, replacement);
                    fs.writeFileSync(filePath, out);
                };

                htmlFiles.map(function (item) {
                    replaceInFile(path.join(path.resolve(__dirname, '../build'), item.substr(6)),
                        /(src|href)=\"([\/\w\.]+\.(js|css))\"/g,
                        function ($0, $1, $2) {
                            var file = $2.split('.');
                            file.splice(-1, 0, stats.hash);
                            file = file.join('.');
                            return $1 + '="' + file + '"';
                        }
                    );
                });
            });
        }
    ].concat(html)
});

module.exports = webpackConfig;
