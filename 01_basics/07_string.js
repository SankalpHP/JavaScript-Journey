/*
    # Strings 

      strings are the most important part of any programming language 
      strings have any inbuild/pre-methods or functions
*/

// first way to declare string 
let Fname = "Sankalp";
let Lname = "Selokar";

// This is the old way to concat or add two string
// This is outdated don't used this synatx 
console.log(Fname + " " + Lname);

// New Morden Way to add strings
// always use this syntax in morden times
 console.log(`my first name is ${Fname} and my last name is ${Lname}`);

// using wapper classes string objects can declared
// This is string object 
// new keyword is used to create a object of wrapper class String()
// always remember its not the array its a object 
let name = new String("Sankalp");
console.log(name);

/*
   # String contains various important pre-defined methods or functions 
     let's see some of them
     you can search in detail on mdn 
*/

// These are the some important string method 
// All this methods will retunr the new string but not change or affect the existng original string 
// because in last stack and heap concept we learn about in stack a copy or the replica is created of original value
let country = "   aMerIca   ";
// toUpperCase
 console.log(country.toUpperCase());
// toLowerCase
 console.log(country.toLocaleLowerCase()); 
// trim
console.log(country.trim());
// substring 
console.log(country.substring(3,5));
// chartAt
console.log(country.charAt(5));
// split
let str = "The quick brown fox jumps over the lazy dog.";
let words = str.split(' ');
console.log(words[3]);
// replace 
let paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's","my"));
// slice 
console.log(str.slice(31));
console.log(str.slice(4,19));