module.exports['default'] = class ArrayOperations {
    constructor() {}
    concatenation(firstArray, secondArray) {
        let newArray = firstArray.concat(secondArray);
        return newArray;
    }

    sortArray(array) {
        let j=0;
        array.forEach((element) => {
            j++;
            for (let i = j; array[i] != undefined; i++) {
              if (element > array[i]) {
                let temp = element;
                element = array[i];
                array[i] = temp;
                array[j - 1] = element;
              }
            }
          });
          return array;
    }

    DeleteAnElementFromArray(array, value) {
        let index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
          }
        return array;
    }
}

