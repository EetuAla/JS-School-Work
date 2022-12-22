function processName() {
 
   var name = document.getElementById("name").value;

   var AllCapsName = name.toUpperCase();
   var SmallName = name.toLowerCase(); 
   var NameLenght = name.length;
   

   document.getElementById("upperCase").innerHTML = "With upper case letters: " + AllCapsName;
   document.getElementById("lowerCase").innerHTML = "With lower case letters: " + SmallName;
   document.getElementById("length").innerHTML = "Character count: " + NameLenght;
   
}