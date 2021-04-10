// вывести body в консоли
//console.log(document.body);

//вывести весь index.html
//console.log(document.documentElement);

// все узлы тега body
// console.log(document.body.childNodes);

// // <script src="DOM.js"></script>
// console.log(document.body.lastChild);
// // <script src="DOM.js"></script>
// console.log(document.body.lastElementChild);

// // получить родителей соседей детей
// //<div class="first"></div>
// console.log(document.querySelector('#current').parentNode);
// // получить следующий элемент не узел <div class="first"></div>
// console.log(document.querySelector('#current').parentElement);

// //<div class="wrapper"></div>
// console.log(document.querySelector('#current').parentNode.parentNode);
// //<div class="wrapper"></div> первый элемент родителя
// console.log(document.body.firstElementChild);


// // data-атрибуты пишутся с data-
// // получить  data - атрибут
// console.log(document.querySelector('[data-current="3"]'));
// // получить текстовую ноду перенос строки будет
// console.log(document.querySelector('[data-current="3"]').nextSibling);

// // получить следующий элемент nextElementSibling  <li>4</li>
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// фильтрация элементов псевдомассива через for of
for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}