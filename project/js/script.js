

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const removeElement = document.querySelectorAll('div.promo__adv');
const genre = document.querySelector('.promo__genre');
const poster = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');


movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film,i) =>{
    movieList.innerHTML +=  `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
</li>`;
});

genre.textContent = 'Драма';
removeElement.forEach(e=>e.remove());
poster.style.backgroundImage = 'url("img/bg.jpg")';
