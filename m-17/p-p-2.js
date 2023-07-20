// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less  F grade

// Write a program to find your and your friends grades using if-else.


function result(marks) {
  if(marks >= 80){
      return 'A';
  }else if(marks >= 60 && marks < 80){
      return 'B';
  }else if(marks >= 50 && marks < 60){
      return 'C';
  }else if(marks >= 40 && marks < 50){
      return 'D';
  }else{
      return 'F';
  }
}

const me = result(85);
const tom = result(66);
const jane = result(95);
const peter = result(56);
const jhon = result(40);

console.log(" Me:",me, "Tom:",tom, " Jane:", jane, "Peter", peter, "Jhon", jhon);