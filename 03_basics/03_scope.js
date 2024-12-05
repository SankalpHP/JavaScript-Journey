/*
   # Scopes is the concept in all languages including javascript
     Scope is decided based on the code block 
     {} => this is a code block 
     
     MOST IMPORTANT {} => code block and object block {} both are different
                    {} => In object it is a syntax part 
                    {} => considered as a code block when using with function,control flow statement

   # In JS only let and const types of variables support the scopeing                  
     var does't not that's why var is recommended to use in 2024
     as I know about the var problem so use only let and const
*/

// this num1 and num2 has global scope it can be accessable to anywhere through out the whole program
let num1 = 400;
let num2 = 600;
let num3 = 1200;

if(true){

  // The num1 and num2 has local scope to this if statement only, you can't access num1 and num3 outside
  // this if statement. num1 and num2 inside if is total different to num1 and num2 outside the if 
  // as the names of the gobal and local variables is same num1 and num2 
  // first the execution controller watch whether this num1 and num2 is locally avaiable if yes 
  // then the first priority is local variable if we comment the num1 and num2 inside the if 
  // execution controller will consider the outside globale variable  

  let num1 = 800;
  let num2 = 1000;
  console.log("Inner num1: " + num1);
  console.log("Inner num2: " + num2);

  // num3 has the global scope therefore it is avaiable to access inside this if statement 
  // as global scope variables can be access through out the program
  console.log("outer num3 access to inner if: " + num3);

  let num4 = 1500;
}

console.log(num1);
console.log(num2);

// This line will through the error as the num4 has the local scope inside the if statement 
// you can't access num4 outside the code block of if statement
// console.log(num4);// num4 is not defined
