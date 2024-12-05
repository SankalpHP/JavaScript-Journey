/*
     For loops 
     loops are generally used to iterate over a array,object,string
     In JS we have other many loops to print the array,object but for loop 
     is the basic one 

     syntax:-   for(statement1,statement2,statement4){
                     statement3
                }
     
                for(initialized,terminating condition,increment condition/value){
                     business logic
                }

                statement1 :- which is a initialization will executed only one time at start only 
                              after that statement1 will never be executed
                statement2 :- check's the condition if the condition is true execute the statement 
                              inside the for loop block 
                statement3 :- if statement2 is true execute the statement3 inside a block
                statement4 :- increment the initial value and check the condition in statement2
                statement2 :- if statment 2 is true again execute the statement3 inside a block

                continue the flow until the statement2 condition is false
*/

let myarray = [1,2,3,5,6,7,8,9,10];

for(let index = 0; index < myarray.length; index++){
    let element = myarray[index];
    //console.log(element);
}

//console.log(element);// element not define because block scope of element is inside the scope only 
                     // cannot access the element outside the it's block scope:- block closure concept

// nested loops 
/*
    nested loops are generally used of multi dimensional array or a object
*/                     

let multiArray = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

    for (let i = 0; i < multiArray.length; i++) {
        const element = multiArray[i];
        //console.log(element);
        for (let j = 0; j < multiArray[i].length; j++) {
            const element = multiArray[i][j];
            //console.log(element);
        }
        
    }

// working of the nested loops and if statements
// for 1 iteration of outer loop the inner loop will iterates 10 times.
// if j == 5 then "yes j is 5" will be printed

for (let i = 0; i < 10; i++) {
      //console.log(`outer loop = ${i}`);
     for (let j = 0; j < 10; j++) {
        if(j == 5){
        //console.log("yes j is 5");
        }
        //console.log(`for one iteration of outer loop ${i} inner loops iterates ${j}`);
     }
}

// break and continue
/*
     break :- break the execution of code and comes out of the statement
              
     continue :- continue the execution of code 
*/

//  if index == 5 break's the loop and come out the loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        //console.log("detected 5");
        break;
    }
    //console.log(element);
}

// if index == 5 continue the loop execution controller goes to statement4 i.e index++ incremental condition
for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        console.log("detected 5");
        continue;
    }
    console.log(element);
}
