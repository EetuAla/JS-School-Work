function comparePackages() {
	
	var TM = Number(document.getElementById("textMessages").value);
	var PC = Number(document.getElementById("callTime").value);
	var SP = 19.90 + (TM*0.069) + (PC*0.069);
	const AIP = 29.90;
		
	if (SP < AIP){
		outputtext = "The Special package "+"("+SP.toFixed(2)+")"+ " is cheaper than the All-inclusive package "+"(" + AIP.toFixed(2)+")";
	} else {
		outputtext = "The All-inclusive package "+"("+AIP.toFixed(2)+")"+" is cheaper than the Special package "+"(" + SP.toFixed(2)+")";
	}
	document.getElementById("answer").innerHTML = outputtext;	
		
}