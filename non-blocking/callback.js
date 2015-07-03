var fs = require('fs');

//Blocking Code
console.time("Blocking");
var data = fs.readFileSync('adatext.txt');
console.log(data.toString());
console.log("END for Blocking");
console.timeEnd("Blocking")

//Non-Blocking Code
console.time("Non-Blocking");
fs.readFile('adatext.txt', function(err, data){
	if(err)
		console.log(err);
	console.log(data.toString());
});
console.log("END For Non-Blocking");
console.timeEnd("Non-Blocking");
