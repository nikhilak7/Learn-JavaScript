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

