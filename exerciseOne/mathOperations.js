module.exports['default'] = class MathOperations {
    constructor() {}
    addition(firstNumber, secondNumber) {
        let sum = firstNumber + secondNumber;
        return sum;
    }

    substraction(firstNumber, secondNumber) {
        let difference = firstNumber - secondNumber;
        return difference;
    }

    multiplication(firstNumber, secondNumber) {
        let product = firstNumber * secondNumber;
        return product;
    }

    division(firstNumber, secondNumber) {
        let quotient = firstNumber / secondNumber;
        return quotient;
    }

    modulus(firstNumber, secondNumber) {
        let modulus = firstNumber % secondNumber;
        return modulus;
    }

}

