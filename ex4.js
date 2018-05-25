//Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
  // your code here
  if (num>10&& num%2===0){
    return true;
  }else; {
    return false}
}

var output = isEvenAndGreaterThanTen(13);
console.log(output);
