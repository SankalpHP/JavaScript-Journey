
//  # perivously we saw the non singleton object i.e object literals
//  # create the singleton objects

const obj = new Object(); // This is a singleton object 
// Remember the singleton non singleton difference just for the interview 

// create the nested object using object literals
// Object can contains the nested object's

// Object having the nested object's
let user = {
    app:"tinder",
    location:"pune",
    username:{
        fullname:{
            firstName:"Sankalp",
            lastName:"Selokar"
        }
    }
};

// To access the firstName and LastName 
// . dot operator use to access the object properties and jump from one object to another object in nested object
console.log(`${user.username.fullname.firstName} ${user.username.fullname.lastName}`); // sankalp selokar

/*
   There are various methods of the objects 
   we will see some of the important method's of it
*/   

let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c",4:"d"};

// merge two object (here obj2 is merge into object one)
// synatx Object.assign(target,source);
// here obj1 is target and obj2 is source 
// return values on Object.assign() is new modified target object
let obj3 = Object.assign(obj1,obj2);
console.log(obj3);
// At some of the production level the target obj is empty
   obj3 = Object.assign({},obj1,obj2);
console.log(obj3);   

/*
    YOU WILL USE Object.assign() very less instead of it use ... spread operator 
    which is new and efficent
*/

// merger object using ... spread operator
let merge_obj = {...obj1,...obj2};
console.log(merge_obj);

let player={name:"Sankalp Selokar",InterNationalTeam:"India",IPLTeam:"CSK"};

// Object.keys(parameter Obj); => static method that return the array of keys inside a object
console.log(Object.keys(player));// output => [ 'name', 'InterNationalTeam', 'IPLTeam' ]

// Object.values(parameter Obj); => static method that return the array of values inside a object
console.log(Object.values(player));// outpust => [ 'Sankalp Selokar', 'India', 'CSK' ]   

// Object.entries(parameter Obj); => static method that return the array of keys and values inside a object
console.log(Object.entries(player));
/*
    Output => [
                [ 'name', 'Sankalp Selokar' ],
                [ 'InterNationalTeam', 'India' ],
              [ 
*/

// 

// hasOwnProperty(property); => Instance method return's boolean values value check's whether object contain that property or not
console.log(player.hasOwnProperty('InterNationalTeam'));
console.log(player.hasOwnProperty('Record'));

/*
   There are many properties of object these are the some properties of objects 
   for more read objects in javascript on mdn document
*/

/* 
   # Last when we get data from the database then the data is comes in different JSON object format
     it comes in the form of array of JSON Object's
     below is the example
*/

let db = {Data:[
    {
        id:1,
        name:"max",
        age:18
    },
    {
        id:2,
        name:"meg",
        age:20
    },
    {
        id:3,
        name:"chris",
        age:22
    },
]};

// above is the object that contains array on JSON object where Data is parent node of array inside the object
// in this format the data will from the database

// to access any property from object db
console.log(db.Data[0].name);
console.log(db.Data[1].name);
console.log(db.Data[2].name);


