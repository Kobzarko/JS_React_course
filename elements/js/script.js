'use strict';

'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


console.log(box);
// console.log(buttons[1]);
// console.log(circles);
// hearts.forEach(item => {
//     console.log(item);
// });
//console.log(oneHeart);

box.style.backgroundColor = 'green';
box.style.width = '350px';
// ������������� �����  box ����� ������� � ����������
let color = 'chocolate';
let num = 500;
box.style.cssText = `background-color: ${color}; width: ${num}px`;

// buttons.style.borderRadius = '50%'; - ������
buttons[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'orange';

buttons[0].style.cssText = 'background-color: tomato; border-radius: 10%';
console.log(buttons[0]);

// ������� ������ ��������� ��������� ������
// for(let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item)=>{
    item.style.backgroundColor = 'green';
});

// ������� �������
const div = document.createElement('div');
const block = document.createElement('div');
// deprecated
//const text = document.createTextNode('here I am');
const p = document.createElement('p');
const a = document.createElement('a');

// add class 
div.classList.add('black');
block.classList.add('green');
p.classList.add('red');

// �������� ������� � ����� body
document.body.append(block);

// �������� ������� � ����� wrapper
//wrapper.append(div);
// �������� ������� � ����� wrapper ����������
wrapper.appendChild(div);

// �������� ������� � ������ wrapper
//wrapper.prepend(div);

// �������� ����� ��������� 
//circles[0].before(div);
// ���������� div- ��� ���������, hearts[1] - ����� ���
//wrapper.insertBefore(div, hearts[1]);

// �������� ����� ��������
//circles[0].after(div);

// ������� ������� 
//hearts[1].remove();
//wrapper.removeChild(hearts[1]);

// �������� ������� ������ ���������
//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[1]);

// �������� ����� � �������
//div.innerHTML = 'Hello world';

// �������� HTML ����� � �������
div.innerHTML = '<h1>PRIVET</h1>';

// �������� ������ ����� � �������
block.textContent = 'COOL';

//�������� ����� html ���� ����� � ����� ��������
div.insertAdjacentHTML('beforebegin', '<h3>Beforebegin</h3>');

