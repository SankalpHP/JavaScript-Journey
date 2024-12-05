/*
    forEach() loop method
    forEach is a higher order array loop, specially desgin to iterate over array's,object's
    forEach is most widely use method by programmer for iterate over array,object,array of objects 
    
    syntax:-
            forEach(callback function);

            forEach(); => forEach()() method takes callback function as a argument which has three parameter 
                        i.e item,index,array
                        item => contains the values in the array
                        index => contains the index of the values in the array
                        arraym => contains the whole array itself

            forEach((item,index,array)=>{

            });      
            
            item => contains the values in the array
            index => contains the index of the values in the array
            array => contains the whole array itself

            most prefered way is to use arrow function as a callback function
            forEach((item,index,array)=>{

            }); 

    forEach method always return undefined whether it's explicty or implicity return value      
*/

let programming = ["JAVA","PYTHON","C","C++"];
// forEach() method taking arrow function as call back function :- most prefer way 
programming.forEach((item,index,array)=>{
    console.log(`item:- ${item} index:- ${index} array:-${array}`);
});

// forEach() method taking function expression as call back function    
programming.forEach(function(item,index,array){
    //console.log(`item:- ${item} index:- ${index} array:-${array}`);
});

// forEach() method taking regular function as call back function 
function print(item,index,array){
   // console.log(`item:- ${item} index:- ${index} array:-${array}`);
}
programming.forEach(print);

// forEach method return undefined
let returnvalue = programming.forEach((element)=>{
    return element;
});
// forEach method always return undefined whether it's explicty or implicity return value      
console.log(returnvalue);// undefined

/*
    forEach() method are widely and commonly used on array object 
    because when you get data from the database it will 
    come in the form of array of object only 
    below is the example
*/

let data = [
    {
        language:"Java",
        framework:"Spring Boot"
    },
    {
        language:"JS",
        framework:"Node js"
    },
    {
        language:"python",
        framework:"Django"
    },
];

data.forEach((item)=>{
    //console.log(`language:- ${item.language}`);
});