/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
  grade = +prompt("На сколько оцените его?", "");
let questions = [numberOfFilms, lastMovie, grade  ];
for(let i=0; i<questions.length; i++)
{
  let que = questions[grade];
  if(que != null && que !="" && que < 50 ){
   personalMovieDB.movies[lastMovie] = b;
  }
  else
  {
    console.log("error");
     i--;
  }
  
};

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
  grade = +prompt("На сколько оцените его?", "");
let questions = [numberOfFilms, lastMovie, grade  ];

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for(let i=0; i<questions.length; i++)
{
  let que = questions[i];
  if(que != null && que !="" && que.length < 50 ){
   personalMovieDB.movies[lastMovie] = grade;
  }
  else
  {
    console.log("error");
     i--;
  }
  
}






// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", "");

// for (let index = 0; index < 2; index++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     index--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("error");
// }

// console.log(personalMovieDB);
