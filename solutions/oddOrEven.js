let oddNumber = [],
    evenNumber = [];

checkOddOrEven = (number) => {
    if (number % 2 == 0) {
        console.log(number + " is even");
        evenNumber.push(number);
    }
    else{
        console.log(number + " is odd");
        oddNumber.push(number);
    }
}

concatenateArray = () => {
    let newArray = oddNumber.concat(evenNumber);
    return newArray;
}

checkOddOrEven(7);
checkOddOrEven(6);
checkOddOrEven(567);
checkOddOrEven(3456);
let concatenatedArray = concatenateArray();
console.log("Concatenated array = ", concatenatedArray);