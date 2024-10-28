const menu = document.querySelector('.hamburger-menu');

const headerContent = document.querySelector('.header-content');

const closeIcon = document.querySelector('.close-icon');

const nav = document.querySelector('nav')

menu.addEventListener('click',(e)=>{
    e.stopPropagation();
    headerContent.classList.add('menu-open');
});

nav.addEventListener('click',(e)=>{
    e.stopPropagation();
});

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
});

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
});