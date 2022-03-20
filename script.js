"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Много');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};
let i = 0;

// do{
//     const a = prompt('Последний просмотренний фильм', '');
//     const b = prompt('Оценка просмотренеего фильма', '');
    
// if(a != null && b != null && a !='' && b != ''  && a.length <50 ){
 
//     personalMovieDB.movies[a] = [b];

// }else{
//     i--;
// }
// i++;
// }while(i<2);



while( i < 2){
    const a = prompt('Последний просмотренний фильм', '');
    const b = prompt('Оценка просмотренеего фильма', '');
    
if(a != null && b != null && a !='' && b != ''  && a.length <50 ){
 
    personalMovieDB.movies[a] = [b];

}else{
    i--;
}
i++;
}


// for(let i = 0; i < 2; i++) {
//     const a = prompt('Последний просмотренний фильм', '');
//     const b = prompt('Оценка просмотренеего фильма', '');
    
// if(a != null && b != null && a !='' && b != ''  && a.length <50 ){
 
//     personalMovieDB.movies[a] = [b];

// }else{
//     i--;
// }

// }

if(personalMovieDB.count <10) {
    alert('Вы просмотрели довольно мало фильмов');
} else if(personalMovieDB.count >10 && personalMovieDB.count <30) {
alert('Вы классический зритель');
}else if(personalMovieDB.count > 30 ){
    alert('Вы киноман');
} else{
    alert('Произошла ошибка');
}


console.log(personalMovieDB);