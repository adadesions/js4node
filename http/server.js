var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log("Requesting");
	var url_parts = url.parse(req.url, true);
	console.log(url_parts.pathname);
	var index = fs.readFileSync(__dirname+'/views/index.html');
	
	switch(url_parts.pathname){
		case '/':
		case '/index':			
			res.write(index);
			break;
		default:			
			res.writeHead(404);
			res.write("404 - Page not found");
	}
	res.end();
});
server.listen(9000, 'localhost');
