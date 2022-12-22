// Create an array with minigolf results of eight players 
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    
   minigolf.sort()
   var smallest = minigolf[0];
   var biggest = minigolf[minigolf.length - 1];

   document.getElementById("answer").innerHTML = 
   "The smallest result is " + smallest + " (winner)." + "<br />" + "The biggest result is " + biggest + ".";

}
