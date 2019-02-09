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