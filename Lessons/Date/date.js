'use strict';

// create new date
const now = new Date();
console.log(now);
// учитывает пояса
const date = new Date(0);
console.log(date);

// вычисляем разницу между датами
let start = new Date();

for(let i = 0; i < 300000; i++){
    let some = i**3;
}
let end = new Date();
console.log(`loop has been working ${end - start} mmsec`);

// получение компонентов даты
const dateYear = new Date();

// установить время учитывая UTC +0
console.log(dateYear.setHours(15,34));
console.log(dateYear);


console.log(dateYear.getFullYear());
// 
console.log(dateYear.getMonth());
// день месяца
console.log(dateYear.getDate());
// номер дня недели с воскресенья
console.log(dateYear.getDay());
// получить часы
console.log(dateYear.getHours());
// получить часы согласно часовому поясу
console.log(dateYear.getUTCHours());
// разница в минутах часовых поясов
console.log(dateYear.getTimezoneOffset());
// разница в минутах текущего времени и 1970
console.log(dateYear.getTime());