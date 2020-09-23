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

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items"); // спрятать все элементы tabsContent

  function hideTabContent() {
    tabsContent.forEach(item => {
      //   item.style.display = "none";
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    }); // убираем класс активности tabheader__item

    tabs.forEach(item => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    // меняем значение display на блок
    // добавили классы из preview.scss
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide"); // добавляем класс активностти выбраному элементу

    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent(); //назначить обработчик клика

  tabsParent.addEventListener("click", function (event) {
    const target = event.target; // если текущий на который кликнул пользователь совпадает с нашим то

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // TIMER

  const deadline = "2020-09-25";

  function getTimeRemaining(endtime) {
    // кол-во мсек которое будет в нашем конечном времени
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  } // добавить 0 если число меньше нуля


  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000); //убрать мигание чисел в верстке

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval); // или нули

        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        days.textContent = "00"; // или убираем полностью со страницы
        // document.querySelector(".promotion__timer").style.display = "none";
      }
    }
  }

  setClock(".timer", deadline); // modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]"); // открыть модальное окно

  function openModal() {
    // добавить класс
    modal.classList.add("show", "fade"); // убрать класс

    modal.classList.remove("hide"); // Либо вариант с toggle - но тогда назначить класс в верстке

    document.body.style.overflow = "hidden"; // очищаем интервал если юзер уже жмакал модальное окно

    clearInterval(modalTimerId);
  } //example


  modalTrigger.forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show", "fade"); // страничка шевелится

    document.body.style.overflow = ""; // modal.classList.toggle("show");
  }

  modalCloseBtn.addEventListener("click", closeModal); // закрыть окно

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      closeModal();
    }
  }); // закрыть окно с помощью escape

  document.addEventListener("keydown", e => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  }); // Модификация модального окна
  // появляется модальное окно через орпед. время

  const modalTimerId = setTimeout(openModal, 3000);

  function showModalByScroll() {
    // если совпадает то юзер долистал до конца
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      // откроется модал окно
      openModal(); // а потом удалится событие

      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map