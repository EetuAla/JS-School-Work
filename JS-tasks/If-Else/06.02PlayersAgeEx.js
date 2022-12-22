function checkAge() {
		var age = Number(document.getElementById("age").value);
		
		if (age < 18){
			outputtext = "Adolescents are not allowed to play." 
		} else {
			outputtext = "Old enough to play."
		}
		document.getElementById("answer").innerHTML = outputtext;

			
	}