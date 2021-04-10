'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

const obj = {
    a: 5,
    b: 1
};
// передача значений по ссылке
const copy = obj;

copy.a = 10;

console.log(copy); // { a: 10, b: 1 }

console.log(obj); // { a: 10, b: 1 }

function copyObj(mainObj){
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const person = {
    name: 'Vasya',
    age: 25,
    job: 'welder',
    money:{
        usa: 325,
        uah: 450
    }
};
// создаем копию 
const newPerson = copyObj(person);
// меняем свойства
newPerson.name = 'Petro';
newPerson.age = 34;

console.log(person);
 //{
//     name: 'Vasya',
//     age: 25,
//     job: 'welder',
//     money: { usa: 325, uah: 450 }
//   }
console.log(newPerson);
 //{
//     name: 'Petro',
//     age: 34,
//     job: 'welder',
//     money: { usa: 325, uah: 450 }
//   }

// меняет значение везде от копии до оригинала
newPerson.money.usa = 99;
console.log(newPerson); //{ name: 'Petro', age: 34, job: 'welder', money: { usa: 99, uah: 450 } }
console.log(person); // { name: 'Vasya', age: 25, job: 'welder', money: { usa: 99, uah: 450 } }


// Object.assign()
const num = {
    num1: 1,
    num2: 2,
    num3: {
        x: 7,
        y: 4
    }
};

const add = {
    add1: 17,
    add2: 5
};

// соединить два объекта
console.log(Object.assign(num,add)); // { num1: 1, num2: 2, num3: { x: 7, y: 4 }, add1: 17, add2: 5 }

// создать новый объект на основе старого
const clone = Object.assign({},add);

clone.add1 = 'row';

console.log(add); //{ add1: 17, add2: 5 }
console.log(clone); // { add1: 'row', add2: 5 }
console.log(typeof(clone.add1));

// создать копию массива

const oldArray = [22,44,55,88,91];
const newArray = oldArray.slice();

newArray[2]= 'change';

console.log(oldArray);
console.log(newArray);


// SPREAD 

const video = ['ytube', 'vimeo', 'tiktok'],
    blogs =['wordpress', 'js', 'twitter'],
    internet = [...video,...blogs, 'telegram', ];

console.log(internet);

// разложит входящий массив по элементам
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const anyArray = [1,2,3];
log(...anyArray);

// копирование массива и объекта с помощью spread оператора

const arrr = ['a', 'b', 'c'];

const spreadArrr = [...arrr];

console.log(arrr); // [ 'a', 'b', 'c' ]
console.log(spreadArrr); // [ 'a', 'b', 'c' ]

const objj = {
    one: 1,
    two: 2,
    three: {
        four:'row',
        five: 11
    }
};

const spreadObjj = {...objj};


console.log(objj); //{ one: 1, two: 2, three: { four: 'row', five: 11 } }
console.log(spreadObjj); //{ one: 1, two: 2, three: { four: 'row', five: 11 } }

spreadObjj.three.four = 4;
// неглубокое копирование 
console.log(objj); //{ one: 1, two: 2, three: { four: 4, five: 11 } }
console.log(spreadObjj); // { one: 1, two: 2, three: { four: 4, five: 11 } }