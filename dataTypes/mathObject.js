let numberOne = 32,
  numberTwo = 64,
  numberThree = -45,
  numberFour = 34.66,
  numberFive = 45.342;

console.log(
  "Nearest integer of " + numberFour + " : " + Math.round(numberFour)
);
console.log("_____________________________________________");

console.log(
  numberTwo +
    "th power of " +
    numberOne +
    " is " +
    Math.pow(numberOne, numberTwo)
);
console.log("_____________________________________________");

console.log("Square root of " + numberTwo + " is " + Math.sqrt(numberTwo));
console.log("_____________________________________________");

console.log("Absolute value of " + numberThree + " is " + Math.abs(numberThree));
console.log("_____________________________________________");

console.log("Highest nearest integer of " + numberFive + " is " + Math.ceil(numberFive));
console.log("_____________________________________________");

console.log("Sine of angle " + numberOne + " is " + Math.sin(numberOne * Math.PI / 180));
console.log("_____________________________________________");

console.log("Cosine of angle " + numberOne + " is " + Math.cos(numberOne * Math.PI / 180));
console.log("_____________________________________________");

console.log("Smallest number is " + Math.min(numberOne,numberTwo,numberThree,numberFour,numberFive));
console.log("_____________________________________________");

console.log("Largest number is " + Math.max(numberOne,numberTwo,numberThree,numberFour,numberFive));
console.log("_____________________________________________");

