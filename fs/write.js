var fs = require('fs');
var util = require('util');

console.time("W/R");
fs.writeFile('test.txt', process.argv[2], function(err){
		if(err) 
			throw err;
	console.log("Saved");
	
	fs.readFile('test.txt', function(err, data) {
		if(err) 
			throw err;
		console.log(data.toString());
	});
});

fs.appendFile('test.txt', "This is an append data from my code", function(err){
	if(err)
		throw err
});

fs.exists('test.txt', function(exists) {
	util.debug(exists ? "it's there" : "no passwd!");
});

console.timeEnd("W/R");
