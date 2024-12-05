/*
   # There are some of the loops in javascript that are specifically design to iterate over the arrays,string,object 
     such one of the loop is for in loop

     for of loop 

     syntax:- for(const iterator in arr/string/object){

              }

     No need to give the terminating condition initizalation condition and increment condition 
     all the condition are manage by the JS implicity  
*/

// for in on array
let myArray = ["flash","batman","superman"];

// for (const key in myArray) {
//     // print keys
//     console.log(key); // 0,1,2
// }

for (const key in myArray) {
    // print the values of the key 
    //console.log(myArray[key]); // flash,batman,superman
}

let framwork = {
    JAVA:"Spring Boot",
    JS:"Node js",
    PYTHON:"Django",
};

// for in on object
for (const key in framwork) {
    // print the values of the key in object
    console.log(framwork[key]);
}

let greetings = "Hello Good Morning";

// for in on string
for(const key in greetings){
   // print the values of the key in string
   console.log(greetings[key]);
}

// try for in with map object
let map = new Map();
map.set("IN","India");
map.set("FRA","France");
map.set("USA","United States Of America");
map.set("IN","India"); // this will be avoided by map because "IN" is duplicate key

// its printing nothing because map objects are not iterable by for in loop use for of only to iterate map object 
// for(const key in map){
//    console.log(map[key]);
// }