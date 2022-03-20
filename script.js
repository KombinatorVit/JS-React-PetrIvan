const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Много');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

let lastWatchedMovie = prompt('Последний просмотренний фильм', '');
let filmScore = prompt('Оценка просмотренеего фильма', '');
let lastWatchedMovie2 = prompt('Последний просмотренний фильм', '');
let filmScore2 = prompt('Оценка просмотренеего фильма', '');

personalMovieDB.movies[lastWatchedMovie] = [filmScore];
personalMovieDB.movies[lastWatchedMovie2] = [filmScore2];


console.log(personalMovieDB)