
function play() {
	var returnedpay;
	var bet = Number(document.getElementById("bet").value);
	var pips = Math.round( (Math.random( ) * 5) + 1 );
	
	if (pips == 2 || pips == 4){
		returnedpay = "Pips was " + pips + " - " + "Paid Back: " + (bet*1.25);
	}else if(pips == 1 || pips == 3 || pips == 5){
		returnedpay = "Pips was " + pips + " - " + "no pay";
	}else{
		returnedpay = "Pips was " + pips + " - " + "Paid Back: " + (bet*1.5);
	}
	document.getElementById("answer").innerHTML = returnedpay;

}