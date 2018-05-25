//Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

function countCharacter(str, char) {
  // your code here
  var count = 0;
  for (x=0; x<str.length; x++){
    if (str[x]==char) {
      count = count + 1;
    }
  }
  return count;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output);
