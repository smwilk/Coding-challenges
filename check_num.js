//this function compares two numbers and returns true if the first entry is larger than the second, and false if other way around

function CheckNums(num1,num2) { 

var trueOrFalse = "";

  if (num1 > num2){
      trueOrFalse = "true";
  }

  else if (num1 === num2){
      trueOrFalse = "-1";
  }
  
  else {
      trueOrFalse = "false";
  }
      
  return trueOrFalse;
         
}
   
// keep this function call here 
CheckNums(4.5);                            
