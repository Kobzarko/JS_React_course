'use strict';

// 1 Обычная функция: this = window
// но если use strict - undefined
//'use strict'= undefined
// without 'use strict' = object Window
// function showThis(){
//     console.log(this); 
// }


// function showThis(a,b){
//     console.log(this); //undefined
//     function sum(){
//         console.log(this); //undefined
//         return a + b;
//     }
//     console.log(sum()); // 14
// }
// showThis(5, 9);


// 2 контекст метода в объекте ссылается на сам объект 
// const obj = {
//     a: 5,
//     b: 10,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout(); // undefined
//         console.log(this); // { a: 5, b: 10, sum: [Function: sum] }
//     }
// };

// obj.sum(); //this.js:26 {a: 5, b: 10, sum: ƒ}

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }


// const user = {
//     name:'John'
// };

// // bind() - создает новую функцию
// sayName.call(user , 'Smith'); //{ name: 'John' } John

// sayName.apply(user, ['Smith']); //{ name: 'John' } John

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3)); // 6

// Practice

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
});

const obj = {
    num:5,
    sayNumber: function(){
        const say =()=>{
            console.log(`say = () ${this.num}`);
        };
        say();
    }
};

obj.sayNumber();

const double = (a) => a*2; 
