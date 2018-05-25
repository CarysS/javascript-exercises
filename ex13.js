//Write a function  using a for loop to increment '*' by 1

function printStars(n) {
  var starsnum = "";
  for (i=1; i<=n; i++){
    starsnum = (("*") * i);
    console.log(starsnum);
  }
}

printStars(4);
