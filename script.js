
const bo1x = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const wrapper =document.querySelector('.wrapper');

const hearts = document.querySelectorAll('.heart');


hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
// console.dir(bo1x);
// bo1x.style.backgroundColor = 'blue';
// bo1x.style.width = '500px';

bo1x.style.cssText = 'background-color: green; width: 500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for(let i = 0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor='blue';
// }


hearts.forEach(item => {
     item.style.backgroundColor = 'purple';
});


const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');
wrapper.append(div);
// hearts[0].before(div);
// hearts[0].after(div);
// // circles[0].remove();
// hearts[0].replaceWith(circles[1]);


div.innerHTML ='<h1>Hello World</h1>'; 
// div.textContent = 'Hello World';


div.insertAdjacentHTML('', '<h2>Hello</h2>')