'use strict';

const person = {
    name: 'John',
    lastname: 'Doe',
    phone: '+380671234567',
    parents: {
        mom: 'Olga',
        dad: 'Victor'
    }
};


//JSON.stringify(person) - преобразует в json формат
const personToJSON = JSON.stringify(person);

console.log(personToJSON);
// {"name":"John","lastname":"Doe","phone":"+380671234567"}

// парсим обратно в объект
const personToObject = JSON.parse(personToJSON);
personToObject.parents.mom = '';
// { name: 'John', lastname: 'Doe', phone: '+380671234567' }
console.log('personToObject');
console.log(personToObject);
console.log('person');
console.log(person);

