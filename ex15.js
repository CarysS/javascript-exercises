//flips a coin and gives a random number of Heads & Tails

var flips = prompt("Total coin flips: ", "Text goes here");

console.log("=====================");

var heads = 0;
var tails = 0;

for (i = 0; i < flips; i++) {
   var num = Math.floor(Math.random() * 2);
   //console.log(num);
   if (num===0){
  heads++;
}else if (num==1){
  tails++;
}
}

/*
if (num===0){
  heads++;
}else if (num==1){
  tails++;
}
*/

console.log("Heads", heads);
console.log("Tails", tails);



