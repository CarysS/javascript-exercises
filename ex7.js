//Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

function computeSumBetween(num1, num2) {
  // your code here
    var total = 0;
  for (i = num1; i < num2; i++) {
    total = total+i;
  }
  //return (array);
  return (total);
}

var output = computeSumBetween(2, 5);
console.log(output);
