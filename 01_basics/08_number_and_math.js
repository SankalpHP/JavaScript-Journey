/*
   Learn About numbers and Math object in javascript
*/

// # numbers 

// Dynamically JS determine the type as a number what's if we want to explicity define the type see next example
let score = 400;
console.log(score);

// To define type number explicity 
// create a new object of type number using wrapper classes
let marks = new Number(600);
console.log(marks);

/*
    # Object of type number have various properties has various important pre-defined or inbuilt methods 
      that are extensivly used in real world project 
    # some of the important methods are used below  
*/

// toString()
// converts the number into a string 
// so now we have the access to string methods also 
console.log(marks.toString());

// toFixed()
// define a number of digit must be there after the decimal point
console.log(marks.toFixed(2));// 600.00

// toPrecision()
// return the precisied value depending on the number pass as a argument
let preNum = 4516.8393003
console.log(preNum.toPrecision(6));

//++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    # Math is a Object that has various pre-defined or inbuilt methods
    # see some of the important methods of Math object
*/
console.log(Math);

// abs() => absolute convert any negative value into positive value
console.log(Math.abs(-3));// 3

 // round() -> round of any decimal value 
 console.log(Math.round(4.4)); // if the number after decimal point is smaller than 5 than the refer the floor value 
 console.log(Math.round(4.8)); // if the number after decimal point is greater than 5 than the refer the ceil value 
 
 // What in round off I want only the floor value means if there is 4.7 still instead of 5 I want 4 
 // for that floor() function is used
 console.log(Math.floor(4.7));// 4

 // What in round off I want only the ceil value means if there is 4.2 still instead of 4 I want 5 
 // for that ceil() function is used
 console.log(Math.ceil(4.7));// 5

 // find the min and max value in the array
 // min() => method return the min value
 console.log(Math.min(4,3,2,5,8));// 2
 // max() => method return the max value
 console.log(Math.max(4,3,2,5,8));// 8

 // random() => method generates the random number by default between 0 to 1
 console.log(Math.random());

 // What if I have to generate random number between 0 to 10 
 // remember this formula
 console.log(Math.random()*10);

 // What if I have to generate random number between 1 to 10
 // remenber this formula
 console.log((Math.random()*10)+1);

 // What if I have to generate random number 
 // I have min = 10 & max = 20
 let min = 10;
 let max = 20;

 console.log((Math.random()*(max - min + 1)));

 // In Many cases we want the min value so use Math.floor()
 console.log(Math.floor(Math.random()*(max - min + 1))+min);

