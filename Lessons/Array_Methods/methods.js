'use strict';

// FILTER

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

// // MAP 

// const answers = ['IvAn', 'AnnA', 'pAsHa'];

// const lowResult = answers.map(item=>item.toLowerCase());

// console.log(lowResult);

// // SOME 

// const some = [4, 'jgkh', 'kbkbib'];

// console.log(some.some(item=> typeof(item) === 'number'));

// // EVERY

// const every = [4, 'jgkh', 'kbkbib'];
// const empty = [];

// console.log(every.every(item=> typeof(item) === 'number'));
// console.log(`empty is ${empty.some(item=> typeof(item) === 'number')} because empty array is false with some()`);
// console.log(`empty is ${empty.every(item=> typeof(item) === 'number')} because empty array is true with every()`);

// // REDUCE

// const arr = [4, 5, 1, 7, 6, 3];

// // 3 начальное значение
// const arrSum = arr.reduce((sum, current) => sum + current, 3);

// console.log(arrSum); // 26

// const arrWords = ['apple', 'banana', 'plum'];

// const arrSumWords = arrWords.reduce((sum, current) => `${sum}, ${current}`);

// console.log(arrSumWords); // 26

// // OBJECT.ENTRIES

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     cat: 'animal',
//     dog: 'animal'
// };

// const newObjArr = Object.entries(obj)
// .filter(item=>item[1] === 'person')
// .map(item => item[0].toUpperCase())
// .reduce((item, current) => `${item}, ${current}`);

// console.log(newObjArr); //IVAN, ANN

const enter = document.querySelector('#enter');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');
const newInputArr = [];
btn.addEventListener('click', ()=>{
    //e.preventDefault();
    newInputArr.push(enter.value);
    enter.value = '';
    console.log(newInputArr);
    const output = document.createElement('div');
    output.innerHTML = `<span>${result}</span>`;
    // if(enter.value !='' && enter.value == null ) {
      
    // }
});