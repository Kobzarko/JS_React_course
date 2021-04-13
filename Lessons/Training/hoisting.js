// hoisting всплытие , возможность обращаться к функции до ее определения

console.log(sum(1, 41));

function sum(a, b) {
  return a + b;
}

console.log(i); // undefined
var i = 42;
console.log(i); // 42

// console.log(num); // error
const num = 42;
console.log(num);

// console.log(nume); // error
let nume = 42;
console.log(nume);

//Function expression & Function declaration

//Function declaration можем использовать до определения
console.log(square(3)); //9
function square(number) {
  return number ** 2;
}

//Function expression использовать только после определения
console.log(squareExp(4)); // error
var squareExp = function square(number) {
  return number ** 2;
};
