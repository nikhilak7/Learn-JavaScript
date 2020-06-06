let randomQueue = [],
    randomStack = [];

addItemToQueue = (queue, element) => {
    let arrayLength = queue.length;
    queue[arrayLength] = element;
}

deleteItemFromQueue = (queue) => {
   for (let index = 1; queue[index] != undefined; index++) {
       queue[index-1] = queue[index];
       if(queue[index+1] == undefined){
           queue.length = index;
       }       
   }
}
addItemToQueue(randomQueue, "string");
addItemToQueue(randomQueue, 9);
console.log(randomQueue);
deleteItemFromQueue(randomQueue);
console.log(randomQueue);

addItemToStack = (stack, element) => {
    let sizeOfStack = stack.length;
    for (let index = sizeOfStack; index >= 1; index--) {
        stack[index] = stack[index-1];
    }
    stack[0] = element;
}

addItemToStack(randomStack, 8);
addItemToStack(randomStack, 3);
addItemToStack(randomStack, 5);
console.log(randomStack);
