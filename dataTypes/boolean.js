function checkBooleanValue(value) {
  console .log("____________________________________________");
  console.log("Type of element : " + typeof value);
  console.log("Converted into " + typeof Boolean(value));
  console.log("Boolean value " + Boolean(value));
}

checkBooleanValue(6);
checkBooleanValue("");
checkBooleanValue(" ");
checkBooleanValue("nk");
checkBooleanValue(9.99);
checkBooleanValue(-8.456);
checkBooleanValue(null);

function compareNumberAndPerformOperation(firstNumber, secondNumber) {
    console .log("____________________________________________");
    console.log("The numbers are " + firstNumber +" , "+ secondNumber);
      if (firstNumber > secondNumber) {
          console.log("Difference = ", firstNumber - secondNumber);
        } 
        else if (firstNumber<secondNumber) {
            console.log("Sum = ", firstNumber + secondNumber);
        }
        else console.log("Sqrt = ", Math.sqrt(firstNumber) );
      
  }
  
  compareNumberAndPerformOperation(96,78);
  compareNumberAndPerformOperation(43,67);
  compareNumberAndPerformOperation(7,7);