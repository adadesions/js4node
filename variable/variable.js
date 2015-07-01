var common = "Adacode.ninja";

if(common)
	common = "AdaCode.io"
console.log(common);

function nightmare(){
	common = "nightmare";
	console.log(common);
}

nightmare();
fine();

//Hositing
function fine(){
	var common = "Node.js"
	console.log(common);
}

// Function Declaration Overrides Variable Declaration When Hoisted
var func;
function func(){
	console.log("Func");
}
func();
