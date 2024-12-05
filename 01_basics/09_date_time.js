/*
    # Date and Time in javascript 
      Date and Time in javascript is some what problematic that's why the working on new api temporal is going on
      which is not production right now may be after 2 years it will be ready to used for production 
      for use only Date() object in javascript 
      Date() object have various important method's or functions. some the method's or function are shown below
      example
*/

// create a Date() object using new word new and wrapper class Date

let date = new Date();
console.log(date.getDate()); // return present date
console.log(date.getMonth() + 1);// return present month and 1 is because months are starts from 0 in JS
console.log(date.getFullYear());// return present year
console.log(date.getHours());// return present hour
console.log(date.getMinutes());// return present minute
console.log(date.getSeconds());// return present second
console.log(date.toString());// return full day month time in a string format ex:Mon May 13 2024 15:00:21 GMT+0530 (India Standard Time)
console.log(date.toDateString());// return day month date year ex:Mon May 13 2024
console.log(date.toLocaleDateString());// return local date 
console.log(date.toLocaleString());// return local date and time in string format
console.log(date.toJSON());// return local date and time in JSON format
console.log(date.getUTCFullYear());// return year
console.log(typeof date);// object

console.log("===========================Generate the date formate=================================");

// Month start's from zero in javascript
let createthedate = new Date(2024,0,26);// year month date format 
console.log(createthedate.toString());// Fri Jan 26 2024 00:00:00 GMT+0530 (India Standard Time)
let createthedatetime = new Date(2024,0,26,5,3);// year month date time format
console.log(createthedatetime.toLocaleString());// 26/1/2024, 5:03:00 am

console.log("==============================Time Stamp==============================================");

let timestamp = Date.now(); // or let timestamp = new Date();
console.log(timestamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

console.log("=============================More customization in toLocaleString() method============");

let fulldaymonthyear = createthedate.toLocaleString('default',{
                                    weekday:"long",
                                    month:"long",
                                    year:"2-digit"
                    });

console.log(fulldaymonthyear);                    