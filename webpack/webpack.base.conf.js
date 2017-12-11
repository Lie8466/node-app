var path = require('path')
var glob = require('glob')
var utils = require('./utils')

const PATH_ROOT = path.resolve(__dirname, '..');
const PATHS = {
    NODE_MODULES: path.resolve(PATH_ROOT, 'node_modules')
};


var js = glob.sync('./src/**/*.js').reduce(function (prev, curr) {
    prev[curr.slice(6, -3)] = [curr];
    return prev;
}, {})


module.exports = {
    entry: js,
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: [PATHS.NODE_MODULES]
            },
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
    }
}
