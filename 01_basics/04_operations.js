
/*
There are 11 types of the expressions and operations in JavaScript
 
    # Assignment operators (=,+=,-=,*=,/=,%=)
    # Comparison operators (==,===,>,<,>=,<=,!=,!==)
    # Arithmetic operators (+,-,*,**,/,%)
    # Bitwise operators (|,&,~,^,<<,>>)
    # Logical operators (&&,||,!)
    # BigInt operators
    # String operators
    # Conditional (ternary) operator ( condition ? value1 : value2 )
    # Comma operator (,)
    # Unary operators (--,++)
    # Relational operators

We are going to see some of the commonly used operators in pratical project usage   
look at mdn doc and study all this operators  
*/

// # Arithmetic operators 
   let num1 = 10;
   let num2 = 20; 

//    console.log(num1 + num2);
//    console.log(num1 - num2);
//    console.log(num1 * num2);
//    console.log(num1 ** num2);
//    console.log(num1 / num2);
//    console.log(num1 % num2);

// # Assigment operators 

   num1 = 30; // = -> assignment operator num1 = 30 means 30 is assign to variable num1
   num2 = 40; // = -> assignment operator num2 = 40 means 40 is assign to variable num2
   let num3 = 20
       num3 += num1; // += means num3 = num3 + num1

   //console.log(num3);
   
   /*
       Similarly 

       num3 += num1; => num3 = num3 + num1
       num3 -= num1; => num3 = num3 - num1
       num3 *= num1; => num3 = num3 * num1
       num3 /= num1; => num3 = num3 / num1
       num3 %= num1; => num3 = num3 % num1

       for more look mdn
   */

// # Comparison operators (==,===,>,<,>=,<=,!=,!==)
//   Comparison operators gives output in true or false only 
     
     // == equal to operator
     //console.log(1 == 2); //false

     // === equal to operators with datatype 
    // console.log(1 === "1"); //false

     // != not equal to 
     //console.log( 1 != 2); // true

     // !=== not equal to with datatype
     //console.log( 1 !== "1"); // true 

     // > greater than 
     // < less than 
     // >= greater than equal to 
     // <= less than equal to

// # Logical operators (&&,||,!)
//   Logical operators give output in true or false 

/*
     && => Logical AND Both opreands,condition must be true then only ouput will come true 

     AND => table 

     True  && True   = True 
     True  && False  = False
     False && True   = True
     False && False  = True
*/
    //console.log( 1 < 2 && 2 > 1); // true 
    //            true && true 
    //                true
    
    /*
        Here 1st condition is true so control will check the second condition 
        2nd condition is false so output is false 
    */
    //console.log( 1 < 2 && 2 < 1); // false
    //            true && false 
    //                false
    
    /*  
        Here 1st condition is false so control will not check the second condition
        because logcial AND say both must be true 
        but my 1st condition is false so the output is false only 
        whether the 2nd condition is true or false it doesn't matter here 
    */
    //console.log( 1 > 2 && 2 > 1); // false 
    //           false && XXXXXX 
    //                false

/*
     || => Logical OR one of the must opreand ,condition must be true then only ouput will come true 

     OR => table 

     True  || True   = True 
     True  || False  = True
     False || True   = True
     False || False  = False
*/

/*
    Here 1st condition is true so control will not check the second condition 
    because in OR || one of the condition must be true for overall output true
    1st condition is true so already whole the expression is true 
    no need to check the second condition in OR || operator
*/
     console.log( 1 < 2 || 2 > 1); // true 
    //             true || XXXXX
    //                 true

/*
    Here 1st condition is true so control will not check the second condition 
    because in OR || one of the condition must be true for overall output true
    1st condition is true so already whole the expression is true 
    no need to check the second condition in OR || operator
*/
    console.log( 1 < 2 || 2 < 1); // true
    //            true || XXXXX
    //                true

/*  
    Here 1st condition is false so control will not check the second condition
    because logcial AND say both must be true 
    but my 1st condition is false so the output is false only 
    whether the 2nd condition is true or false it doesn't matter here 
*/
console.log( 1 > 2 || 2 > 1); // true 
//           false || true 
//                true    

console.log( 1 > 2 || 2 < 1); // false 
//           false || false 
//                false  

/*
   # ! => Logical NOT 
     
   # ! => Table
     !true => false 
     !false => true 
*/

console.log(!true);// false
console.log(!false);// true 

/*
   # Ternary Operator 
     HAS three operands that's why it is called as ternary operator

     syntac condtion?operand1:operand2
*/

  let a = 3>2?"yes":"no";
  console.log(a);

/*
    # Unary Operators
      operand that can work with only one opertor is called as unary operator

      unary operator can be used in two different ways 
      1) AS a prefix
      2) As a sufix/postfix
*/  

console.log("Unary Operator Concepts");
let Unary_num1 = 10;
let Unary_num2 = 20;

    // pre-increment unary operator
    // First Increment the value of operand than associated or assign it 
       Unary_num1 = ++Unary_num1;
       console.log(Unary_num1); // 11

    // post-increment unary operator 
    // First associated or assign the value than incerment it 
       Unary_num2 = Unary_num2++;   
       console.log(Unary_num2); // 20

    // Similarily there are pre-decrement unary operator --operand
    // And post-decrement operator operand--   

/*
   AS I PERSONAL LERAN JAVA SO I KNOW ALL THIS OPERATORS 
   SO I'M GOING TO SEE THE SOME OF THE CATCH IN THIS OPERATORS
*/

//console.log(1 + 2); // 3

// when to try to add string and a number Javascript consider number as string only  
//console.log("1" + 2);// 12 

// now here the catch is JavaScript always gives precendance from left to right 
// on left both are number so they are treated as number and right one is string only 
//console.log(1 + 3 + "2");// 42

// This are just a catch we don't use this in real life 