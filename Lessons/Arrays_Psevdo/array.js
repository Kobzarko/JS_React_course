'use strict';

const arr = [1,2,3,5,7,9];

console.log(arr);
// удалить с конца
arr.pop();

console.log(`pop() удалить с конца ${arr}`);
//добавить в конец
arr.push(10);
console.log(`push(10) добавить в конец ${arr}`);
// удалить с начала
arr.shift();
console.log(`shift() удалить с начала ${arr}`);

//добавить сначала
arr.unshift(3);
console.log(`unshift(3) добавить с начала ${arr}`);

// перебор массива
console.log('перебор массива');
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('перебор массива for of');
for(let value of arr){
    console.log(value);
}

// свойство length

const array = [1,2,3,4,5,6,7];
array[99] = 0;
console.log(`количество элементов в массиве =  ${array.length}`);
console.log('на самом деле количество элементов в массиве' + array);
console.log(array);

array.length = 7;
console.log(array);


// foreach 
array.forEach(function (item, i, array){
    console.log(`${i}: ${item} внутри массива ${array}`);
});

// split

const str = prompt('', '');
const products = str.split(', ');
// сортирует строки по алфавиту
products.sort();
console.log(products.join('; '));


// сортировка для чисел
const numArray = [12, 34,67,1,4,20,-2, 2];
// сортирует по первой цифре в числе 
console.log(numArray.sort());

// сортирует правильно используя функцию
console.log(numArray.sort(compareNum));
function compareNum(a,b){
    return a-b;
}

console.log('1'[1]); //undefined
console.log(1 && 2 && null && 0 && false); // null
console.log(typeof(Infinity)); //number