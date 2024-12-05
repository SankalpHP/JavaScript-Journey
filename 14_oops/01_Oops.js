/*
     # Why we need oop's in JS
    => Before ES6 version of 2015 the JS has nothing like OOPS (object oriented programming)
       As we know JS is the object based programming language so why we need extra Oops concept in 
       JS, the answer is that oops is not programming language it is a structure or a programming 
       paradim which is used to create more scalable, reusable, also main thing add a loosely 
       coupled functionality in project.
                                        before oops we are facing the problem's of reusability,
       Not able to create a loosely coupled project's this all problem are solve by OOPS
       object oriented programming.Object Oriented Programming of the JS is same as JAVA Object 
       Oriented Programming.
*/ 

// create one user
// const userOne = {
//     username:"sankalp",
//     age:23,

//     details:function(){
//         console.log(`Username: ${this.username} and Age: ${this.age}`);
//     }
// }

// console.log(userOne.details());

// now create second user 
// const userTwo = {
//     username:"maxi",
//     age:30,

//     details:function(){
//         console.log(`Username: ${this.username} and Age: ${this.age}`);
//     }
// }

// console.log(userTwo.details());

/*
   Have you the problem in above code to create userTwo I have to copy the same code
   that I use to create a userOne, NOW is not a scalable as well as reuseable code 
   to solve this problem oop's concept's are use 
*/ 

// Same create a user but this time using the classes concept
class user{
     user;
     age;

     constructor(user,age) {
        // right side is refer to property of user and left is the parameter of the constructor
        //L.H.S     R.H.S
        this.user = user;
        this.age = age;
     }
}

// create the first user
let firstUser = new user("Sankalp",23);
console.log(firstUser.user + " " + firstUser.age);

// create the second user
let SecondUser = new user("Maxi",31);
console.log(SecondUser.user + " " + SecondUser.age);

/*
    right side is refer to property of user and left is the parameter of the constructor
        L.H.S                                            R.H.S
        this.user                            =            user;
        this.age                             =             age;

    this =>  key refer's to current context of the class
    
    properties of class => user and age is the properties of the class
     user;
     age;
   
    new => new keyword is use to create the instance of class i.e is assigned to variable 
           which is call as a object.

    constructor => IS the on type of method that is use to set the value of the proerty 
    whenever you create a instance of the class by default the constructor is call to set 
    the values of the properties. 
*/