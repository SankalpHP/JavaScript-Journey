/*
   # Functions with object's and array's
*/

// consider user have a shopping cart. In the shopping cart user start adding item's
// but here you don't know how many item's the user can add may be it 1 or more 
// In such case you don't know how many parameter does the function will take
// for such case's we use ... spread or rest operator
// ... this operator is called as spread as well as rest operator depending on the use case 

// here ... operatot is called as rest operator 
function shoppingcart(...items){
  return items; // returns the array of the items
}

let shoppinglist  = shoppingcart("car","pen","compass","toy");
console.log(shoppinglist);

// Passing the object to the function 
let movie = {
    title:"No Time To Die",
    category:"action",
    actor:"Daniel Craig"
};

function movies(movieObj){
   console.log(`The name of movie ${movieObj.title} and actor ${movieObj.actor}`);
}

movies(movie);


// passing the array to the function
let languages = ["JAVA","PYTHON","RUBY","C++","JS"];

function typeoflanguages(languagesArray){
  console.log(languagesArray.toString())
}

typeoflanguages(languages);

/*
   # Some the advance function's in JS in just a short here later the details notes will be there 

        until now we have return the normal regular function's but JS provides some of the 
        advance or you can say more other types of functions
*/

// calling the regular function before the function is declared or defined because it support's hoisting
doing();

// This is a normal regular function
function doing(){
   console.log("do something");
}

// calling the function expression before the function is declared or defined is not allow because 
// function expression does not support's hoisting
// going("school"); // error => Cannot access 'going' before initialization

/* functions expression => A anonymous function that's is hold by a regular variable such a function is 
                           said to be a regular expression */
// function expression                           
let going = function(place){
  console.log(`Im going to ${place}`);
}

// always call the function expression after the declaration or defining because function expression does not support's hoisting
going("school");

/*
    #  What is difference between regular function and function expression?
    => 1) regular function has name where as function expression is anonymous it does not have any 
          name but it is called by the variable name where the function expression is assigned
       2) regular function support's hoisting means you can call the regular function before it is 
          initialized or declared where as the function expression does not support's hoisting
          means you can not call the function expression before it is initialized or declared    
*/

// # arrow function
/* 
   # An arrow function expression is a compact alternative to a traditional function expression,
     with some semantic differences and deliberate limitations in usage:
*/

// traditional function expression 
let traditional_function_expression = function(){
  console.log("This is traditional functional expression");
};

// arrow function expression 
let arrow_function_expression = (title)=>{
  console.log("This is " + title);
}

// same arrow function expression does not have any name and it can assign to a variable 
// and can call by the variable name, does not support hoisting means you cannot call arrow function expression 
// before the declaration 
arrow_function_expression("arrow function expression");

/*
   // Traditional anonymous function
      (function (a) {
        return a + 100;
      });

      // 1. Remove the word "function" and place arrow between the argument and opening body brace
      (a) => {
        return a + 100;
      };

      // 2. Remove the body braces and word "return" — the return is implied.
      (a) => a + 100;

      // 3. Remove the parameter parentheses
      a => a + 100;

  # NOTE:-1) Arrow functions don't have their own bindings to this, arguments, or super, 
             and should not be used as methods.
          2) Arrow functions cannot be used as constructors.Calling them with new throws a TypeError. 
          3) They also don't have access to the new.target keyword.
             Arrow functions cannot use yield within their body and cannot be created as generator functions.

    Read More about Arrow function on mdn documents           
*/

// callback functions
/*
    # callback functions => The function that takes another function as a argument are called as callback
                            functions 
                            Below are the examples

     callMe() function is a callback function because it is passes as argument to another function greet()                       
*/

// function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callMe() {
  console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

/*
    # In Morden time's we used arrow function as a call function's 
      see the below example
*/

function good(greeting){
  // executing the greeting() function which get's callback arrow function as argument
  console.log(`Good ${greeting()}`);
}

// passing the arrow function as a callback function directly to the good function
good(()=>{
  return "morning";
});