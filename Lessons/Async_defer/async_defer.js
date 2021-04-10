'use strict';

const pi = document.querySelectorAll('p');
console.log(pi);

// динамический скрипт

function loadScript(src){
    const script = document.createElement('script');
script.src = src;
// отключить ассинхронность
script.async = false;
// помещает элемент в конец себя append()
document.body.append(script);
}

loadScript('dynamicScript.js');