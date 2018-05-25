//Convert a phrase to its acronym.

acro = '';

function acronymMaker(str){
  str=str.split(" ");
  //console.log(str);
  for (x=0; x<str.length; x++){
    acro+=(str[x].charAt(0));
  }
  return (acro);
}

output = acronymMaker("Portable Network Graphics");
console.log(output);




