let randomArray = [34, 54, 22, 12, 56, 89, 68, 789, 456, 4, 1, 54];

function sortArray(array, type = "Ascending") {
  let j = 0;
  if (type == "Ascending") {
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
    console.log("Sorted array = " ,array);
  } else if(type == "Descending") {
    array.forEach((element) => {
      j++;
      for (let i = j; array[i] != undefined; i++) {
        if (element < array[i]) {
          let temp = element;
          element = array[i];
          array[i] = temp;
          array[j - 1] = element;
        }
      }
    });
    console.log("Sorted array = " ,array);
  } else console.log("Select proper type of sort")

}

sortArray(randomArray, "Descending");
