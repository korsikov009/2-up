document.addEventListener('DOMContentLoaded', () => {

    const modalBackground = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    const scrollWidth = window.outerWidth - document.documentElement.clientWidth;

    function modalShow() {
        body.classList.add('modal_open');
        body.style.paddingRight = scrollWidth + 'px';
        modalBackground.style.display = 'flex';
        modalBackground.classList.add('modal_show');

    }

    function modalHide() {
        body.classList.remove('modal_open');
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