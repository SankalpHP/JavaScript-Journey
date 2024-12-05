// DataTypes in javascript 

// There are two types of datatypes in JS
// primitive and objects

let name = "sunny"; // datatype of name is string 
let age = 18; // datatypes of age is number 
let age_more_18 = true; // datatypes of age_more_18 is boolean
let pass = null; // datatype of null is null
let state; // datatype of state is undefined


/*
   # primitive data types are 
   
   number => range is ±(2-1074 to 21024) for postive/negative number 
   bigInteger => number is greater than a range of ±(2-1074 to 21024) then it is consider a bigInt
   string => Any between double quotes "abc" consider as string 
   boolean => true or false
   
   # objects
     null => null datatype is object in JS 

   # undefined
     undefined => state variable is just declared but not assigned to any value i.e state is undefined
                  therefore its's datatype is undefined
            
   # Bonus datatypes
   symbol => use to find the unique values
             mostly used in react applications         
*/

/*
    # typeof operator
      typeof operator return's the string that represents the type of Javascript for a given value
      It return's the datatype of the operand in the form of a string 
      The operand can be a literal or a data structure like a function, an object or a variable 
      
      syntax =>     typeof operand
                        or
                    typeof(operand)     
*/

console.log(typeof name); // string 
console.log(typeof age); // number
console.log(typeof age_more_18); // boolean
console.log(typeof pass); // object
console.log(typeof state); // undefined
