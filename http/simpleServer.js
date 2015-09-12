var http = require('http');

var server = http.createServer(function(request, respones){
	respones.writeHead(200, {'Content-Type': 'text/plain'});
	respones.write("Hello,world!!");
	respones.end();
});
server.listen(5000, 'localhost');
