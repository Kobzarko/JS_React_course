"use strict";

// null, undefined, boolean, number, string, object, Symbol, BigInt

console.log(typeof 0);
console.log(typeof true);
console.log(typeof "string"); // "", '', ``," "
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof Symbol("JS"));
console.log(typeof null); // object
console.log(typeof function () {}); // function
console.log(typeof NaN); // not a number but type number
console.log(1 / 0); // Infinity

// Приведение типов

let lang = "JavaScript";
if (lang) {
  console.log("The best language is", lang);
}

// '', 0, null, undefined, NaN, false

console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("0"));
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true

// строки и числа

console.log(1 + "2"); // 12 - string
console.log("" + 1 + 0); // 10 - string
console.log("" - 1 + 0); // -1 - number
console.log("3" * "8"); // 24 - number
console.log(4 + 10 + "px"); // 14px - string
console.log("42" - 40); // 2 number
console.log("42px" - 40); // NaN
console.log(null + 2); // 0 + 2 = 2 number
console.log(undefined + 42); // NaN

// == vs === сравнение значения с приведением типов vs без приведения типов

console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(undefined === null); // false
console.log(undefined == null); // true
console.log("0" == false); // 0 = false -> true
console.log("0" == 0); // true
console.log("0" === 0); //false

// странности в js
console.log(false == ""); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log("" == 0); // true
console.log("" == []); // true
console.log("" == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
