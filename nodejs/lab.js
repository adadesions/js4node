var os = require('os');
var http = require('http');
var crypto = require('crypto');
var fs = require('fs');
var filename = process.argv[2];

var ciphers = crypto.getCiphers();
var sha = crypto.createHash('sha1');
var s = fs.ReadStream(filename);

fs.readFile(filename, function(err, data){
	if(err)
		throw err;
	// console.log(data);
});

fs.readdir(filename, function(e,data){
	console.log(data);
})