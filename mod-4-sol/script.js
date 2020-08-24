(function() {
	var names=["John","June","mayan","rohith","kates","lily","Jay"];
	for(var i=0;i<names.length;i++){
		var FirstLetter=names[i].charAt(0).toLowerCase();
		if(FirstLetter==='j'){
			goodbyegreeter.speak(names[i]);
		}
		else {
			hellogreeter.speak(names[i]);
	}
}
})();