"use strict";
// создаем табы
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  // спрятать контент
  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  // показать контент
  function showTabContent(i = 0) {
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
// делегирование
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2021,02,02';
  const promotionDescr = document.querySelector('.promotion__descr'),
    spanDate = promotionDescr.querySelector('.spanDate');

  // установить дату конца акции
  function setDateSaleEnd(deadline, spanDate) {

    let date = new Date(deadline);
    let day = new Intl.DateTimeFormat("ru", {
      month: "long",
      day: "numeric"
    });
    let time = new Intl.DateTimeFormat("ru", {
      hour: "numeric",
      minute: "numeric"
    });
    spanDate.textContent = `${day.format(date)} в ${time.format(date)}`;
    // console.log(day.format(date));
    // console.log(time.format(date));
    // console.log(date);
  }

  setDateSaleEnd(deadline, spanDate);

  function getTimeRemaining() {
    const t = Date.parse(deadline) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / (1000 * 60) % 60)),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      "hours": hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  // добавить 0 если число меньше 10
  function getZero(num) {
    if (num > 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  // не работает
  // function updateClock(endtime, days, hours, minutes, seconds,timeInterval){
  //   const t = getTimeRemaining(endtime);

  //   days.innerHTML = t.days;
  //   hours.innerHTML = t.hours;
  //   minutes.innerHTML = t.minutes;
  //   seconds.innerHTML = t.seconds;
  //   if(t.total <= 0){
  //     clearInterval(timeInterval);
  //   }
  // }

  function setClock(selector) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    // ПРОТИВ мигания верстки
    updateClock();
    function updateClock() {
      const t = getTimeRemaining();

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        days.textContent = "00";
      }
    }

    setClock('.timer', deadline);

    // MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal');
    // modalCloseBtn = document.querySelector('[data-close]');


    function openModal() {
      modal.classList.add('show', 'fade');
      modal.classList.remove('hide');
      // либо через toggle
      // modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';
      // очистить таймаут если окно открыто
      clearInterval(modalTimerId);
    }

    // функция закрыть окно
    function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show', 'fade');
      // либо через toggle
      // modal.classList.toggle('show');
      // размораживаем страницу
      document.body.style.overflow = '';
    }

    // перебрать кнопки 
    modalTrigger.forEach(btn => {
      // открыть окно
      btn.addEventListener('click', openModal);
    });

    // закрыть окно
    // modalCloseBtn.addEventListener('click',closeModal);
    // modalCloseBtn.addEventListener('click', ()=>{
    //   modal.classList.add('hide');
    //   modal.classList.remove('show');
    //    // либо через toggle
    //   // modal.classList.toggle('show');
    //   document.body.style.overflow = '';
    // });

    // закрыть окно без крестика
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
      }
    });

    // закрыть окно через escape
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
        console.log('escape');
      }

    });

    // вызвать модальное окно
    const modalTimerId = setTimeout(openModal, 50000);
    // 
    function showModalByScroll() {
      // если кол-во прокручен. px + значение  внутренней высоты элемента >=полная высота  элемента
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        // открыть модальное окно
        openModal();
        // чтобы окно не открывалось каждый раз от скрола
        // событие нужно удалить после одного выполнения
        window.removeEventListener('scroll', showModalByScroll);
      }
    }
    // показать модальное окно если пользователь долистал страницу до конца
    window.addEventListener('scroll', showModalByScroll);

    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        // родительский элемент для нашей карточки
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27.6;
        this.classes = classes;
        //меняем цену теперь цена модифицирована
        this.changeToUAH();
      }
      // конвертатор
      changeToUAH() {
        this.price = +this.price * this.transfer;
      }

      // создать элемент поместить верстку, дополнить данными , поместить на страницу
      render() {
        const element = document.createElement('div');
        // передаем классы по умолчанию 
        if (this.classes.length === 0) {
          this.classes = "menu__item";
          element.classList.add(this.classes);
        } else {
          this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">
            ${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>`;
        // поместить наш элемент во внутрь нашего родителя
        this.parent.append(element);
      }
    }

    // получение данных с сервера
    const getResource = async (url) => {
      const res = await fetch(url);
      // ловим ошибки
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
      return await res.json();
    };

    // получаем данные для карточек с сервера и создаем
    getResource('http://localhost:3000/menu')
      .then(data => {
        // используем синтаксис деструктуризации объекта
        data.forEach(({ img, altimg, title, descr, price }) => {
          new MenuCard(img, altimg, title, descr, price, '.menu.container').render();
        });
      });



    // альтернатива доступа к данным без классов для одного раза
    // делаем запрос на сервер для получения данных
    getResource('http://localhost:3000/menu')
      .then(data => createCard(data));
    // создать функцию с параметром объекта находящегося на сервере
    function createCard(data) {
      // деструктуризировать наш объект на его свойства
      data.forEach(({ img, altimg, title, descr, price }) => {
        // создать елемент
        const element = document.createElement('div');
        // добавить елементу класс со стилем
        element.classList.add('menu__item');
        // создать верстку карточки
        element.innerHTML = `
          <img src=${img} alt=${altimg} />
          <h3 class="menu__item-subtitle">${title}</h3>
          <div class="menu__item-descr">
            ${descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${price}</span> грн/день</div>
          </div>`;
        // добавляем наш елемент в конец тега на страницу где находится классы .menu .container
        document.querySelector('.menu .container').append(element);
      });
    }







    // альтернатива вызова создания объекта
    // new MenuCard().render();
    // const cardVegy = new MenuCard(
    //   "img/tabs/vegy.jpg",
    //   "vegy",
    //   'Меню "Фитнес"',
    //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //   9,
    //   '.menu .container'
    // );
    // cardVegy.render();

    // const cardElite = new MenuCard(
    //   "img/tabs/elite.jpg",
    //   "elite",
    //   'Меню "Премиум"',
    //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //   20,
    //   '.menu .container'
    // );
    // cardElite.render();

    // const cardPost = new MenuCard(
    //   "img/tabs/post.jpg",
    //   "post",
    //   'Меню "Постное"',
    //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных  вегетарианских стейков.',
    //   16,
    //   '.menu .container'
    // );
    // cardPost.render();

    // Forms

    const forms = document.querySelectorAll('form');

    // список сообщений при отправке запроса
    const message = {
      loading: 'img/form/spinner.svg',
      success: "Thank you , we will contact with you",
      failure: 'Something wrong you should try again'
    };

    // под каждую форму подвязываем функцию postData
    forms.forEach(item => {
      bindpostData(item);
    });

    // отвечает за постинг данных на сервер
    // async - показывает что это асинхронный код
    // await  ждет выполнения кода 
    // работают в паре
    const postData = async (url, data) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: data
      });
      // возвращает промис
      return await res.json();
    };

    // функция отвечает за привязку всех данных к постингу
    function bindpostData(form) {
      form.addEventListener('submit', (e) => {
        //отменить стандартное поведение
        e.preventDefault();

        // создать блок для вывода сообщения об отправке данных

        // SPINNER CREATE

        const statusMessage = document.createElement('img');
        // statusMessage.classList.add('status');
        // statusMessage.textContent = message.loading;
        statusMessage.src = message.loading;
        //или создать класс в стилях и добавить нашему элементу
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
          `;
        // form.append(statusMessage);
        // расположение спиннера по центру
        //добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.
        form.insertAdjacentElement('afterend', statusMessage);


        // const request = new XMLHttpRequest();
        // request.open('POST', 'server.php');

        // Настройка заголовков, говорит что приходит серверу
        // ВАЖНО!!! 
        // 'multipart/form-data' в связке с XMLHttpRequest
        // то заголовок устанавливать не нужно, он устанавливается автоматически 
        // поэтому мы не получаем данные на сервер
        // request.setRequestHeader('Content-type', 'multipart/form-data');

        // отправка в JSON
        // request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        // подготовка данных к формату
        const formData = new FormData(form);

        //FETCH

        const object = {};
        formData.forEach(function (value, key) { object[key] = value; });

        //Object.entries() возвращает массив, элементами которого являются массивы
        // Метод Object.fromEntries() принимает список пар ключ-значение и возвращает новый объект,
        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        // fetch('server.php', {
        //   method: "POST",
        //   headers: {
        //     'Content-type': 'application/json'
        //   },
        //   body:JSON.stringify(object)
        // })

        postData('http://localhost:3000/requests', json)
          .then((data) => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
          }).catch(
            () => {
              showThanksModal(message.failure);
            }
          ).finally(function () {
            form.reset();
          });


        // formData - специфический объект
        // перебрать объект formData получим ключ значение в новый объект
        // const object = {};
        // formData.forEach(function(value, key){
        //   object[key] = value;
        // });
        // парсим в JSON 
        // const json = JSON.stringify(object);
        // // атрибут name в input обязателен
        // // отправка на сервер formData на основании формы
        // request.send(json);
        // request.addEventListener('load', ()=>{
        //   if(request.status === 200){
        //     console.log(request.response);
        //     showThanksModal(message.success);
        // statusMessage.textContent = message.success;
        // сбрасываем форму
        // form.reset();
        // // удалить через две сек
        // setTimeout(()=>{statusMessage.remove();
        // }, 2000);
        //   } else {
        //     showThanksModal(message.failure);
        //     // statusMessage.textContent = message.failure;
        //   }
        // });
      });
    }

    // Оповещение пользователя динамически 
    function showThanksModal(message) {
      const previewModalDialog = document.querySelector('.modal__dialog');

      previewModalDialog.classList.add('hide');
      openModal();

      // создаем новый элемент и добавляем наше окно
      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
        <div class="modal__content">
          <div data-close class="modal__close">✖</div>
          <div class="modal__title">${message}</div>
        </div>
        `;
      // добавляем элемент на страницу
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
        thanksModal.remove();
        // показать предыдущий контент
        previewModalDialog.classList.add('show');
        previewModalDialog.classList.remove('hide');
        closeModal();
      }, 4000);

    }
  }
});













// // создаем табы
// window.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".tabheader__item"),
//     tabsContent = document.querySelectorAll(".tabcontent"),
//     tabsParent = document.querySelector(".tabheader__items");

//   // спрятать все элементы tabsContent
//   function hideTabContent() {
//     tabsContent.forEach((item) => {
//       //   item.style.display = "none";
//       item.classList.add("hide");
//       item.classList.remove("show", "fade");
//     });
//     // убираем класс активности tabheader__item
//     tabs.forEach((item) => {
//       item.classList.remove("tabheader__item_active");
//     });
//   }

//   function showTabContent(i = 0) {
//     // меняем значение display на блок
//     // добавили классы из preview.scss
//     tabsContent[i].classList.add("show", "fade");
//     tabsContent[i].classList.remove("hide");
//     // добавляем класс активностти выбраному элементу
//     tabs[i].classList.add("tabheader__item_active");
//   }

//   hideTabContent();
//   showTabContent();

//   //назначить обработчик клика
//   tabsParent.addEventListener("click", function (event) {
//     const target = event.target;
//     // если текущий на который кликнул пользователь совпадает с нашим то
//     if (target && target.classList.contains("tabheader__item")) {
//       tabs.forEach((item, i) => {
//         if (target == item) {
//           hideTabContent();
//           showTabContent(i);
//         }
//       });
//     }
//   });

//   // TIMER

//   const deadline = "2020-09-25";

//   function getTimeRemaining(endtime) {
//     // кол-во мсек которое будет в нашем конечном времени
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//       days = Math.floor(t / (1000 * 60 * 60 * 24)),
//       hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//       minutes = Math.floor((t / 1000 / 60) % 60),
//       seconds = Math.floor((t / 1000) % 60);

//     return {
//       total: t,
//       days: days,
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds,
//     };
//   }
//   // добавить 0 если число меньше нуля
//   function getZero(num) {
//     if (num >= 0 && num < 10) {
//       return `0${num}`;
//     } else {
//       return num;
//     }
//   }

//   function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//       days = timer.querySelector("#days"),
//       hours = timer.querySelector("#hours"),
//       minutes = timer.querySelector("#minutes"),
//       seconds = timer.querySelector("#seconds"),
//       timeInterval = setInterval(updateClock, 1000);
//     //убрать мигание чисел в верстке
//     updateClock();

//     function updateClock() {
//       const t = getTimeRemaining(endtime);

//       days.textContent = getZero(t.days);
//       hours.textContent = getZero(t.hours);
//       minutes.textContent = getZero(t.minutes);
//       seconds.textContent = getZero(t.seconds);

//       if (t.total <= 0) {
//         clearInterval(timeInterval);
//         // или нули
//         hours.textContent = "00";
//         minutes.textContent = "00";
//         seconds.textContent = "00";
//         days.textContent = "00";
//         // или убираем полностью со страницы
//         // document.querySelector(".promotion__timer").style.display = "none";
//       }
//     }
//   }

//   setClock(".timer", deadline);

//   // modal

//   const modalTrigger = document.querySelectorAll("[data-modal]"),
//     modal = document.querySelector(".modal"),
//     modalCloseBtn = document.querySelector("[data-close]");
//   // открыть модальное окно
//   function openModal() {
//     // добавить класс
//     modal.classList.add("show", "fade");
//     // убрать класс
//     modal.classList.remove("hide");
//     // Либо вариант с toggle - но тогда назначить класс в верстке
//     document.body.style.overflow = "hidden";
//     // очищаем интервал если юзер уже жмакал модальное окно
//     clearInterval(modalTimerId);
//   }

//   //example
//   modalTrigger.forEach((btn) => {
//     btn.addEventListener("click", openModal);
//   });

//   function closeModal() {
//     modal.classList.add("hide");
//     modal.classList.remove("show", "fade");
//     // страничка шевелится
//     document.body.style.overflow = "";
//     // modal.classList.toggle("show");
//   }

//   modalCloseBtn.addEventListener("click", closeModal);

//   // закрыть окно
//   modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       closeModal();
//     }
//   });

//   // закрыть окно с помощью escape

//   document.addEventListener("keydown", (e) => {
//     if (e.code === "Escape" && modal.classList.contains("show")) {
//       closeModal();
//     }
//   });

//   // Модификация модального окна
//   // появляется модальное окно через орпед. время
//   const modalTimerId = setTimeout(openModal, 3000);

//   function showModalByScroll() {
//     // если совпадает то юзер долистал до конца
//     if (
//       window.pageYOffset + document.documentElement.clientHeight >=
//       document.documentElement.scrollHeight
//     ) {
//       // откроется модал окно
//       openModal();
//       // а потом удалится событие чтобы не повторялось постоянно при скролле
//       window.removeEventListener("scroll", showModalByScroll);
//     }
//   }

//   window.addEventListener("scroll", showModalByScroll);
// });
