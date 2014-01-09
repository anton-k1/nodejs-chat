var http = require("http");
var querystring = require("querystring");

var printLoginPage = function(response) {
  var form = '<form action="/chat" method="post">' +
             '<input type="text" name="name">' +
             '<input type="submit" value="Ok">' +
             '</form>';
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(form);
};

var onRequest = function(request, response) {
  var path = request.url;
  console.log("Path = " + path);

  if (path == '/') {
    //Login page
    printLoginPage(response);
  } else if (path == '/chat') {
    //Chat page
    response.writeHead(200);
    response.end('Chat!');
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
};

http.createServer(onRequest).listen(8087);

console.log("Running on localhost:8087...");