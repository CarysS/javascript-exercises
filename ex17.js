/*Given an array and an object, "select" 
returns a new object whose properties are those in the given object AND whose keys are present in the given array.*/

function select(arr, obj) {
  // your code here
  var newObj = {};
  for (i=0; i<arr.length; i++){
    for (var key in obj){  //can't do this for an array in JavaScript (key could be any var)
      //console.log(key) //the key is the first part of the object
      if (key == arr[i]){
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

//test input:
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
