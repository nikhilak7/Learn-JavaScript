const Volume  = require('./class.js').default; 

const boxThree = new Volume(4,2,8);
display(boxThree.volume());
display(boxThree.area());
display(boxThree.perimeter());

function display(content) {
    console.log(content);
}
