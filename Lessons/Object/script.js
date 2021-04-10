'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
};



// работает но с ворнингами
//console.log(options['colors']['border']);
// console.log(options.colors.border);
// console.log(options.name);
// // удалить свойтсво
// delete options.name;

// console.log(options);

// все значения возвращаются в качестве строк
// [object Object] js не может превратить объекты в объекте  это в строку
// это строковое представление объекта

//for of  с объектами не работает
// for (let key in options){
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// для перебора объекта в объекте нужен перебор в переборе
// перебрать все свойства


for (let key in options){
    
    if(typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    
    }
}


// подсчет количества элементов
let counter=0;
// for (let key in options){
    
//     if(typeof(options[key])=== 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//      counter++;
//     }
// }
// классический перебор
for (let key in options){  
   counter++;
}
console.log(`количество элементов в объекте ${'options'} = ${counter}`);

//! пример с Object.keys возвращает массив данных
// перебор свойств в объекте
let testObject = {
    HID: 3779,
    Code: 'OPB',
    name: 'Website',
    description: {
        Tld1: '.fit',
        Tld2: '.sport',
        Tld3: '.com'
    },
    //метод объекта
    makeTest: function(){
        // метод покажет количество элементов учитывая себя
        return console.log(Object.keys(testObject).length);
    }
};

testObject.makeTest();

// выведет элементы внутри объекта
console.log(Object.keys(testObject));

// покажет количество элементов
console.log(Object.keys(testObject).length);

// деструктуризация объекта
const {Tld1,Tld2,Tld3} = testObject.description;
console.log(Tld1);
console.log(Tld2);
console.log(Tld3);

//запуск в консоли
//console.dir(String);