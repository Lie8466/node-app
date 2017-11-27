const querystring = require("querystring");
const fs = require("fs");
const formidable = require("formidable");

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        fs.writeFileSync("public/test.png", fs.readFileSync(files.upload.path));
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/test.png'/>");
        response.end();
    });
}

exports.upload = upload;