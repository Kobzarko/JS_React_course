'use strict';
// используем на сервере, на live и консоли не работает
// fetch использует промисы
// GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
//POST
// headers обязательно
fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
}
)
  .then(response => response.json())
  .then(json => console.log(json));
// {name: "Alex", id: 101}