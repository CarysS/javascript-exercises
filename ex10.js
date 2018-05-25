//Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

function getLongestWordOfMixedElements(arr) {
  // your code here
  var length = 0;
  var longest = "";
  for (i=0; i<arr.length; i++){
    if (arr[i].length>length){
      length = arr[i].length;
      longest = arr[i];
    }
  }
  return (longest);
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
