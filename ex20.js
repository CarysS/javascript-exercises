/* 
You have a green lottery ticket, with  ints a, b, and c on it. 
If the numbers are all different from each  other, the result is 0. If all of the numbers are the same, the result  is 20. 
If two of the numbers are the same, the result is 10.
*/

same = false;
none = false;

function greenTicket(a, b, c) {
  if (a==b && b==c){
    //same = true;
   return(20);
  }//else if (same===false & none === false){
  else if (a==b || b==c || a==c){
    return (10);
  }
  else{
    return 0;
  }
}

var output = greenTicket(1, 4, 4);
console.log(output);
