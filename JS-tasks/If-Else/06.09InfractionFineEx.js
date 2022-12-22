function tellInfractionFine() {
		var speedlimit = Number(document.getElementById("speedLimit").value);
		var Dspeed = Number(document.getElementById("drivingSpeed").value);

		var infraction;
		if (Dspeed <= speedlimit){
			infraction = "No speeding, no fine.";
		}else if (Dspeed > (speedlimit+20)){
			infraction = "Income-based unit fine.";
		}else if (speedlimit <= 60 && Dspeed >= (speedlimit+15)){
			infraction = "Infraction fine is 115 euros.";
		}else if (speedlimit <= 60 && Dspeed >= (speedlimit+5)){
			infraction = "Infraction fine is 85 euros.";
		}else if (speedlimit >= 70 && Dspeed >= (speedlimit+15)){
			infraction = "Infraction fine is 100 euros.";
		}else if (speedlimit >= 70 && Dspeed >= (speedlimit+5)){
			infraction = "Infraction fine is 70 euros.";
		}

		document.getElementById("answer").innerHTML = infraction;
}


         
