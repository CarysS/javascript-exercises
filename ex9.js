Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  if (score<=100 && score>=0){
    if (score>=0 && score<60){
      score = "F";
    }else if(score>=60 && score<70){
      if (score<=62){
          score = "D-";
        }else if (score>=68 && score<=69){
          score = "D+";
        }else{
          score = "D";
        }
    }else if(score>=70 && score<80){
      if (score<=72){
          score = "C-";
        }else if (score>=78 && score<=79){
          score = "C+";
        }else{
          score = "C";
        }
    }else if(score>=80 && score<90){
      if (score<=82){
          score = "B-";
        }else if (score>=88 && score<=89){
          score = "B+";
        }else{
          score = "B";
        }
    }else if(score>=90 && score<=100){
        if (score<=92){
          score = "A-";
        }else if (score>=98 && score<=99){
          score = "A+";
        }else{
          score = "A";
        }
    }
  }else{
    return("INVALID SCORE");
  }
  return(score);
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
