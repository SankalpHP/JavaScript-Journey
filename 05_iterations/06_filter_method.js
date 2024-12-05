/* Now here we use the forEach to filter out the element greater than 40 
   we need to add some extra logic */
   let num = [10,20,30,40,50,60,70];
//    let greater = [];
//    num.forEach((element)=>{
//        if(element >= 40){
//          greater.push(element);
//        }
//    });
//    console.log(greater);
 
/*
  instead of using forEach() method and that extra logic JS provides the filter() method
*/   
   
/*
    # filter() method

      # filter() method is a iterative method that return the shallow copy of the array of object,array based on the 
        condition given by the programmer

      # filter() method takes callback function as argument which has three parameters i.e element,index,array
                 the callback can be any arrow function or function expression or regular function.
        
         element:- contains each element of the array or each object in an array of object

         index:- contains index of the elements in an array or object in array of object 

         array:- contains the whole array itself

      # Same above example using filter method shown below

*/
// using arrow function as a callback function 
let greaternumber = num.filter((element)=>{
     return element >= 40;
});

//console.log(greaternumber);


/*
   # real time use case 
     consider the JSON data is coming from the database as we know it will come in the form of array of objects 
*/

let book = [
                { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
                { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
                { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
                { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
                { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
                { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
                { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
                { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
                { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
            ];

// filter the array object condition publish after 2000
let after2000 = book.filter(function(element){
    return element.publish > 2000;
});
//console.log(after2000);

// filter the array object condition genre is history
let genreHistory = book.filter((element)=>{
    return element.genre === "History";
});
//console.log(genreHistory);

/*
    # Chaining concept => applying same method contionusly more than time on the same array is called chaining 
                          of method
*/ 

let historyEditionAfter2000 = book
                             .filter((element)=>{ 
                                          return element.genre === "History";
                                     })
                             .filter((element)=>{
                                          return element.edition > 2000;
                                     });
console.log(historyEditionAfter2000);        

/*
    # How it works's
      1st filter() method callback function parameter "element" contains the element of book array of object
      filtered data from 1st filter() method goes to 2nd filter() method callback function parameter "element"
      and again 2nd filter() method filtered data return to variable historyEditionAfter2000
*/