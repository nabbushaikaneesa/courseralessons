(function(window) {
	var hellogreeter={};
	var greeting="Hello";
	hellogreeter.speak=function(name) {
		console.log(greeting+" "+name);
	}
	window.hellogreeter=hellogreeter;
})(window);