function calculateReimbursement (time, fee){
	var maxTime = parseInt(time);
	if (maxTime <= 10){
		return 8.00;
	}else if (maxTime <= 20){
		return 11.00;
	}else if (maxTime <= 30){
		return 13.50;
	}else if (maxTime <= 45){
		return 16.50;
	}else {
		return 21.00;
	}
}

function calculate() {

		var DoctorApointment = document.getElementById("length").value;
		var DoctorsFee = document.getElementById("doctorsFee").value;

	calculateReimbursement (DoctorApointment, DoctorsFee);
		var outputText = "Length of visit is " + DoctorApointment + " minutes." + "<br />" + 
		"Kela reimbursement is " + calculateReimbursement(DoctorApointment, DoctorsFee).toFixed(2) + " euros.";
	
	document.getElementById("answer").innerHTML = outputText;	
}