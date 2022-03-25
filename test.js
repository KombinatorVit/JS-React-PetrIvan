const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay'); 

// btn.addEventListener('click',() => {
//     alert('Click');
// } );

const delete2 = (e) => {
console.log(e.currentTarget);
console.log(e.type) ;

};

btn.addEventListener('click',delete2);
overlay .addEventListener('click',delete2);

// btn.removeEventListener('click', delete2);

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
event.preventDefault();
console.log(event.target);
} )