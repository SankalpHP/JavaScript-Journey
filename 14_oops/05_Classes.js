class user{

    // properties of user class
    username;
    email;
    password;
    
    // constructer to set properties of user class
    constructor(username,email,password){
       this.username = username;
       this.email = email;
       this.password = password;
    }
   
    // method to encrypt password
    encrypt(){
        return this.password + "abc";
    }
}

// 1) new keyword create the instance of the user class and assign to variable userOne which is a
//    Object of user class
// 2) whenever you create a object of any class using new keyword automatically first thing is call,
//    that is constructor of that class
let UserOne = new user("Sankalp","San@google.com","123");
console.log(UserOne);
console.log(UserOne.encrypt());


// create another user 
let UserTwo = new user("Kalyan","Kal@microsoft.com","345");
console.log(UserTwo);
console.log(UserTwo.encrypt());


/*
   # MOST IMPORTANT REMEMBER
      
     classes are the logically entities they are not physicaly entities means it just a blue print 
     so classes will never get a memory but the object of that class will get a memory because 
     as I say classes are the logically entities but the object of that classes is the 
     physically entity of that class so object will get a memory. 
     
     In this example:- # class user will not get a memory but object of class user i.e UserOne and
                         UserTwo will get memory inside a heap memory section. 
                
*/ 