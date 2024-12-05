/*
    while loop and do while loop 
*/

// while loop 
let index = 0
while(index < 10){
  //console.log(`value of index:- ${index}`);
  index++;// index = index + 1;
}

// do while loop
let value = 0;
do{
   //console.log(value);
   value = value + 2;
}while(value < 10);

// what if the value is 10 
// do while will always execute once even if the condition is false 
// because it's the condition after the execution of the business logic
value = 10;
do{
   console.log(value);
   value = value + 2;
}while(value < 10);