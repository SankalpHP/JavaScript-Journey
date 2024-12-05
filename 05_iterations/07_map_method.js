/*
    # map() method 

       map() method is the array method use to iterate over the array or array of object just like filter() method
       map() mathod return's new array of element based on programmer condition or business logic

    # map() method takes callback function as argument which has three parameters i.e element,index,array
                 the callback can be any arrow function or function expression or regular function.
                          
            element:- contains each element of the array or each object in an array of object

            index:- contains index of the elements in an array or object in array of object 

            array:- contains the whole array itself
            
*/

let num = [10,20,30,40,50,60,70,80,90];

let add = num.map((element)=>{
     return element + 10
});
console.log(add);

/*
    # Chaining of the map() method

      apply map() method two times continuously 
*/

let values = [100,200,300,400,500,600,700,800,900,1000]

let result = values
                   .map((element)=>{
                           return element + 20;
                       })
                   .map((element)=>{
                          return element * 2;
                   });
console.log(result);     

/*
    # How it works?
      1st map() method return the addition operation values on each element to 2nd map() method and 
      2nd map() method return the multiplication operation values on each element coming from 1st map()
      method array to variable result;
*/

