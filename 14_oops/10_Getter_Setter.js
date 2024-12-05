/*
   # Getter and Setter Method's in javascript
     
     As we use constructor to set the properties of the class but what if we have to add more 
     functionality 
     example:- A user can set the password but we know want user to get the original password
               from the db 
     
     Rules:

     # Getter and Setter are the keywords to create the getter and setter methods in the Javascript.
     # Getter and Setter are the pre-define methods in the javascript, if we don't overwrite it 
       then the class have there own pre-define javascript method's
     # without getter method you can't declared the setter method and without setter method you 
       can't declared setter method
     # Getter and setter method names should be same as the property name present in the class that 
       you want to set and get    

     Most Important:

     # If you have both constructor and Getter,Setter method's in your class always remember change the 
       variable names of the getter and setter  because if you don't do that it start's the race 
       between the constructor and setter getter method to set the values and it cause the error 
       of "maximum call stack size exceeded"
     # But Keep the variable names of setter's and getter's same   
*/
class user{
   
    // Note:- our setter and getter variable name's are different from constructor variables read above.
    //        But the setter and getter variable names are the same 
   
    constructor(email,password){
       this.email = email;
       this.password = password;
    }

    get password(){
      return this._password.toUpperCase();
  }

    set password(value){
       this._password = value;
    }

}

let userOne = new user("San@google","abc");
console.log(userOne);
console.log(userOne.password);

// Another example
class car {

    // Note:- our setter and getter variable name's are different from constructor variables read above.
    //        But the setter and getter variable names are the same 
     
    constructor(brand,price){
      this.brand = brand;
      this.price = price;
    }

    set brand(setbrand){
        this._brand = setbrand;
    }

    get brand(){
      return `brand = ${this._brand}`
    }

    set price(setPrice){
      this._price = setPrice;
    } 

    get price(){
      return `price = ${this._price}`
    }
}

let tata = new car("Tata","12-lpa");
console.log(tata.brand);
console.log(tata.price);