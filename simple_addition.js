//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 


function SimpleAdding(num) { 

  // code goes here  
  
    
  
    var result = 0;
  
    if (num === 0){
  
        result = 0;
        
        return result;
  
    }
  
  
    else {
  
        for (i = num; i >0; i--){
  
            result = result + i;
        }

        return result; 
        
     }
}

SimpleAdding(5);
   
// keep this function call here 


                    
