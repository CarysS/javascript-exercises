/*Write a JavaScript function which iterates the integers from 1 to n.  
BUT... for multiples of 3 add "Owasso" to the array instead of the number and for the multiples of five, add "Rams" to the array. 

For numbers which are multiples of both three and five print "OwassoRams".
*/

function owassoRams(n){
  var arr=[];
  for (x=1; x<=n; x++){
    if (x%3===0 && x%5===0){
      arr.push("OwassoRams");
    }else if (x%5===0){
      arr.push("Rams");
    }else if (x%3===0){
      arr.push("Owasso");
    }else{
      arr.push(x);
    }
  }
  return(arr);
}

var output = owassoRams(15);
console.log(output);
