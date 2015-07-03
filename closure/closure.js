var counter = 0;

function add(){
	counter += 1;
}
//End Global scope

function add1(){
	var counter = 0;
	return counter += 1;
}
//End Local scope

var add2 = (function(){
	var counter = 0;
	return function(){
		return counter += 1;
	}
})();
//End Closures

for(var i=0;i<3;i++){
	add();
	add1();
	add2();
}

console.log('C1: '+counter);
console.log('C2: '+add1());
console.log('C3: '+add2());