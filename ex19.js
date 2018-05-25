//checks for repeated words in a string

function noDuplicates(phrase){
  repeat = false;
  words = phrase.split(" ");
  words = words.sort();
  for (i=0; i<words.length; i++ ){
      if (words[i]==words[i+1]){
        repeat = true;
      }
    }
    if (repeat === true){
      return ("no");
    }else if (repeat === false){
      return ("yes");
    }
  }


console.log(noDuplicates("THE RAIN IN SPAIN"));
console.log(noDuplicates("IN THE RAIN AND THE SNOW"));


