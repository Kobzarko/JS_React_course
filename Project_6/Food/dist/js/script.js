/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // создаем табы

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

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

  function showTabContent(i = 0) {
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // Timer

  const deadline = '2021,02,02';
  const promotionDescr = document.querySelector('.promotion__descr'),
        spanDate = promotionDescr.querySelector('.spanDate'); // установить дату конца акции

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
    spanDate.textContent = `${day.format(date)} в ${time.format(date)}`; // console.log(day.format(date));
    // console.log(time.format(date));
    // console.log(date);
  }

  setDateSaleEnd(deadline, spanDate);

  function getTimeRemaining() {
    const t = Date.parse(deadline) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      "hours": hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num > 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  } // не работает
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
          timeInterval = setInterval(updateClock, 1000); // ПРОТИВ мигания верстки

    updateClock();

    function updateClock() {
      const t = getTimeRemaining();
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); // MODAL

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  function openModal() {
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide'); // либо через toggle
    // modal.classList.toggle('show');

    document.body.style.overflow = 'hidden'; // очистить таймаут если окно открыто

    clearInterval(modalTimerId);
  } // функция закрыть окно


  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade'); // либо через toggle
    // modal.classList.toggle('show');
    // размораживаем страницу

    document.body.style.overflow = '';
  } // перебрать кнопки 


  modalTrigger.forEach(btn => {
    // открыть окно
    btn.addEventListener('click', openModal);
  }); // закрыть окно

  modalCloseBtn.addEventListener('click', closeModal); // modalCloseBtn.addEventListener('click', ()=>{
  //   modal.classList.add('hide');
  //   modal.classList.remove('show');
  //    // либо через toggle
  //   // modal.classList.toggle('show');
  //   document.body.style.overflow = '';
  // });
  // закрыть окно без крестика

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  }); // закрыть окно через escape

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
      console.log('escape');
    }
  }); // вызвать модальное окно

  const modalTimerId = setTimeout(openModal, 5000); // 

  function showModalByScroll() {
    // если кол-во прокручен. px + значение  внутренней высоты элемента >=полная высота  элемента
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      // открыть модальное окно
      openModal(); // чтобы окно не открывалось каждый раз от скрола
      // событие нужно удалить после одного выполнения

      window.removeEventListener('scroll', showModalByScroll);
    }
  } // показать модальное окно если пользователь долистал страницу до конца


  window.addEventListener('scroll', showModalByScroll); // использовать классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price; // родительский элемент для нашей карточки

      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.classes = classes; //меняем цену теперь цена модифицирована

      this.changeToUAH();
    } // конвертатор


    changeToUAH() {
      this.price = +this.price * this.transfer;
    } // создать элемент поместить верстку, дополнить данными , поместить на страницу


    render() {
      const element = document.createElement('div'); // передаем классы по умолчанию 

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
          </div>`; // поместить наш элемент во внутрь нашего родителя

      this.parent.append(element);
    }

  } // альтернатива вызова создания объекта
  // new MenuCard().render();


  const cardVegy = new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container');
  cardVegy.render();
  const cardElite = new MenuCard("img/tabs/elite.jpg", "elite", 'Меню "Премиум"', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20, '.menu .container');
  cardElite.render();
  const cardPost = new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных  вегетарианских стейков.', 16, '.menu .container');
  cardPost.render(); // Forms

  const forms = document.querySelectorAll('form'); // список сообщений при отправке запроса

  const message = {
    loading: 'Загрузка',
    success: "Thank you , we will contact with you",
    failure: 'Something wrong you should try again'
  }; // под каждую форму подвязываем функцию postData

  forms.forEach(item => {
    postData(item);
  }); // функция отвечает за постинг всех данных

  function postData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // создать блок для вывода сообщения об отправке данных

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); // Настройка заголовков, говорит что приходит серверу
      // ВАЖНО!!! 
      // 'multipart/form-data' в связке с XMLHttpRequest
      // то заголовок устанавливать не нужно, он устанавливается автоматически 
      // поэтому мы не получаем данные на сервер
      // request.setRequestHeader('Content-type', 'multipart/form-data');
      // отправка в JSON

      request.setRequestHeader('Content-type', 'application/json; charset = utf-8'); // подготовка данных к формату

      const formData = new FormData(form); // formData - специфический объект
      // перебрать объект formData получим ключ значение в новый объект

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      }); // парсим в JSON 

      const json = JSON.stringify(object); // атрибут name в input обязателен
      // отправка на сервер formData на основании формы

      request.send(json);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success; // сбрасываем форму

          form.reset(); // удалить через две сек

          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          statusMessage.textContent = message.failure;
        }
      });
    });
  }
}); // // создаем табы
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map