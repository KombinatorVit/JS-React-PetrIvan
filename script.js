

"use strict";
let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "Много");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "Много");
    }
  },
  rememderMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Последний просмотренний фильм", "");
      const b = prompt("Оценка просмотренеего фильма", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = [b];
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Вы просмотрели довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  writerYourGenres: function () {

    for (let i = 1; i < 3; i++) {
        let genre = prompt(
            `Ваш любимый жанр под номером ${i + 1}`);
      personalMovieDB.genres[i -1] = genre;
      if(genre==='' || genre ==null){
          console.log('Вы ввели некоректные данные или не ввели ничего');
          i--;
      }else{
        personalMovieDB.genres[i] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    
  },
  showMyDB: function () {
    if (personalMovieDB.privet == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function (priv) {
    if (personalMovieDB.privet) {
      personalMovieDB.privet = true;
    } else {
      personalMovieDB.privet = false;
    }
  },
};

personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privet);

// rememderMyFilms();

// detectPersonalLevel();



personalMovieDB.showMyDB(personalMovieDB.privet);

personalMovieDB.writerYourGenres();

console.log(personalMovieDB);
