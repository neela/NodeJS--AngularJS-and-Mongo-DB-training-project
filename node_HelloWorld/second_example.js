// A simple http server in node js.
// 
// execute the program and keep it running, meanwhile in the browser goto localhost:8080, you should see the string
// inside res.end() function as a response

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);
