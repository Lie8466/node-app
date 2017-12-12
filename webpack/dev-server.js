/**
 * Created by li on 09/12/2017.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.conf.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

module.exports = app.listen(3303, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:3303';
    console.log('Listening at ' + uri + '\n')
})
