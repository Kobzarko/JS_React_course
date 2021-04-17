// замыкание момент когда функция имеет доступ до переменных из выше стоящего скоупа

function sayHelloTo(name){
    const message = 'Hello '+ name;

    return function(){
        console.log(message);
    };
}

const helloToElena = sayHelloTo('Lena');
console.log(helloToElena);
console.log(helloToElena());