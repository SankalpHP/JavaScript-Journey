/*
   # There are some of the loops in javascript that are specifically design to iterate over the arrays,string,object 
     such one of the loop is for of loop

     for of loop 

     syntax:- for(const iterator of arr/string/object){

              }

     No need to give the terminating condition initizalation condition and increment condition 
     all the condition are manage by the JS implicity         

*/

// for of on array
let myArray = ["flash","batman","superman"];
for (const key of myArray) {
   // console.log(key);
}

// for of on strings
let greetings = "Hello World";
for (const greet of greetings) {
   // console.log(greet);
}

// map
/*
   map object in js stores the collection of key and values in pairs 
   duplicate keys are not allow in map 
   map object are iterable by for of loops 
   map gives the output in a simple straight order
*/

let map = new Map();
map.set("IN","India");
map.set("FRA","France");
map.set("USA","United States Of America");
map.set("IN","India"); // this will be avoided by map because "IN" is duplicate key

console.log(map);

// map iterating using for of [key,value] is the syntax for for of when iterating on map
for (const [key,value] of map) {
    console.log(`key ${key} value:- ${value}`);
}

// try the for of on the regular objects
// let framwork = {
//      "JAVA":"Spring Boot",
//      "JS":"Node js",
//      "PYTHON":"Django",
// };

let framwork = {
    JAVA:"Spring Boot",
    JS:"Node js",
    PYTHON:"Django",
};

// for (const key of framwork) { // framwork is not iterable
//     console.log(framwork);
// }

/*  above example
    NOTE:- framwork is not iterable because it is regular object and 
           only map object is iterable by for of loop regular object are not iteratable by the for of loop
*/