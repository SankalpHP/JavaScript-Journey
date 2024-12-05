// Javascript has two types of datatype

/*
    # Primative Datatype 
      # string,number,boolean,symbol,bigInt,null,undefined

    # non-primative Datatypes
      # Array,objects,functions  
*/

// Primative Datatypes
  
   let name = "Sony";
   console.log(typeof name);// string 

   let num = 123;
   console.log(typeof num); // number

   let bigNumber = 56283939474784949487399382794928939n;
   console.log(typeof bigNumber); // bigint

   let userloggedin = true;
   console.log(userloggedin); // boolean

   let empty = null;
   console.log(typeof empty); // object

   let nonDefined;
   console.log(typeof nonDefined); // undefined

   let sym = Symbol("1233");
   console.log(typeof sym); // symbol

// non-primative Datatypes

   let cars = ["volvo","BMW","Ford"];
   console.log(typeof cars); // array object

   let myobject = {
      studentName:"Henry",
      std:5,
      result:"pass"
   };
   console.log(typeof myobject);// JSON object (key:value)

   function myfunction(){
     return "This is my myfunction";
   }
   console.log(typeof myfunction); // function Object

