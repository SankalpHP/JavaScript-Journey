class user{

    username;
    email;
    
    constructor(username,email){
      this.username = username;
      this.email = email;
    }

    static id(){
        this.id = Math.random();
        console.log(`The Id is = ${this.id}`);
    }
}

let UserOne = new user("Sankalp","San@google.com");
    console.log(UserOne);

// calling static method directly by the class name    
user.id();

/*
    Static method or variable are not dependent on the object of the class
    its means that to called static method's variable's you don't need to 
    create the object of the class.

    using class name and dot operator you can directly call the static method's and variable's
    
    MOST IMPORTANT:- 
                      static method is not access to extended class also, In this case If I extend's
                      the parent user class into another child class, then the child class will not 
                      able to access the parent class static method. i.e static id() is not accessible
                      to child class
*/