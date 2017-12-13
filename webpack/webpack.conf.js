const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const glob = require('glob');

const PATH_ROOT = path.resolve(__dirname, '..');
const PATHS = {
    NODE_MODULES: path.resolve(PATH_ROOT, 'node_modules')
};


module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            '@common': path.resolve(__dirname, '../src/common'),
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss|.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        javascript: 'babel-loader', // <script lang="javascript"> webstorm 加了lang 才会正常的格式
                    },
                    cssModules: {
                        camelCase: true,
                        localIdentName: '[local]_[hash:base64:4]'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader!eslint-loader',
                exclude: [PATHS.NODE_MODULES]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
    },
    plugins: [
        // // 清理build文件夹
        // new CleanWebpackPlugin(['../build/*.*']),
        // 热更新
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            data: {
                build: false
            },
            filename: 'index.html',
            template: 'ejs-compiled-loader!' + './src/index.html',
            inject: false,
            minify: false
    })
    ]
};
