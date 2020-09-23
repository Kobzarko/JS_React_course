"use strict";
// создаем табы
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  // спрятать все элементы tabsContent
  function hideTabContent() {
    tabsContent.forEach((item) => {
      //   item.style.display = "none";
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    // убираем класс активности tabheader__item
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    // меняем значение display на блок
    // добавили классы из preview.scss
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    // добавляем класс активностти выбраному элементу
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  //назначить обработчик клика
  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    // если текущий на который кликнул пользователь совпадает с нашим то
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // TIMER

  const deadline = "2020-09-25";

  function getTimeRemaining(endtime) {
    // кол-во мсек которое будет в нашем конечном времени
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  // добавить 0 если число меньше нуля
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
      timeInterval = setInterval(updateClock, 1000);
    //убрать мигание чисел в верстке
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        // или нули
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        days.textContent = "00";
        // или убираем полностью со страницы
        // document.querySelector(".promotion__timer").style.display = "none";
      }
    }
  }

  setClock(".timer", deadline);

  // modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");
  // открыть модальное окно
  function openModal() {
    // добавить класс
    modal.classList.add("show", "fade");
    // убрать класс
    modal.classList.remove("hide");
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = "hidden";
    // очищаем интервал если юзер уже жмакал модальное окно
    clearInterval(modalTimerId);
  }

  //example
  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show", "fade");
    // страничка шевелится
    document.body.style.overflow = "";
    // modal.classList.toggle("show");
  }

  modalCloseBtn.addEventListener("click", closeModal);

  // закрыть окно
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // закрыть окно с помощью escape

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // Модификация модального окна
  // появляется модальное окно через орпед. время
  const modalTimerId = setTimeout(openModal, 3000);

  function showModalByScroll() {
    // если совпадает то юзер долистал до конца
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      // откроется модал окно
      openModal();
      // а потом удалится событие
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
});
