/*
    if else statement's
    if the condition is true exceute the if block 
    else execute the else block

    here two write a conditon's we use compartor and logic operator's
    that we study in 01_basics/04_operations.js
*/

// if statement
let salary = 50000;

if(salary > 30000){ // 50000 > 30000 => true => if block execute
  console.log("Salary is greater than 30000");
}else{
  console.log("Salary is less than 30000");
}

salary = 20000;

if(salary > 30000){ // 20000 > 30000 => false => else block execute
    console.log("Salary is greater than 30000");
}else{
    console.log("Salary is less than 30000");
}

// else if

salary = 80000;

if(salary < 30000){ // 80000 < 30000 => false => check next else if()
     console.log("salary is less than 30000");
}else if(salary === 50000){ // 80000 === 50000 => false => check next else if() 
    console.log("salary is equal to 50000");
}else if(salary > 50000){ // 80000 > 50000 => true => execute this else if() block 
    console.log("salary is greater than 50000");
}else{
    console.log("salary is not  deposited");
}

// nested if else 
let bank = "HDFC";
let account = 1234;
let balance = 50000;

if(bank === "HDFC"){ // "HDFC" === "HDFC" => true execute the if 
    
    console.log("account is 1234"); // print 
    
    if(account === 1234 && balance === 50000){ // 1234 === 1234 && 50000 === 50000  
                                               //      true     &&        true
                                               //              true  => final o/p true execute this if block
        console.log("account and balance is matched");
    }else{
        console.log("account and balance is not matched");
    }
}else{
    console.log("Check the bank");
}

let name = "Sankalp";

if (name === "Maxi" || name === "Sankalp") { // "Sankalp" === "Maxi" || "Sankalp" === "Sankalp" 
                                             //          false       ||           true
                                             //                     true => final o/p true execute this if block 
    let finalname = name;
    console.log(finalname);
}
//console.log(finalname);// finalname is not defined error because the finalname variable scope
                       // inside the if statement only, you can't access outside it's scope