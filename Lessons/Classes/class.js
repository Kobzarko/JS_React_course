'use strict';

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, bgcolor,text ){
        super(height, width);
        this.bgcolor = bgcolor;
        this.text = text;
    }

    showMyProps(){
        console.log(`Color: ${this.bgcolor} , text: ${this.text}`);
    }
}

const div = new ColoredRectangleWithText(18, 20, 'green', 'some text');

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10,10);
const long = new Rectangle(20,10);

console.log(square.calcArea());
console.log(long.calcArea());
