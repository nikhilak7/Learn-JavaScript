let person = {firstName : "Rachel" ,
lastName : "Green" ,
age : 30 ,
eyeColor : "Brown" ,
student : true ,
}

console.log(typeof(person));
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person["eyeColor"]);
console.log(person.student);

let numberOne = 23,
    numberTwo = 32,
    mathOperations = {
        printOutput : function(operation) {
            console.log("output by "+operation+" = "+this[operation]);
        }
    };

mathOperations.sum = numberOne + numberTwo;
mathOperations.difference = numberTwo - numberOne;
mathOperations.product = numberOne * numberTwo;
mathOperations.quotient = numberTwo / numberOne;
console.log(mathOperations);

mathOperations.printTitle = function() {
    console.log("mathOperations");
}

mathOperations.printTitle();
mathOperations.printOutput("quotient");
mathOperations.printOutput("difference");
