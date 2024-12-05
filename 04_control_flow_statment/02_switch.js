/*
     swicth statement 
     we use switch statement when there is many conditions 
     what if the we want to perform some operation on month's
     but there are 12 month's
     so we need to add 12 if else if condition which is a 
     length and process at that time we use the switch 
     statement
*/

let month = "Jan";

switch(month){
    case "Jan":
                console.log(`This is month of ${month}`);
                break;
    case "Feb":
                console.log(`This is month of ${month}`);
                break;
    case "Mar":
                console.log(`This is month of ${month}`);
                break;
    case "April":
                 console.log(`This is month of ${month}`);
                break;
    case "May":
                console.log(`This is month of ${month}`);
                break;
    case "June":
                console.log(`This is month of ${month}`);
                break;
    case "July":
                console.log(`This is month of ${month}`);
                break;
    case "Aug":
                console.log(`This is month of ${month}`);
                break;
    case "Sep":
                console.log(`This is month of ${month}`);
                break;
    case "Oct":
                console.log(`This is month of ${month}`);
                break;
    case "Nov":
                console.log(`This is month of ${month}`);
                break;  
    case "Dec":
                console.log(`This is month of ${month}`);
                break;
    default:
        break;        
}

/*
    NOTE:- break statements are important because it is a terminating condition 
           In Above Example if you miss the break statment after the Jan 
           then it will also execute the feb until it reaches to the next break 
           statement 

           you write default condition any where but generally it is written 
           at the last only 

           nested cases are also allow inside the switch 
*/