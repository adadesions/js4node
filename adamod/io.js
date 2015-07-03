module.exports = {
	sayAda: function(){
		return 'Ada';
	},

	sayAdacode: function(type){
		if(!type) return 'Adacode.io';
		return 'AdaCode.'+type;
	},
}
