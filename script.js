"use strict";
let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Много');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Много');

     }

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};
// let i = 0;

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



// while( i < 2){
//     const a = prompt('Последний просмотренний фильм', '');
//     const b = prompt('Оценка просмотренеего фильма', '');
    
// if(a != null && b != null && a !='' && b != ''  && a.length <50 ){
 
//     personalMovieDB.movies[a] = [b];

// }else{
//     i--;
// }
// i++;
// }




function rememderMyFilms(){
    for(let i = 0; i < 2; i++) {
        const a = prompt('Последний просмотренний фильм', '');
        const b = prompt('Оценка просмотренеего фильма', '');
        
    if(a != null && b != null && a !='' && b != ''  && a.length <50 ){
     
        personalMovieDB.movies[a] = [b];
    
    }else{
        i--;
    }
    
    }

}
// rememderMyFilms();





function detectPersonalLevel(){
    if(personalMovieDB.count <10) {
        alert('Вы просмотрели довольно мало фильмов');
    } else if(personalMovieDB.count >10 && personalMovieDB.count <30) {
    alert('Вы классический зритель');
    }else if(personalMovieDB.count > 30 ){
        alert('Вы киноман');
    } else{
        alert('Произошла ошибка');
    }

}

// detectPersonalLevel();

// function showMyDB(){
// if(personalMovieDB.privet == false){
//     console.log(personalMovieDB);
// }

// }
// showMyDB();

function showMyDB (hidden) {
if(!hidden){
    console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privet);

function writerYourGenres(){
    for(let i = 0; i<3; i++ ){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);

    }
}

writerYourGenres();

console.log(personalMovieDB);