/*
    # this and arrow functions 

      To arrow functions we have to first learn the concept of this and to learn this we have to 
      go back to object 

    #  What this is actually do?
    => this actually gives the current context means current variable and their values inside the object 
       here in below example this are giving the current context of object user 
       To access the username inside the function expression you have to access the current context of
       user object and i.e is only get by keyword this 
*/

let user = {
    username:"Sankalp",
    price:999,

    welcomeMessage:function(){
          console.log(`${this.username}, Welcome to Website`);
          /* you cannot access the username without the current context of object user and 
            current context will get by this keyword */
        //console.log(`${username}, Welcome to Website`);// username is not defined

        console.log(this);// print's the current context
    }
};

// user.welcomeMessage();
// user.username = "Rachin"; // here we are changing the user object context means change current variable values or properties
// user.welcomeMessage();

// MOST IMPORTANT Tricky Part 
/* When you try to get current global context it will give you the empty object but this happen's only in 
   node js enviroment Now the problem is when you try to print current global context in browser it will 
   give's the window object of the browser */
//console.log(this);// empty object

/*
      this keyword in function's
      there is myth that this is not avaiable in arrow function, function expression where as it avaiable in regular function
      busted the myth now
*/

// this keyword in regular function 
function chai(){
    let username = "Sankalp";
    //console.log(this); // Give large amount of some data
    // now in next
    console.log(this.username);// undefined
}

chai();

// this keyword in function expression
function coffee(){
    let username = "Sankalp";
    console.log(this); // Give large amount of some data
    console.log(this.username);// undefined
}

//coffee();

// this keyword in arrow function 
let greentea = ()=>{
    let username = "Sankalp";
    console.log(this);// give's empty object 
    console.log(this.username);// undefine
};

greentea();

/*
    # 
    MOST IMPORTANT IN TERM OF this keyword
        
        So this keyword with function's will not work 
        this keyword is only work's with object's in javascript 
        this keyword give's the current context of the object and this does not work's with the function
*/

// Pure arrow function
/* An arrow function expression is a compact alternative to a traditional function expression, 
   with some semantic differences and deliberate limitations in usage: or you can say update 
   version the function expression */

// traditional function expression
let juiceOne = function (fruit){
    console.log(`${fruit}, juice is sweet!`);
}
//juiceOne("sugarcane");

// arrow function
let juiceTwo = (fruit) => {
    return `${fruit}, juice is sweet!`;
};

console.log(juiceTwo("sugarcane"));

// arrow implicity function => means without return keyword it will return value
let code = () => "Code in JavaScript!";
console.log(code());

// arrow implicity function => means without return keyword it will return value
let book = () => ("Read book of JavaScript!");
console.log(book());

// arrow explicity function => means require return keyword to return a value
let cycle = () => {
    return "Hero Cycle's";
};

console.log(cycle());

/*
    MOST IMPORTANT:- 
                     If the {} are present in arrow function then it require the explicity 
                     return to return a value. 

                     If the {} are not present in arrow function then it implicity return 
                     the value without return keyword.

                     ALL info are avaiable on mdn doc
*/

// return the object from the arrow function 
let return_object = () => ({firstName:"Sankalp",lastName:"Selokar"});
console.log(return_object());