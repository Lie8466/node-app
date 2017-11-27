var http = require("http");
var url = require("url");
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

function start(route, handle) {
  function onRequest(request, response) {
    var serve = serveStatic('public',
        {
           'index': ['index.html'],
           'upload': ['upload.html', 'upload'],
            'test': ['test.png', 'test.PNG']
        });
    serve(request, response, finalhandler(request, response));
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;