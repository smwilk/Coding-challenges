function LongestWord(sen) { 
    var wordArray = sen.split(' ');  
    var newArray = wordArray;
    var longWord = "";
    var lngth = 0;

    for (i = 0; i < newArray.length ; i++){
        if (newArray[i].length > lngth){
            lngth = newArray[i].length;
            longWord = newArray[i];
        }
    }
    return longWord;
}
        
// keep this function call here 
LongestWord("My name is cat");                            
