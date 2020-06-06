let randomArray = [3, 4, 5, 6, 7],
  randomString;

console.log(typeof randomArray);
console.log(randomArray[2]);

randomArray[2] = "Number";
console.log(randomArray[2]);

randomArray[3] = Array("string");
console.log(randomArray);

console.log(randomArray);
console.log("");
function createArrayWithIndex(index) {
  for (i = 0; i < index; i++) {
    randomArray[i] = i + 1;
  }
  return randomArray;
}

function printElementsOfArray() {
  let i = 1;
  randomArray.forEach((element) => {
    console.log(i++ + "th element is " + element);
  });
}

function printMultiplesOfNumber(number) {
  for (let i = 0; randomArray[i] != undefined; i++) {
    if (randomArray[i] % 2 == 0) {
      console.log("Multiples of 2 =", randomArray[i]);
    }
  }
}

randomArray = createArrayWithIndex(10);
console.log(Array.isArray(randomArray));
printElementsOfArray();
console.log("");
printMultiplesOfNumber(2);
