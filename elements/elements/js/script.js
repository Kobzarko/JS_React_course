'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


console.log(box);
// console.log(buttons[1]);
// console.log(circles);
// hearts.forEach(item => {
//     console.log(item);
// });
//console.log(oneHeart);

box.style.backgroundColor = 'green';
box.style.width = '350px';
// переопределим стили  box одной строкой с переменной
let color = 'chocolate';
let num = 500;
box.style.cssText = `background-color: ${color}; width: ${num}px`;

// buttons.style.borderRadius = '50%'; - ошибка
buttons[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'orange';

buttons[0].style.cssText = 'background-color: tomato; border-radius: 10%';
console.log(buttons[0]);

// ПЕРЕБОР ЦИКЛОМ элементов изменение стилей
// for(let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item)=>{
    item.style.backgroundColor = 'green';
});

// создать элемент
const div = document.createElement('div');
const block = document.createElement('div');
// deprecated
//const text = document.createTextNode('here I am');
const p = document.createElement('p');
const a = document.createElement('a');

// add class 
div.classList.add('black');
block.classList.add('green');
p.classList.add('red');

// добавить элемент в конец body
document.body.append(block);

// добавить элемент в конец wrapper
//wrapper.append(div);
// добавить элемент в конец wrapper устаревшее
wrapper.appendChild(div);

// добавить элемент в начало wrapper
//wrapper.prepend(div);

// добавить перед элементом 
//circles[0].before(div);
// устаревший div- что вставляем, hearts[1] - перед кем
//wrapper.insertBefore(div, hearts[1]);

// добавить после элемента
//circles[0].after(div);

// удалить элемент 
//hearts[1].remove();
//wrapper.removeChild(hearts[1]);

// заменить элемент другим элементом
//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[1]);

// добавить текст в элемент
//div.innerHTML = 'Hello world';

// добавить HTML текст в элемент
div.innerHTML = '<h1>PRIVET</h1>';

// добавить только текст в элемент
block.textContent = 'COOL';

//добавить кусок html кода перед и после элемента
div.insertAdjacentHTML('beforebegin', '<h3>Beforebegin</h3>');

