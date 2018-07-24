var http = require('http');
var port = 8080;

//create a server object:
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  
  res.write('<title>http-server</title>');
  res.write('Hello, World!');
  res.end();
})

server.listen(port, () => {
  console.log('Listening on port ' + port + '...');
})