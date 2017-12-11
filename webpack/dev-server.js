/**
 * Created by li on 09/12/2017.
 */
var express = require('express');
var app = express();
var webpack = require('webpack')
var webpackConfig = process.env.NODE_ENV === 'prod'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
var hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})
app.use(devMiddleware)
app.use(hotMiddleware)

module.exports = app.listen(3303, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:3303';
    console.log('Listening at ' + uri + '\n')
})