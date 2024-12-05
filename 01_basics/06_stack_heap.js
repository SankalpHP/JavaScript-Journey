/*
    # Stack Memory 

      All primative datatypes gets memory in the stack section 
      string,number,boolean,symbol,bigInt,null,undefined
      These all type get memory in the stack section 
      stack memory always create a copy of the values
      see below example
*/

let num1 = 1244;
let num2 = num1;
console.log(num2);// 1244 

// Now change the values of num2

   num2 = 1233;
   console.log(num1);
   console.log(num2);

/*
   above example 
     See changing value of num2 will not change the value of num1
     because num2 has the duplicate of num1 not the original as we know will 
     create a copy of num1 value to assign it to num2 on this stage => let num2 = num1
     therefore changing value of num2 will not the value of num1
*/   

//================================================================================================

/*
    Heap memory 
    non-primative Datatypes will get the memory in the heap section 
    Array,objects,functions  gets memory in a heap section
    heap section provides the reference or memory address to the variable 
    below example
*/

let userOne = {
    email:"user@google.com",
    roll:"developer"
};

let userTwo = userOne;
console.log(userTwo);

/*
     userOne have memory address of object -------------------> {
                                                                 email:"user@google.com",
                                                                 roll:"developer"
                                                               };

      Same when you assign userOne to userTwo on this line => let userTwo = userOne;    
      
      userTwo will also get the memory address of object -------------------> {
                                                                 email:"user@google.com",
                                                                 roll:"developer"
                                                               };

      so here new object is not create both userOne and userTwo are pointing to the same memory addres in
      the heap so when to try to change the value of key email by userTwo it will also reflect to userOne 
      
      see below code
*/

userTwo.email = "AI@google.com";

console.log(userTwo);
console.log(userOne);

/*
   when to you change key email value by userTwo it will also changes the key email value of userOne
*/