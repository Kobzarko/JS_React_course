'use strict';

// onclick='alert("click button 1")'

//
const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay'),
    btnOverlay = overlay.querySelector('button');


// так делать нельзя
// btn.onclick = function(){
//     alert('first click button');
// };

// btn.onclick = function(){
//     alert('second click button');
// };
// прикрепляем событие к элементу (type: "click", listener: (this: HTMLButtonElement, ev: MouseEvent)
// btn.addEventListener('click', ()=>{
//     alert('callback click button');
// });

// event - объект события для получения события отловить событие
// type: "mouseenter" тип события
// target: button#btn элемент на котором произошло событие
btn.addEventListener('mouseenter', (event)=>{
    console.log(event);
});
// target: button#btn элемент на котором произошло событие
btn.addEventListener('click', (event)=>{
    // при клике на элемент , элемент будет удален
    event.target.remove();
});

// таргетирование ввиде функции
const consoleElement = (e) =>{
    console.log(e.target);
    let i;
    i++;
    if(i==1){
        // удалить событие с элемента
        btn.removeEventListener('contextmenu', consoleElement);
    }
};
// при нажатии правой кнопкой мыши по указаному элементу сработает функция consoleElement
btn.addEventListener('contextmenu', consoleElement);

//currentTarget текущее событие
const consoleOverlay = (e) =>{
    console.log(e.currentTarget);
    console.log(e.type);
 
};
// всплытие событий 
// выполнение события происходит начиная с вложенного элемента - события

btnOverlay.addEventListener('click', consoleOverlay);
overlay.addEventListener('click', consoleOverlay);

// отмена стандартного поведения события event.preventDefault();


const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target);
});

