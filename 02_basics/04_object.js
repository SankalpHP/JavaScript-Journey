/*
   # Destructuring of the objects 
               AND
   # Some talk about JSON             
*/

let person = {
    firstName:"Sankalp",
    lastName:"Selokar",
    company:"Tata Technologies",
    role:"Solution Developer",
    city:"Chinchwad"
};

console.log(person.firstName);
console.log(person.firstName);
console.log(person.firstName);

/*
    EveryTime we have to access the firstName then we have to use this 
    structure person.firstName but in bigger project or in react 
    we use the concept of destructuring the object
    the concept is shown below
*/

// destrcuturing the object 
const {firstName} = person
// Now you can use only firstName instead of full person.firstName
console.log(firstName);

// you can also give the name to the destructuring object 
const {firstName : name} = person
// Now you can use the name instead of firstName
console.log(name);

/*
   # SOME TALK ABOUT JSON 

      JSON is JavaScript Object notation its is commonly use in all language to get and sent the data 
      previously xml notation is used which is quit complex 

      JSON structure is look like object but there is a difference. JSON object has key and values both 
      are in the form of string where as in noraml object key are not in the form of string.

           {
                "firstName":"Sankalp",
                "lastName":"Selokar",
                "company":"Tata Technologies",
            }

     for more see the randomuser api 
     and formatter the JSON data into JSON Formatter
     
     when you call an api you will get the JSON data in this format
     later we convert this JSON into the array or JSON Array or object 
     we will this later in this course

     {
        Data:[
                        {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Khalid",
                    "last": "Dirdal"
                },
                   "location": {
                            "street": {
                            "number": 9213,
                            "name": "Eirik Raudes vei"
                            },
                    "city": "Torsken",
                    "state": "Hordaland",
                    "country": "Norway",
                    "postcode": "6868",
                    "coordinates": {
                    "latitude": "46.2387",
                    "longitude": "-45.7849"
                },
            },    
        ],
     };
*/
