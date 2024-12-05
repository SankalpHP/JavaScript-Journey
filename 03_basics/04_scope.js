/*
   More about scope's
   Using nested functions and if statement we will understand the scope's
*/

// This concept in JS is called as a block closure 
// Read on mdn what is block closer
function one(){
    const userName = "Sankalp";

    function two(){
        // can access the userName because userName is gobally avaiable for function two()
        // and function two() is inside the block scope of function one()
        console.log(userName);
        let isloggedin = true;
    }
    
    // isloggedin is defined inside the function two() there the blockscope of isloggedin is locally inside the 
    // function two() you can't access outsid the scope of function two
    //console.log(isloggedin);// isloggedin is not define
    two()
}

// username is defined inside the function one() there the blockscope of username is locally inside the 
// function one() you can't access outside the scope of function one
//console.log(userName);
one();

if(true){
   // username scope is locally inside this if statement 
   // you can access username any where inside this if statment
   const username = "sankalp";
   if(username == "sankalp"){
       // username is access because username is gobally avaiable for this inside if statement
       // this inner if statement is inside the scope of outer if statment
       console.log(`${username} is admin`);
   }
}