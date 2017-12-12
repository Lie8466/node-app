/**
 * Created by li on 09/12/2017.
 */
var express = require('express');
var app = express();

app.use( express.static('build'));

module.exports = app.listen(3303, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:3303';
    console.log('Listening at ' + uri + '\n')
})
