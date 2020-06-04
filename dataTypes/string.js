let randomString = "",
    stringOne,
    stringTwo;
console.log(typeof(randomString));

randomString = "2";
console.log(typeof(randomString));

randomString = String(2);
console.log(typeof(randomString));

stringOne = "One";
stringTwo = "Two";
randomString = stringOne + stringTwo;
console.log(randomString);
console.log(typeof(randomString));
console.log('_____________________________________________');

stringOne = "One";
stringTwo = 2;
randomString = stringOne + stringTwo;
console.log(randomString);
console.log(typeof(randomString));
console.log('_____________________________________________');

stringOne = "";
stringTwo = 9497;
randomString = stringOne + stringTwo;
console.log('Addition : ',randomString);
console.log(typeof(randomString));
console.log('_____________________________________________');

stringOne = "One";
stringTwo = "Two";
randomString = stringOne - stringTwo;
console.log('Substraction : ',randomString);
console.log(typeof(randomString));
console.log('_____________________________________________');

stringOne = "One";
stringTwo = "Two";
randomString = stringOne / stringTwo;
console.log('Division : ',randomString);
console.log(typeof(randomString));
console.log('_____________________________________________');

stringOne = "One";
stringTwo = "Two";
randomString = stringOne * stringTwo;
console.log('Multiplication : ',randomString );
console.log(typeof(randomString));
console.log('_____________________________________________');