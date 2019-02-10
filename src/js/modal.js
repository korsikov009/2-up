document.addEventListener('DOMContentLoaded', () => {

    const modalBackground = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    const scrollWidth = window.outerWidth - document.documentElement.clientWidth;
    const cruiseList = document.querySelector('.catalog');
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

    function fillTheModal(target) {
        let arrayOfImages = [];

        cruises.forEach((element, i, array)=>{
            if (element.id === target.getAttribute('id')) {
                modal.querySelector('.modal__gallery-main img').setAttribute('src', element.image);
                modal.querySelector('.modal__cruise').textContent = element.name;
                modal.querySelector('.cruise__route-value').textContent = element.route;
                modal.querySelector('.cruise__time-value').textContent = element.time;
                modal.querySelector('.modal__schedule-container').innerHTML = element.description;
                modal.querySelector('.cruise__price-actual').textContent = element.price;
            }
            if (element.id !== target.getAttribute('id')) {
                const imageClone = modal.querySelector('.modal__gallery-item').cloneNode(true);
                imageClone.setAttribute('data-id', element.id);
                imageClone.querySelector('.modal__gallery-image img').setAttribute('src', element.image);
                arrayOfImages.push(imageClone);
            }
        });

        modal.querySelector('.modal__gallery-container').innerHTML = '';
        for (let i = 0; i < arrayOfImages.length; i++) {
            modal.querySelector('.modal__gallery-container').appendChild(arrayOfImages[i]);
        }
    }

    modalClose.addEventListener('click', () => {
        modalHide();
    });

    modalBackground.addEventListener('click', function(event) {
        let target = event.target;
        while (target !== this) {
            if (target === modal) {
                return;
            }
            target = target.parentNode;
        }
        modalHide();
    });

    cruiseList.addEventListener('click', function() {
        let target = event.target;
        let flag = false;

        while (target !== this) {

            if (!flag) {
                flag = target.classList.contains('cruise__image');
            }

            if (target.classList.contains('cruise')) {
                fillTheModal(target);
            }
            target = target.parentNode;
        }
        if (flag) {
            modalShow();
        }
    })
});