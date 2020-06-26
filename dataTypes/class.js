class RectangularBox {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    area() {
        let baseArea = this.length*this.width;
        return `Base Area = ${baseArea}`;
    }

    perimeter() {
        let basePerimeter = (this.length+this.width)*2;
        return `Base Perimeter = ${basePerimeter}`;
    }

}

module.exports['default'] = class Volume extends RectangularBox {
    constructor(length, width, height) {
        super(length, width, height);
    }
    
    volume() {
        let volume = this.length*this.width*this.height; 
        return `Volume = ${volume}`;
    }

}

// function display(content) {
//     console.log(content);
// }

// const boxOne = new Volume(9,7,20);
// display(boxOne.volume());
// display(boxOne.area());
// display(boxOne.perimeter());

// const boxTwo = new RectangularBox(5,6,10);
// // display(boxTwo.volume()); subclass cannot be inhereted to superclass
// display(boxTwo.area());
// display(boxTwo.perimeter());
