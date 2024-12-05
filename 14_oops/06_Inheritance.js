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
    userName(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// child class access the parent class user so child class now have all properties and methods of parent class
// extend is the key to inherit the properties and methods of parent class into child class
class admin extends user{
   
    constructor(username,email,password){
        // super keyword automatically perfer the constructor of the parent class user
        // and set the values of user behind the seen
        super(username);
        this.email = email;
        this.password = password;
     }

     print(){
        console.log(`The username is ${this.username} and the email is ${this.email} and the password is ${this.password}`);
     }
  
}

let firstAdmin = new admin("Sankalp","San@google.com","123");
console.log(firstAdmin.userName());// child class can access parent class property and method's
console.log(firstAdmin.print());

let User = new user();
//console.log(user.print()); error parent can't access child class property