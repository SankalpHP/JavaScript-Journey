/*
    # Function
       
      function is the block of code that execute specific code, takes the values as a parameter and process the 
      result or return's the result when function is called
      reduces the repeated code 
*/

// normal function that print's the name 
function print(){
    console.log("My Name Is Sankalp");
}

// function call 
print();

// function that takes the parameter and perform some operation
function add(number1,number2){
  let result = number1 + number2;
  console.log(result);
}

// call the add function and pass two argument
let result = add(3,4);

// result is undefined because add function return nothing
console.log(result);

// function that takes 3 parameter, perform some operation and return the result
function mul(number1,number2,number3){
   return number1 * number2 * number3;
   // console.log("done"); // => this code will never execute as the return keyword return'e the execution contoller
                           //    from line no 31
}

// call the mul function and pass 3 values as argument 
// stores the return values of the mul function and console it
let mulresult = mul(3,3,3);
console.log(mulresult);

/*
     How the function work's

     let see with the example

     function add(num1,num2){
       console.log(num1 + num2);
     }

     add(3,4);

     on line number 50 the add function is call so the execution controller jumps from line 50 where the 
     add function is call to line 46 with argument 3 and 4. 3 is copied to num1 and 4 is copied to num2
     the add operation of num1 and num2 is perform and the result is printed on console after the execution 
     of the the execution control comes back on the line no 48 from where the function is called 
     MOST IMPORTANT:- As the function return nothing so the execution controller comes back with undefined values
     
     
    let see another example 

        function mul(number1,number2,number3){
            return number1 * number2 * number3;
            // console.log("done"); 
        }

        let mulresult = mul(3,3,3);
        console.log(mulresult);

     on line number 66 the mul function is call so the execution controller jumps from line 66 where the 
     add function is call to line 61 with argument 3,3 and 3. 3 is copied to num1, 3 is copied to num2
     and 3 is copied to num3 and the mul operation of num1, num2 and num3 is perform and the value of 
     performed operation is returned to line 66 form where the actually mul function is called 
     AS we known execution controller return's to line from where the function is called
     AS this time execution controller is returning with the value of 3*3*3 = 9 so it is 
     stored in the mulresult and then printed

     MOST IMPORTANT:- As the function return from line number 62 so the line no 63 // console.log("done"); 
     is never going to be execute because execution controller will reached that line no 63 
     execution controller is returning from line no 62 with result to it's called places 
     i.e line no 66 


     Difference between the function parameter and function argument 
     
     This is a function defination or function declartion where name is a parameter
     function name(user){
       console.log(name);
     }
    
     This is function call where the Sankalp is argument that pass to parameter name
     name("Sankalp");

     You can declare as many as parameter you want in a function 
     and pass argument depending on the number of parameter to declared 

     REMEMBER:- To execute any function you have to use () parenthesis with the function
                ex- add(),mul()
*/