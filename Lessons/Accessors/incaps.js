"use strict";

// пример с инкапсуляцией функции
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  //   #surname(){return 'Shevchencko'}
  say() {
    console.log(`User name: ${this.name} ${this.surname}, age: ${this._age}`);
  }
  // getter
  get age() {
    return this._age;
  }
  // setter
  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("invalid value");
    }
  }
}

const petro = new Person("petro", 27);
console.log(petro.age);
petro._age = 99;
console.log(petro.age);
petro.say();

// пример с инкапсуляцией функции
function User(name, age) {
  this.name = name;
  let userAge = age;

  this.say = function () {
    console.log(`User name: ${this.name}, age: ${userAge}`);
  };

  this.getAge = function () {
    return userAge;
  };

  this.setAge = function (age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("invalid value");
    }
  };
}

const oleg = new User("Oleg", 27);

console.log(oleg.name);
console.log(oleg.getAge());

oleg.setAge(33);
oleg.setAge(333);

console.log(oleg.getAge());

oleg.say();

// пример без инкапсуляции
function User(name, age) {
  this.name = name;
  this.age = age;

  this.say = function () {
    console.log(`User name: ${this.name}, age: ${this.age}`);
  };
}

const ivan = new User("Ivan", 30);

console.log(ivan.name);
console.log(ivan.age);

ivan.age = 35;
ivan.name = "Petro";

ivan.say();
