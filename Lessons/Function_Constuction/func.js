'use strict';

function User(name, age ){
    //properties
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello =()=>{
        console.log(`Hello ${this.name}`);
    };
}
// при использовании =()=> {}  ${this.name} выдаст undefined
User.prototype.exit = function(){
    console.log(`User ${this.name} has gone`);
};

const user1 = new User('Yevhen', 30);
const user2 = new User('Ivan', 20);
console.log(user1);
console.log(user2);
user1.hello();
user1.exit();
