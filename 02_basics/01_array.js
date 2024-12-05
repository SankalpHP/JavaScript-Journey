/*
   # Array's in Javascript 
     
    # arrays in javascripts are resizedable their size are not fixed as to start adding the element's in it 
      it's sizes is increases and decreases accordingly 
    # arrays in javascript can stores that data of mix data types 
    # javascripts arrays create a shallow copies rather than the deep copies
    # typeof array is objects
*/

// javascript array can stores single datatypes values 
let num = [1,2,3,4,5,6,7,8,9];
// javascript array can stores single datatypes values 
let players = ["Rohit","Kohli","Dhoni","Sehwag"];
// javascript array can stores mix datatype data
let school = [1,2,4,5,6,7,"raman",true];

// types of array is object
console.log(typeof num);

// create the instance of array object 
let COD = new Array("price","hope","riley","hunter");

/*
   # Javascript have some of the unbulit methods or pre-defined methods
     # some of the methods create's the shallow copy of the that means both new array and original array 
       refer to the same object array if new array changes it's reflect to the original array also
     # some of the methods return's the new array but not mutate the original arrays
     # some of the methods mutate's the original array but not return any new array
     # some of the methods are questionable methods it's ouput will come in boolean value only 
       see some of the important javascript methods
*/

// push() => method adds the element at the end of the array & takes element as a argument
   num.push(10);
   console.log(num);

// pop() => method deleted the element present on the last index of the array & takes no argument
   num.pop()
   console.log(num);   

// unshift() => methods adds the element at start of the array & takes element as a argument 
   players.unshift("sachin");
   console.log(players);

// shift() => methods delete the element present at the starting index of the array & takes no argument
   players.shift();
   console.log(players);   

// slice() => methods that returns the new array from the original array depending on user starting index and end index
// It does not includes the value of the end index and does not mutate the original array
   console.log(players.slice(1,3));   
   console.log(players);

// splice() => methods that returns the new array from the original array depending on user starting index and end index
// It includes the value of the end index but it mutate's the original array also
   console.log(players.splice(1,3)); 
   console.log(players);

// questional methods output's in boolean
   console.log(COD.includes('hunter'));
   console.log(COD.indexOf('hunter'));
   console.log(Array.isArray(COD));

// toString() => method convert array into the string and return the string
   console.log(COD.toString());   

// concat() => merge the two array's and return the new array formed array 
   let result = COD.concat(school);
   console.log(result);

// ... => spread operator is generally used to merge two arrays its new also 
// what is spread just like when a glass fall's it get's spread same 
// instead of concat generally ... spread operator is used
let cars = ["volvo","bmw","audio","thar"];
let bikes = ["pulsar","honda","royal enfield","dominar"];
let automotive = [...cars,...bikes];
console.log(automotive);   

// join() => join the elements of the array depending on the commas values and returns new string of array elements
    console.log(COD.join());
    console.log(COD.join(''));
    console.log(COD.join('-'));   
    console.log(typeof(COD.join()));// string

// flat() => resolve's the depth of the array and return's the new array takes depth of array as argument
   let Num = [1,2,3,4,[5,6,7,[8,9,10],11,12],13,14];  
   // flat(3) because depth of Num array is 3  
   console.log(Num.flat(3));
   // you can also add infinity in cases there is too much depth in the array
   console.log(Num.flat(Infinity));

// find() => takes callback function as a argument based on the condition return's the first element that satisfies 
// the condition
const array1 = [5,12,8,130,44];
const found = array1.find((element)=>{
     return element > 44;
});   

console.log(found);

// Array.from() =>The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("Sachin"));

// Array.of() => static method creates a new array instance from a variable number of arguments, regardless of number 
// or type of the arguments 
console.log(Array.of('foo','bar',2000,true)); 

// reverse() => reverse() method reverse the array takes zero argument or parameters
console.log(COD.reverse());

// split() method of string values takes pattern and divides the string into an ordered list of substring by 
// searching for the pattern, puts these substrings into a array, and returns the array.

const str = 'The quick brown fox jumps over the lazy dog.';

// split(' ') => words 
const words = str.split(' ');
console.log(words[3]);

// split('') => char
const char = str.split('');
console.log(char[8]);

// split() => copy whole string
const strcopy = str.split();
console.log(strcopy);
