//Using the JavaScript language, have the function  FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 


function FirstReverse(str) { 
	var text = str.split("");
	var newArray = []; 
	var n = str.length;
   
   
   for (i = n -1; i > -1; i--){
   newArray.push(text[i]); 
         
}
return newArray;
console.log(newArray);
}


   
// keep this function call here 
FirstReverse("Stephenie"); 