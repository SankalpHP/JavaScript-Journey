/*
    Promises 

    As the word is promise it simply means I am promising something 
    In JS promise object represent the eventual completion or failure of an asynchronous operation 
    and its resulting value. In simple word I'm promising the some operation whether it is fail or 
    sucessfully I will return you the result. 
*/

// creating the promise object

let mypromise = new Promise((resolve,reject)=>{

      let error = false;

      if(!error){
        resolve("The operation is sucessfully completed!");
      }else{
        reject("The operation is failed");
      }
});

// cosumeing the promise

mypromise.then(
    // resolve() function value cosume and get by this (value) function
   (value)=>{console.log(value);},
   // reject() function value cosume and get by this (error) function
   (error)=>{console.log(error);}
);

// short hand syntax of promise

new Promise((resolve,reject)=>{
    let x = 1;

    if(x != 0){
       resolve("operation sucessfully completed!")
    }else{
        reject("operation failed!");
    }
}).then(
    function(value){console.log(value);},
    function(error){console.log(error);}
);
