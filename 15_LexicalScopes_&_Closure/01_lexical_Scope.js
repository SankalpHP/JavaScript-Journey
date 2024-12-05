/*
      # Lexical Scopes

         lexical scope the brand() function is able to access the name variable because 
         the brand() function is inside the lexical scope of car() function.
         but the variable name is not access outside the car() function the scope of th name variable 
         is only inside the car() function only.

         same variable model is declared inside the brand() function so the lexical scope of the 
         variable model is limited to brand() function only so can't access the model variable 
         out the lexical scope of brand() function.

         This is the concept of the lexical scoping.
*/ 

function car(){
    let name = "TATA";
    // console.log(model); // error => model is not defined
    function brand(){
        let model = "NEXON";
        console.log(`${name} and ${model}`);
    }
    brand()
}
car();

//console.log(name);// error=> name is not defined because name scope is limited to car() function
