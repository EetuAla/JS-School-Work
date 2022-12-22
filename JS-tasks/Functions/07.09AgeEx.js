function tellAge() {
   var BirthYear = Number(document.getElementById("yearOfBirth").value);
 
    var today = new Date();
    var YearATM = today.getFullYear();
    var age = YearATM - BirthYear;

    var outputText;
    if (age < 0){
        outputText = "Persons is not yet born.";
    }else{
        outputText = "You are now " + age + " years old."
    }
    document.getElementById("answer").innerHTML = outputText + "<br />" + "(Current year is " + YearATM + ".)";    
}