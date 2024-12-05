/*
    promise provides the catch and finally 
    also the chaining of the then method which is called as thenable's

    below is the example of it 
*/ 

// creating the promise
let promise = new Promise((resolve,reject)=>{
    let x = 0;

    if(x != 0){
       resolve("operation sucessfully completed!")
    }else{
        reject("operation failed!");
    }
});

// consuming the promise
promise
.then((value)=>{return value})
.then((newValue)=> console.log("new Value comes from the value = " + newValue))
.catch((error)=>console.log("Error Catch in Catch Block = " + error))
.finally(()=>console.log("The operation is completed! no matter whether it is failed or success"));

/*
    .then() => use to fetch the resolve,reject method's.
    .catch() => use to catch the error.
    .finally() => by default it is always be execute no matter's the operation is failed or success.
*/ 