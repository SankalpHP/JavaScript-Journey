/*
    fetch() 

    fetch() is the method which use to call api in modern times of javascript

    fetch() method return the promise's previously we are creating the promise
    but here promise's are created behind the seen for us, we just have to consume it 
*/ 

// consume fetch() return promise using then() method
// fetch("https://api.restful-api.dev/objects")
// .then((response)=>{return response.json()})
// .then((Newresponse)=>{ console.log(Newresponse);})
// .catch((error)=>{console.log(error);})
// .finally(()=>console.log("Operation is completed"));

// consume fetch() return promise using asyns and await

async function getdata(){
    try {
        let response = await fetch("https://api.restful-api.dev/objects");
        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getdata(); 