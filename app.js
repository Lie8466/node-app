/**
 * Created by li on 25/11/2017.
 */
var express = require('express');
var app = express();
var formidable = require("formidable");
fs = require("fs");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/public', express.static('public'));

app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
        console.log(files.upload.path);
        fs.writeFileSync("public/test.png", fs.readFileSync(files.upload.path));
        res.redirect("http://localhost:3000/public/upload.html") ;
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});