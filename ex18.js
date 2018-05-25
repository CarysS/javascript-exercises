//Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

function computeFactorialOfN(n) {
  // your code here
  //var previousnums = [];
  var product = 1;
  for (i=1; i<=n; i++){
    product = product*i;
  }
  return(product);
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
