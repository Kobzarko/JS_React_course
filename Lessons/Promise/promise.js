'use strict';

console.log('Запрос данных...');

const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('ready update data...');
    
        const product ={
            name: 'TV',
            price: 15000
        };
   
        resolve(product);
    }, 2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            product.status = 'order';         
            resolve(product);
        }, 2000);
    });
}).then(data=>{
    data.modify=true;
    return data;
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR');
}).finally(()=>{
    console.log('Finally');
});

const test = time =>{
    return new Promise(resolve => {
        setTimeout(()=>resolve(), time);
    });
};

test(1000).then(()=> console.log('1000 ms'));
test(2000).then(()=> console.log('2000 ms'));

Promise.all([test(1000),test(2000)]).then(()=>{console.log('All');});
Promise.race([test(1000),test(2000)]).then(()=>console.log('first promise is done'));
// const obj = Object.values(product);
// const result = obj.forEach(item=>console.log(item));


// создать обещание
// const req = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Подготовка данных...');
//         const product ={
//             name: 'TV',
//             price: 2000
//         };
//         //reject() вызовет блок кода catch()
//         // если ошибка то будет catch();
//         //reject();
//         resolve(product);
 
//     },2000);

// });
// // если все отлично то сработает этот код
// // действия будут выполняться друг за другом
// // мы добиваемся последовательности кода
// req.then((product)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             product.status = 'ordered';
//             console.log(product);
//         }, 2000);
//     });
// }).then(data =>{
//     // добавить свойство нашему объекту
//     data.modify = true;
//     return data;
// }).then(data =>{
//     console.log(data);
// }).catch(()=>{
//     console.log('something wrong!!!');
// });


// // ALL() RAISE()
// // функция принимает время через которое вернет новый промис, который выполнит положительное условие кода
// const test = time =>{
//     return new Promise(resolve =>{
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(2000).then(()=>console.log(`2000 ms`));
// // test(1000).then(()=>console.log(`1000 ms`));

// // Promise.all() (массив) служит для того чтобы убедиться , что все наши промисы выполнились
// Promise.all([test(1000),test(2000)]).then(()=>console.log('all promises are done'));
// // race() реагирует на первый выполнившийся промис, неважно был он решен или отменен 
// Promise.race([test(1000),test(2000)]).then(()=>console.log('first promise is done'));


