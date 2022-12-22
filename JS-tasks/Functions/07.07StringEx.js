function processName() {
        var name = document.getElementById("name").value;
     
        var AllCapsName = name.toUpperCase();
        var SmallName = name.toLowerCase(); 
        var NameLenght = name.length;
        var MuumiTrue = name.indexOf("muumi");
            if (MuumiTrue == -1){
                MuumiTrue = "Doesn't contain the text muumi.";
            }else {
                MuumiTrue = "Does contain the text muumi.";
            }
        var firstCharacter = name.charAt(0);
        var threeFirstLetters = name.substr(0, 3);
        
     
        document.getElementById("upperCase").innerHTML = "With upper case letters: " + AllCapsName;
        document.getElementById("lowerCase").innerHTML = "With lower case letters: " + SmallName;
        document.getElementById("length").innerHTML = "Character count: " + NameLenght;
        document.getElementById("contains").innerHTML = MuumiTrue;
        document.getElementById("firstCharacter").innerHTML = "First character: " + firstCharacter;
        document.getElementById("manyCharacters").innerHTML = "First three characters: " + threeFirstLetters;
}