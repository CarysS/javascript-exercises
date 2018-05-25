//Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.


/*for (statement 1; statement 2; statement 3) {
    code block to be executed
}
Statement 1 is executed before the loop (the code block) starts.
Statement 2 defines the condition for running the loop (the code block).
Statement 3 is executed each time after the loop (the code block) has been executed.
*/


function computeSummationToN(n) {
  // your code here
  var total = 0;
  for (i=0; i <= n; i++) {
    //return (n);
    //array.push(i);
    total = total+i;
  }
  //return (array);
  return (total);
}

var output = computeSummationToN(6);
console.log(output);



