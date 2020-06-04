let randomNumber,
    firstNumber,
    secondNumber;

console.log(typeof(randomNumber));

randomNumber = 23;
console.log(typeof(randomNumber));
console.log("__________________________________________");

randomNumber = Number("67");
console.log(randomNumber);
console.log(typeof(randomNumber));
console.log("__________________________________________");

firstNumber = 15;
secondNumber = 5;
randomNumber = firstNumber + secondNumber;
console.log('Sum = ',randomNumber);
console.log(typeof(randomNumber));
console.log("__________________________________________");

firstNumber = 15;
secondNumber = 5;
randomNumber = firstNumber - secondNumber;
console.log('Difference = ',randomNumber);
console.log(typeof(randomNumber));
console.log("__________________________________________");

firstNumber = 15;
secondNumber = 5;
randomNumber = firstNumber / secondNumber;
console.log('Quotient = ',randomNumber);
console.log(typeof(randomNumber));
console.log("__________________________________________");

firstNumber = 15;
secondNumber = 5;
randomNumber = firstNumber * secondNumber;
console.log('Product = ',randomNumber);
console.log(typeof(randomNumber));
console.log("__________________________________________");

randomNumber = 5**2;
console.log("Exp : ", randomNumber);

randomNumber = 111%25;
console.log("mod : ", randomNumber);

randomNumber = 1;
randomNumber++;
console.log("Increment : ", randomNumber);

randomNumber = 4;
randomNumber--;
console.log("Decrement : ", randomNumber);

randomNumber = 25;
console.log(Math.sqrt(randomNumber));

