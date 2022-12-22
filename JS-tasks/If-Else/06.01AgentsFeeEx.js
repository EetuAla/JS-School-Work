function calculateFee() {
		
	var Price = Number(document.getElementById("price").value);
	var rFee = Price * 0.0344;
	let minimumF = 2400;

	if	(rFee < 2400) {
		outputtext = "Real state agent's fee is 2400.00 euros";
	} else {
		outputtext = "Real state agent's fee is " + rFee.toFixed(2) + " euros";
	}
	document.getElementById("fee").innerHTML = outputtext;
			
}