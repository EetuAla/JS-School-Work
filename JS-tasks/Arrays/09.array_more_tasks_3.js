function insertValue() {
    var insertedName = document.getElementById("name").value;
    var insertedAge = Number(document.getElementById("age").value);
    Name.push(insertedName);        // Adds a new element to the end of the array
    Age.push(insertedAge);
    members++;
    document.getElementById("age").value = "";
    document.getElementById("name").value = "";
    showArray();
}
function showMinors(){
    document.getElementById("2divOutput").value = "";
    var minorText = ""
    for (var index = 0; index < Age.length; index++){
            if (Age[index] < 18){
                minorText += Name[index] + ", " + Age[index] + " years" + "<br />";
        }
        document.getElementById("2divOutput").innerHTML = minorText;
        }
        
    }
function showAdults(){
    document.getElementById("2divOutput").value = "";
    var adultText = ""
    for (var j = 0; j < Age.length; j++){
        if (Age[j] >= 18){
            adultText += Name[j] + ", " + Age[j] + " years" + "<br />";
        }
        document.getElementById("2divOutput").innerHTML = adultText;
    }
}
function showOldest(){
    document.getElementById("2divOutput").value = "";
    var oldestText = "";
    var max = Math.max.apply(Math, Age);
    for (var o = 0; o < Age.length; o++){ // o = oldest member
        if (Age[o] == max)
            oldestText += Name[o] + ", " + max + " years" + "<br />";
        }
    document.getElementById("2divOutput").innerHTML = oldestText;
    }

function showYoungest(){
    document.getElementById("2divOutput").value = "";
    var youngestText = "";
    var min = Math.min.apply(Math, Age);
    for (var y = 0; y < Age.length; y++){ // y = youngest member
        if (Age[y] == min)
            youngestText += Name[y] + ", " + min + " years" + "<br />";
    }
     document.getElementById("2divOutput").innerHTML = youngestText;
    }

    

// Loads when the page is loaded
function showArray() {

    var outputText = members + " members";
    
    document.getElementById("divOutput").innerHTML = outputText;
}

// This empty array is created when the HTML page is loaded
var Name = []; 
var Age = [];    
var members = 0;
showArray();
