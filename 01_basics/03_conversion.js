// Datatypes Conversion in JavaScript 

/*
   # To convert any value from one datatype into another datatype
     
     Javascript has the global pre-defined function/methods

     Number(operand); => convert any value datatype to number datatype 
     String(operand); => convert any value datatype to string datatype
     Boolean(operand); => convert any value datatype to boolean datatype

*/

let score = 33;
console.log(score + " datatype of score is => " + typeof score); // 33 datatype of score is => number

// convert the score = 33 datatype from number to string 
let converted = String(score);
console.log(converted + " datatype of score is => " + typeof converted); // 33 datatype of score is => string

// string to number
let str = "33";
console.log(str + " datatype of str is => " + typeof str); // "33" datatype of score is => string

// convert str from string to number
 converted = Number(str);
 console.log(converted + " datatype of converted is => " + typeof converted); // 33 datatype of score is => number

 /*
    # Now there is catch what if the string is "33abc" instead of "33"
      See the below example
 */

    str = "33abc";
    console.log(str);// 33abc
    console.log(typeof str);// string

// convert this str = "33abc" string into number

    converted = Number(str);
    console.log(converted);// NaN (Not a number)
    console.log(typeof converted); // number

// SOME CATCH's IN JAVASCRIPT
/*
    # Now this is the catch what if the string is "33abc" instead of "33"
      from above example

    The value of converted string "33abc" came as NaN Not a Number but the typeof converted value will be number only
    when you converted the "33abc" into a number this is error you can say or draw back of Javascript 
    therefore many people prefer typescript over javascript
    
    about NaN
    NaN is Not a Number

    if the value of the operand is not a number that time JS return NaN
*/

/*
    # Boolean conversion 
      In Boolean 1 = true and 0 = false
*/

   let flag = true;
   console.log(flag);// true
   console.log(typeof flag);// boolean

   // convert the boolean type flag = true to number 
   converted = Number(flag);
   console.log(converted); // true 
   console.log(typeof converted);// number

/*
   # We Know that 1 = true and 0 = false in boolean 
     but what if there is string "sachin" try to convert this string into a boolean
     and at second time try to convert "" empty string to boolean 
     see what the results came 

     see the below example
*/

let name = "sachin";
console.log(name); // sachin
console.log(typeof name);// string 

// convert the name datatype string to datatype boolean
converted = Boolean(name);
console.log(converted); // true 
console.log(typeof converted); // Boolean

name = "";
console.log(name); // empty string 
console.log(typeof name);// string 

// convert the name datatype string to datatype boolean
converted = Boolean(name);
console.log(converted); // false 
console.log(typeof converted); // Boolean

/*
   # We Know that 1 = true and 0 = false in boolean 
     but what if there is string "sachin" try to convert this string into a boolean
     and at second time try to convert "" empty string to boolean 
     see what the results came 

   # From above example when string "sachin" is converted to boolean its value is true 
     and datatype is boolean but when any empty string " " is converted to boolean its 
     value is false and datatype is boolean 
       
*/

/*
    # Convert any number into boolean and also convert nummber 0 specifically to boolean  
      see below example
*/

let num = 1233432;
converted = Boolean(num); 
console.log(converted);// true 

num = 0;
converted = Boolean(num);
console.log(converted);// false

/*
    # Convert any number into boolean and also convert nummber 0 specifically to boolean  
      from above example 
      
      NOTE => 
      Any number 123,12331,3333 etc are consider as true when converted to boolean 
      except zero 0, only 0 is consider as false when converted to boolean 
*/