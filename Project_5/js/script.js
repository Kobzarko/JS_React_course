/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 6) Реализовать функционал, чтобы после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 10) Фильмы должны быть отсортированы по алфавиту */

"use strict";
// DOMContentLoaded - код начнет выполняться когда будет загружено все DOM- дерево
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  // 1 Удалить все рекламные блоки
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  // 2) Изменить жанр фильма
  const makeChanges = (textValue) => {
    textValue.textContent = "драма";
  };

  // 3) Изменить задний фон постера
  // устанавливать адрес вручную либо создать переменную с адресом
  const changeBgImg = (urlBgImg) => {
    urlBgImg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  //4 сортируем по алфавиту наши фильмы
  const sortArr = (arr) => {
    arr.sort();
  };

  // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.

  function createMovieList(films, parent) {
    // parent родительский эл-т
    // films наши эл-ты
    // чистим лист
    parent.innerHTML = "";
    // 4 сортируем по алфавиту наши фильмы
    sortArr(films);
    // 5) Добавить нумерацию выведенных фильмов ${++i}
    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item"> ${++i} ${film}
          <div class="delete"></div>
      </li>   
      `;
    });
    // 8) При клике на мусорную корзину - элемент будет удаляться из списка
    const deleteElem = document.querySelectorAll(".delete");

    deleteElem.forEach((item, i) => {
      item.addEventListener("click", () => {
        // удаляем элем из списка
        item.parentElement.remove();
        // удаляем из нашей бд
        movieDB.movies.splice(i, 1);
        // восстанавливаем нумерацию
        createMovieList(films, parent);
      });
    });
  }

  // 1 Удалить все рекламные блоки
  deleteAdv(adv);
  // 2) Изменить жанр фильма
  makeChanges(genre);
  // 3) Изменить задний фон постера
  changeBgImg(poster);

  createMovieList(movieDB.movies, movieList);

  // 6) Реализовать функционал, чтобы после заполнения формы и нажатия кнопки "Подтвердить" -
  // новый фильм добавляется в список.

  addForm.addEventListener("submit", (event) => {
    // страничка не будет перегружаться отменяем стандартное поведение
    event.preventDefault();
    // данные из инпута
    let newFilm = addInput.value;
    // галочка
    const favorite = checkbox.checked;

    if (newFilm) {
      // 7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
      if (newFilm.length > 22) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }
      // добавляем в наш массив новый фильм
      movieDB.movies.push(newFilm);
      // сортируем по алфавиту наши фильмы
      sortArr(movieDB.movies);
      // чистим окно ввода
      event.target.reset();

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }
      // добавляем в список
      createMovieList(movieDB.movies, movieList);
      console.log(movieDB.movies);
    }
  });
});
