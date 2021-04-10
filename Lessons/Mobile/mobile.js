//touchstart Коснулись экрана
//touchmove  Двигаем пальцем
// touchend Палец убрали
// touchenter срабатывает событие при наскальзывании пальцем на элемент
// touchleave когда палец уходит с элемента с событием
// touchcancel точка прикосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', ()=>{
    const box = document.querySelector('.box');
    // сработает именно на этом элементе
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        console.log('Start');
        // touches количество пальцев
        console.log(e.touches);
        // targetTouches количество пальцев на данном элементе
        console.log(e.targetTouches);
        // changedTouches количество убранных пальцев
        console.log(e.changedTouches);
    });
    // для щепотки и свайпа
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
        // получаем координаты
        console.log(`pageX  ${e.targetTouches[0].pageX}`);
        console.log(`pageY  ${e.targetTouches[0].pageY}`);

    });

    box.addEventListener('touchend', (e)=>{
        e.preventDefault();
        console.log('End');
    });
});


