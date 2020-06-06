let randomArray = [3,4,5,6,7], 
    randomString;

// console.log(typeof(randomArray));
// console.log(randomArray[2]);

// randomArray[2] = "Number";
// console.log(randomArray[2]);

// randomArray[3] = Array('string');
// console.log(randomArray);


// console.log(randomArray);

// for ( i = 0; i < lengthOfArray; i++) {
//     console.log(i+1 + "th element is " + randomArray[i]);
// }

// for ( i = 0 ;i < lengthOfArray; i++) {
//     if(randomArray[i]%2 == 0 ){
//         console.log('Multiples of 2 =' , randomArray[i]);
//     }   
// }

function createArrayWithIndex(index) {
    for(i=0; i<index; i++){
        randomArray[i] = i + 1;
    }
    return randomArray;
}

function printElementsOfArray() {
    let i=1;
    randomArray.forEach(element => {
    console.log(i++ + "th element is " + element);
    });
}

function printMultiplesOfNumber(number){
    for (let i = 0 ;randomArray[i] != undefined; i++) {
        if(randomArray[i]%2 == 0 ){
            console.log('Multiples of 2 =' , randomArray[i]);
        }   
    }
}

console.log(randomArray.length);
console.log(randomArray[5] == undefined);

randomArray = createArrayWithIndex(10);
printMultiplesOfNumber(2);
printElementsOfArray();
