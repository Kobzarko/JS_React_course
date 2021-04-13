"use strict";
// объекты массивы функции передают ссылку при создании новых переменных
let a = 42;
let b = a;
b++;
console.log("a", a); //a 42
console.log("b", b); //b 43

// копируется ссылка на массив. Изменяем ссылку изменяем оригинал
let arrA = [1, 2, 3];
let arrB = arrA;
// let arrB = arrA.concat(); // изолируем arrA от изменений arrB
console.log("arrA", arrA);
arrB.push(4);

let arrC = [1, 2, 3, 4];

console.log("arrA", arrA);
console.log("arrB", arrB);

console.log(arrA === arrB); // true здесь ссылка
console.log(arrA === arrC); // false здесь другой объект
