'use strict';

// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timerId,
    counter;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    // по умолчанию браузер использует 4 мсек
    const id = setInterval(frame, 10);

    function frame(){
            if(pos == 300){
                clearInterval(id);
            }else{
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';

            }
    }
}
btn.addEventListener('click', myAnimation);



// btn.addEventListener('click', ()=>{
//     // timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);

// });


// function logger(){
//     if(counter == 3){
//         clearInterval(timerId);
//     }
//     console.log('Hello logger');
//     counter++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello log');
//     id = setTimeout(log, 500);
// }, 500);