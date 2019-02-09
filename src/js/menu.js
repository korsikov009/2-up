document.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu');
   const button = document.querySelector('.navigation__button');

   function showMenu() {
       button.classList.add('navigation__button_active');
       menu.classList.add('menu_visible');
       document.addEventListener('click', hideMenu);
   }

   function hideMenu() {
       button.classList.remove('navigation__button_active');
       menu.classList.remove('menu_visible');
       document.removeEventListener('click', hideMenu);
   }

   button.addEventListener('click', event => {
       if (!menu.classList.contains('menu_visible')) {
           showMenu();
           event.stopPropagation();
       } else {
           hideMenu();
       }
   });
});