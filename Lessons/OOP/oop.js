'use strict';

const soldier = {
    health: 400,
    armour: 100,
    sayHello: ()=>{
        console.log('Hello');
    }
};

const John = {
    health: 100
};

// устаревший способ наследования
// John.__proto__ = soldier;
// console.log(John); //{ health: 100 }
// console.log(John.armour); // 100

// текущий метод для наследования свойств
Object.setPrototypeOf(John, soldier);

John.sayHello(); //Hello

const rightJohn = Object.create(soldier);

John.sayHello(); //Hello

