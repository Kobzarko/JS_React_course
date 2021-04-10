'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// при помощи этих свойств получаем ширину и высоту модального окна можем менять
const clientWidth = box.clientWidth;
const clientHeight = box.clientHeight;

console.log(clientWidth); // 383
console.log(clientHeight); // 334

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

console.log(offsetWidth); // 400
console.log(offsetHeight); // 350

// высота и ширина прокрутки
const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;

console.log(scrollWidth); // 382
console.log(scrollHeight); // 1382

btn.addEventListener('click', ()=>{
    // задать инлайн стили
   //box.style.height = scrollHeight + 'px';
   // при прокрутке и нажатии кнопки получим в консоль количество прокрученного текста
   console.log(box.scrollTop);

});
// получаем все координаты элемента
console.log(box.getBoundingClientRect());
// получить отдельно координаты высоты от верха окна
console.log(box.getBoundingClientRect().top);

// получаем все стили элемента со страницы стучимся как к объекту
const style = window.getComputedStyle(box);
console.log(style.display);

// фича для стрелки вверх указать значение 0
console.log(document.documentElement.scrollTop);

// перемещение по странице от текущей позиции
window.scrollBy(0,1000);

window.scrollTo(0, 1000);