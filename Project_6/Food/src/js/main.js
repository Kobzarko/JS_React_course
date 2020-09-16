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
});
