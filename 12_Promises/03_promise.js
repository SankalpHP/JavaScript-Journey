/*
    Previously we saw that to consume the promises we use .then() method
    But Many Developer use async and await function also
    yes using async and await you can consume the promises
    But the async and await lack in one thing that it is in catch the error
    so to catch the error we have to use try catch block inside it
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

// async function consume() => make the consume() function asynchronous 
async function consume(){
    try {
        //  await promise; => await until the promise is completed after completional save the result in response variable
        let response =  await promise;
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}
consume();