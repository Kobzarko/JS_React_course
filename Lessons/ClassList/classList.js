const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// количество классов у элемента
console.log(`class amount ${btns[0].classList.length}`);
// получить класс под определенным индексом
console.log(btns[0].classList.item(0));
// добавить класс
btns[1].classList.add('red');
console.log(btns[1].classList.item(0));
// удалить класс 
btns[0].classList.remove('blue');
// удалить или добавить класс 
// нужно учитывать наследование в css
btns[0].classList.toggle('blue');
console.log(btns[0].classList.item(0));

if(!btns[2].classList.contains('green')){
    btns[2].classList.add('green');
    console.log(btns[2].classList.item(0));
}
// добавляем событие на кнопку 
// если нет red = добавляем
// если да удаляем
btns[0].addEventListener('click', ()=>{
    if(!btns[2].classList.contains('red'))
    {
        btns[2].classList.add('red');
    }else{
        btns[2].classList.remove('red');
    }

    //btns[2].classList.toggle('red');
});

// some blue
// console.log(btns[0].className);


// ДЕЛЕГИРОВАНИЕ
// HTML не все элементы поддерживают событтия клика 
wrapper.addEventListener('click', (event)=>{
    //console.dir(event.target);
    // if(event.target && event.target.matches('button.red'))
    if(event.target && event.target.tagName == 'BUTTON'){
        console.log('ЖМАКНУЛ');
    }

    if(event.target && event.target.classList.contains('blue')){
        console.log('СИНИЙ');
        // нет работает
        // console.log(event.target.classList.item(0));
    }
});
// динамически добавляем элемент и делегирование работает
const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);

// динамическая типизация не работает

btns.forEach(item =>{
    item.addEventListener('click', ()=>{
        console.log('foreach ');
    });
});