/*
     # IIFE => Immediately Invoked Function Expression

     Immediately Invoked Function Expression is used to execute the function immediately as soon as it is define
     or declared.
     
    # Why is use it 
    => Avoid polluting the global namespace.Because our application could include many functions and 
        global variables from different source files, it's important to limit the number of global variables. 
        If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
        As we will not reuse the code again, using IIFE in this case is better than using a function declaration or 
        a function expression.     
*/

// IIFE using arrow function
(()=>{
  console.log("IIFE => Immediately Invoked Function Expression without name");
})();

// IIFE using normal function and also having the name to a IIFE function
(function chai(){
  console.log("IIFE => Immediately Invoked Function Expression name");
})();

// IIFE arrow function with parameter 
((name)=>{
  console.log(`IIFE => Immediately Invoked Function Expression with parameter ${name}`);
})("Sankalp");

/* 
  syntax   =>   ()();      
                (function define or declare)(function agrument and call);
                ; => complusory because it tell's function where to stop execution
*/