
let burger      = document.getElementsByClassName('burger'),
    burgerPl    = document.getElementsByClassName('burger-plank'),
    navig       = document.getElementById('navigate'),
    nav         = document.getElementsByClassName('nav'),
    navList     = document.getElementsByClassName('nav-list');


function callMenu(e) {
    e.preventDefault();
    navig.classList.toggle('height-max');
    navList[0].classList.toggle('visible_menu');
    nav[0].classList.toggle('mobile-menu');
    burgerPl[0].classList.toggle('close-menu');
};

for(let i=0; i < burger.length; i++) {
    burgerPl[0].addEventListener('click', callMenu, false);
};


// adaptive contact block
let mapBlock  = document.getElementById('mymap'),
    contFluid = document.querySelector('.leaflet-container');

// (function () {    
//     if(window.innerWidth < 920) {
//         c.classList.remove('container');
//         c.classList.add('container-fluid');
//     }
//   }());