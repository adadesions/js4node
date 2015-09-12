//Object Literals
var student = {
	name:"Ada Kaminkure", 
	class:'M.6',
	friends: ['Mark', 'Steve', 'Bills'],

	showName: function(){
		console.log("Hello, Ada");
	},
	reName: function(){
		return this.name;
	},
	listFriends: function(){
		var index = 0;
		this.friends.forEach(function(friend){
			console.log("i:"+index+" Name: "+friend);
			index++;
		});
	}

}

student.listFriends();
student.name;
//Object Constructor
function Student(name, level, friends){
	this.name = name;
	this.level = level;
	this.friends = friends;

	this.showName = function(){
		console.log(this.name);
	}

	this.listFriends = function(){
		this.friends.forEach(function(friend){
			console.log(friend)
		});
	}
}

var s1 = new Student("AdaSions","M.5",['A','B','C']);
s1.listFriends();

//Dot notation
console.log(s1.name);

//Bracket notation
console.log(s1['level']);
























