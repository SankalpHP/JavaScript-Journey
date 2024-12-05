/*
   # reduce()

     reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
              in order, passing in the return value from the calculation on the preceding element. 
              The final result of running the reducer across all elements of the array is a single value.

              The first time that the callback is run there is no "return value of the previous calculation". 
              If supplied, an initial value may be used in its place. 
              Otherwise the array element at index 0 is used as the initial value and 
              iteration starts from the next element (index 1 instead of index 0).

     reduce() method takes call back function as a argument which has two parameter 
              i.e accumulator and currentValue.
              
               accumlator:- accumlator takes the initally value if any provided by the programmer

              currentVaue:- currentValue if the inital value is provide then initally the currentValue 
                            is consider from the array index 0 
                            
    syntax:- 
             // implicity return reduce() because of no {} curly braces automatically it return's the value

                array.reduce((accumulator,currentValue)=>return accumulator + currentValue;),initialvalue; 

             // explicity return reduce() because of {} curly braces explicity return requires

                array.reduce((accumulator,currentValue)=>{
                    return accumulator + currentValue;
                }),initialvalue; 

    NOTE:- Always provide the initila value it's a good practice            
*/    

let myArray = [10,20,30,40,50,60];

// providing the inital value = 0 and explicity return because of {} curely braces
let result = myArray.reduce((accumlator,currentValue)=>{
   return accumlator + currentValue;
},0);

console.log(result);

// not providing the inital value and implicity return because of no {} curely braces
result = myArray.reduce((accumlator,currentValue)=> accumlator+currentValue);
console.log(result);

/*
    # How it Works

       initally the accumlator value is 0 because inital value = 0 provided and 
       the currentValue is value at array index 0 i.e 10 
       
       1) first iteration
            accumlator + currentValue 
                0      +     10
                       10
        
       2) second iteration
            accumlator + currentValue 
                10     +     20
                      30            
        
       3) third iteration
            accumlator + currentValue 
                30     +     30
                      60   
                       
       4) fourth iteration
            accumlator + currentValue 
                60     +     40
                      100     
                      
       5) fifty iteration
            accumlator + currentValue 
                100    +     50
                      150  
                      
       6) sixth iteration
            accumlator + currentValue 
                150    +     60
                      210                
*/