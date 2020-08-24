(function(window){
	var goodbyegreeter={};
	var greeting="Good Bye";
	goodbyegreeter.speak =function(name){
		console.log(greeting+" "+name);
	}
	window.goodbyegreeter=goodbyegreeter;

})(window);
