/*Fahrenheit to Celsius Converter
*/


function cToF(celsius) {
  // this is celsius to Fahrenheit
  var F=(celsius* 1.8) + 32;
  console.log(celsius,"\xB0C is ", F,"\xB0F");
  //console.log(F,"\xB0F");
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  var C=(5/9) * (fahrenheit - 32);
  console.log(fahrenheit,"\xB0F is", C,"\xB0C");
  //console.log(C,"\xB0C");
  
}

cToF(60);
fToC(45);
