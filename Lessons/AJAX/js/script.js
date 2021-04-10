'use strict';
// работает на локальном сервере
// получение данных о странице
const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    //  request.open('GET','url',async,login,password);
    // путь к json относительно index.html
    request.open('GET','js/current.json');
    // получение заголовка
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    // отправка на сервер
    request.send();
    // status 200 404 500
    // statusText 
    // response ответ
    // readyState текущее состояние запроса
        //  readystatechange
    // request.addEventListener('readystatechange', ()=>{
    //    //узнать состояние запроса
    //     if(request.readyState === 4 && request.status === 200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value/ data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'something wrong';
    //         return;
    //     }
    // });
        // load event работает один раз
    request.addEventListener('load', ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            console.log(typeof(data.current.usd));
            inputUsd.value = (+inputRub.value/data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'something wrong';
        }
    });

});