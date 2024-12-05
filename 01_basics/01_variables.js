// IN JAVASCRIPT There are 3 way to delcare variables 

// consider a real time project scenario you have to open a bank account 

//const is  use to declared constant value
const accountID = 1234;

//let and var is used to declared values that can be changed 
let accountEmail = "will@gmail.com";
var accountPassword = "536272";

// The status values can be change in future so following new standards use let keyword
let accountStatus;// only declaration

/*
   
   NOTE:- let and var 
         
          The difference between var and let is var does not know the block scope so never use var keyword 
          for declaring the variables, although in old code you will find var keyword but from new standard
          never use var keyword to declare variables. use only let keyword 
          Forgot about var keyword
          If the value is gone change in future for that use let following current standard
*/

//Its is vaild in JS but bad thing not recommended
accountCity = "Pune";

/*
    NOTE:- Const Keyword
  
        Once the const variable is declared and initialized you cannont reassign the values on const variable

        const value can't be change once it's declared
        accountID = 8494; // NOT ALLOWED

        variable declared with const keyword must be initialized while declaring only 
        const bank; // NOT ALLOWED
*/

accountStatus = "active";// assignment operation

// print statment for JS
console.log(accountID);

// print data in tabular form 
console.table([accountID, accountEmail, accountPassword, accountCity, accountStatus]);

// changing status 
accountStatus = "deactive";// reassigment operation
console.table([accountID, accountEmail, accountPassword, accountCity, accountStatus]);
