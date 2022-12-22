function calculateReimbursement (time){
	var maxTime = time;
	if (maxTime <= 10){
		maxTime = 8.00;
	}else if (maxTime <= 20){
		maxTime = 11.00;
	}else if (maxTime <= 30){
		maxTime = 13.50;
	}else if (maxTime <= 45){
		maxTime = 16.50;
	}else {
		maxTime = 21.00;
	}
	return maxTime;
}

function customersBill (DoctorsFee, KelaReimbursement){
	var customersBill = DoctorsFee + officeFee - KelaReimbursement;
	return customersBill;
}	
	

function calculate() {

		var DoctorApointment = parseInt(document.getElementById("length").value);
		var DoctorsFee = parseInt(document.getElementById("doctorsFee").value);

		var KelaMaxReimbursement = calculateReimbursement(DoctorApointment);

		var customerHasToPay = customersBill(DoctorsFee, KelaMaxReimbursement);

		var outputText = "Doctor's Fee is " + DoctorsFee.toFixed(2) + " euros." + "<br />" +
						"Kela reimbursement is " + KelaMaxReimbursement.toFixed(2) + " euros." + "<br />" +
						"Office Fee is " + officeFee.toFixed(2) + " euros." + "<br />"+
						"Customer needs to pay " + customerHasToPay.toFixed(2) + " euros.";
	
document.getElementById("answer").innerHTML = outputText;		
} var officeFee = 15.90; // doctors office fee is always 15.90 euros.