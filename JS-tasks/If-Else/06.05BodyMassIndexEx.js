function calculateBMI() {
  var outputtext;

  var Height = Number(document.getElementById("height").value);
  var Weight = Number(document.getElementById("weight").value);
  var BMI = Weight / (Height/100.0 * Height/100.0);
  
  if (BMI <= 18.4){
    outputtext = "Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Weight less than normal weight)";
  }else if (BMI >= 18.5 && BMI <= 24.9){
    outputtext = "Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Normal weight)";
  }else {
    outputtext = "Body Mass Index (BMI) is "+BMI.toFixed(2)+" (Overweight)";
  }
  document.getElementById("answer").innerHTML = outputtext;
}
