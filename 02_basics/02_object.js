/*
   # Objects in javascript 

   # Objects in javascripts can be declared by two way 
      # 1st object constructor
      # 2nd object literals

      # objects that are create by 1st object contructor method are singleton objects
      # Object.create() => method use to create a object using object contructor

      # object created by object literals are not a singleton object
      # let obj = {
                      key:value,
                      key:value,
                      key:value
                  }
      
      # object contain values in the form of key:value pair
      # now create a object using literals later on we will see the object contructor and singleton object            
*/

// create object using object literals
let person = {
    firstName:"Sankalp", // internal JS will consider firstName:"sankalp" as a "firstName":"Sankalp"
    lastName:"Selokar",
    profession:"Software Developer",
    company:"chatgpt",
    "Address":"pune" // This is a internal representation of the key:value do not use this way it is just for understanding
}

// # how to access the values of the object person 

// 1st way using . dot operator => most of the time you will this way only 
console.log(`${person.firstName} ${person.lastName}`);
// 2nd way
console.log(person["profession"]);
console.log(person["Address"]);

// # Change the values of the key inside a object person 
person.company = "xbox";

console.log(person.company);

// Name of the object will print full defination of the person object
console.log(person);

// # Can ALSO add the function inside a object
person.greeting = function(){
    console.log("Hello Good Morning");
};

console.log(person.greeting());

person.greetingtwo = function(){
   // this key word is use to acces the properties of the current object. here current object is person 
   console.log(`Hello ${this.firstName} Good Morning`);
};

console.log(person.greetingtwo());

// # INTERVIEW QUESTION
//   Create a properties ob type symbol and use it as key inside a object 

let sym = Symbol();

let person2 = {
    firstName : "glenn",
    lastName : "maxwell",
    team: "austrila",
    [sym]: "kangaroo" // [] to use symbol datatype as a key in object
}

console.log(person2[sym]); // This is only way to access the symbol as key inside a object 