
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closen = document.querySelector('.menu_close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});

closen.addEventListener('click', () =>{
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills_ratings-counter'),
      lines = document.querySelectorAll('.skills_ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const modalTrigger = document.querySelector('.about_play-text'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal_close');

modalTrigger.addEventListener('click', () =>{
    modal.classList.add('active');
});

modalClose.addEventListener('click', () =>{
    modal.classList.remove('active');
});



