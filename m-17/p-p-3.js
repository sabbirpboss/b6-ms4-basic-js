// (i) You are given three numbers 13, 79 and 45. Write a program that will print the largest number using if-else.

function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "num1 is the largest number";
  } else if (num2 > num1 && num2 > num3) {
    return "num2 is the largest number";
  } else {
    return "num3 is the largest number";
  }
}

const result = largestNumber(13, 79, 45);

console.log(result);



// (ii) You are given a triangle with the sides 9, 8, 9. Write ba program to check whether a triangle is Isosceles or not using if-else.

function isosceles(side1, side2, side3) {
  if (side1 == side2 && side2 == side3) {
    return "It is an equilateral triangle as well as isosceles triangle.";
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    return "It is an isosceles triangle";
  } else {
    return "It is  not an equilateral or isosceles triangle.";
  }
}

const solution = isosceles(9, 9, 9);
console.log(solution);