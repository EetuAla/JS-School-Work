function showStudyGrant() {
    var Age = Number(document.getElementById("age").value);
	var WP = document.getElementById("withParents").value;
	
    var outputtext;    
	if (Age >= 20 && WP == "y"){
		outputtext = "The study grant is 136.70 euros.";
	} else if (Age >= 20 && WP == "n"){
		outputtext = "The study grant is 335.20 euros.";
	} else {
		outputtext = "Ask Kela.";
	}
	
	document.getElementById("answer").innerHTML = outputtext;
}
	