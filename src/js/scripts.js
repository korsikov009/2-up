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
document.addEventListener('DOMContentLoaded', () => {

    const modalBackground = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    const scrollWidth = window.outerWidth - document.documentElement.clientWidth;
    let scrollTop = 0;

    function modalShow() {
        scrollTop = document.documentElement.scrollTop;
        body.style.top = -scrollTop + 'px';
        body.classList.add('modal_open');
        body.style.paddingRight = scrollWidth + 'px';
        modalBackground.style.display = 'flex';
        modalBackground.classList.add('modal_show');
    }

    function modalHide() {
        body.classList.remove('modal_open');
        window.scrollTo(0, scrollTop);
        body.style.paddingRight = '';
        modalBackground.style.display = 'none';
        modalBackground.classList.remove('modal_show');
    }

    document.addEventListener('click', () => {
        if (modalBackground.classList.contains('modal_show')) {
            modalHide();
        } else {
            modalShow();
        }
    })

});
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.main-content__title');

    document.querySelector('.header__anchor').addEventListener('click', event => {
        event.preventDefault();
        scrollToElement(document.documentElement, element.offsetTop - 10, 400);
    });

    function scrollToElement(elem, to, duration) {
        const fps = 60;
        const tick = duration / fps;
        const difference = to - elem.scrollTop;
        const perTick = difference / duration * tick;

        const timer = setInterval(function() {
            if (elem.scrollTop >= to) {
                clearInterval(timer);
                return;
            }
            draw();
        }, tick);

        function draw() {
            elem.scrollTop = elem.scrollTop + perTick;
        }
    }

});