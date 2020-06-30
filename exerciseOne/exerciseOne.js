const MathOperations = require('./mathOperations.js').default;
const ArrayOperations  = require('./arrayOperations.js').default;

function display(content) {
    console.log(content);
}

const operations = new MathOperations();
display(operations.addition(5,10));
display(operations.substraction(200,2));
display(operations.multiplication(34,5));
display(operations.division(500,5));
display(operations.modulus(23456,2));

let firstArray = [3,4,5,6],
    secondArray = [7,8,9,0];
const arrOperations = new ArrayOperations();
display(arrOperations.concatenation(firstArray,secondArray));
display(arrOperations.sortArray(firstArray));
display(arrOperations.DeleteAnElementFromArray(secondArray,9));