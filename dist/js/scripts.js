const cruises = [
    {
        id:'anapa',
        name: 'Морской круиз в Анапу',
        reference: '#',
        price: '49 000 руб.',
        route: 'Сочи-Лазаревское-Геленджик-Анапа',
        time: '10 ч. 0 мин.',
        image: 'img/pictures/lighthouse.png',
        description: '<p>Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40</p><p>Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05</p><p>Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде</p><p>Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"</p>',
        hit: 'Хит продаж',
        sale: '',
        oldPrice: '',
    },
    {
        id: 'sochi',
        name: 'Обзорная морская прогулка с экскурсией',
        reference: '#',
        price: '5 000 руб.',
        route: 'Сочи-Адлер-Сочи (без высадки)',
        time: '1 ч. 0 мин.',
        image: 'img/pictures/sochi.png',
        description: '<p>Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40</p><p>Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05</p><p>Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде</p><p>Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"</p>',
        hit: '',
        sale: 'Акция',
        oldPrice: '15000 руб.',
    },
    {
        id: 'gelendjik',
        name: 'Морская прогулка в Геленджик',
        reference: '#',
        price: '7 000 руб.',
        route: 'Сочи-Туапсе-Геленджик',
        time: '12 ч. 30 мин.',
        image: 'img/pictures/gelendjik.png',
        description: '<p>Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40</p><p>Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05</p><p>Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде</p><p>Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"</p>',
        hit: '',
        sale: 'Скидка 10%',
        oldPrice: '10000 руб.',
    },
    {
        id: 'novorossiysk',
        name: 'Морской круиз в Новороссийск',
        reference: '#',
        price: '14 800 руб.',
        route: 'Сочи-Геленджик-Новороссйиск-Геленджик-Сочи',
        time: '13 ч. 0 мин.',
        image: 'img/pictures/novorossiysk.png',
        description: '<p>Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40</p><p>Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05</p><p>Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде</p><p>Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"</p>',
        hit: '',
        sale: '',
        oldPrice: '',
    },
    {
        id: 'sea',
        name: 'Морская прогулка в Абрау-Дюрсо ',
        reference: '#',
        price: '14 800 руб.',
        route: 'Сочи-Абрау-Дюрсо',
        time: '11 ч. 0 мин.',
        image: 'img/pictures/sea.png',
        description: '<p>Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40</p><p>Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05</p><p>Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде</p><p>Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"</p>',
        hit: '',
        sale: '',
        oldPrice: '',
    }
];

if (window.innerWidth < 1200) {
    const arrayOfMobileImage = [
        'img/pictures/lighthouse-mobile.png',
        'img/pictures/sochi-mobile.png',
        'img/pictures/gelendjik-mobile.png',
        'img/pictures/novorossiysk-mobile.png'
    ];
    cruises.pop();
    cruises.forEach((element, i)=> {
        element.image = arrayOfMobileImage[i];
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
    const cruise = document.querySelector('.cruise');
    const cruisesList = document.querySelector('.catalog');

    cruises.forEach((element, i, array)=>{
        let cruiseClon = cruise.cloneNode(true);
        cruiseClon.setAttribute('id', element.id);

        if (element.hit) {
            cruiseClon.querySelector('.cruise__special').classList.add('cruise__special_hit');
            cruiseClon.querySelector('.cruise__special-text').textContent = element.hit;
        }
        if (element.sale) {
            cruiseClon.querySelector('.cruise__special').classList.add('cruise__special_sale');
            cruiseClon.querySelector('.cruise__special-text').textContent = element.sale;
        }
        cruiseClon.querySelector('.cruise__image img').setAttribute('src', element.image);
        cruiseClon.querySelector('.cruise__reference').setAttribute('href', element.reference);
        cruiseClon.querySelector('.cruise__reference').textContent = element.name;
        cruiseClon.querySelector('.cruise__route-value').textContent = element.route;
        cruiseClon.querySelector('.cruise__time-value').textContent = element.time;
        cruiseClon.querySelector('.cruise__price-actual').textContent = element.price;
        if (element.oldPrice) {
            cruiseClon.querySelector('.cruise__price-old').textContent = element.oldPrice;
        }

        cruisesList.appendChild(cruiseClon);
    });
    cruisesList.removeChild(cruisesList.querySelector('#example-cruise'));
});
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

    function fillTheModal(id) {
        let arrayOfImages = [];

        cruises.forEach((element, i, array)=>{
            if (element.id === id) {
                modal.querySelector('.modal__gallery-main img').setAttribute('src', element.image);
                modal.querySelector('.modal__cruise').textContent = element.name;
                modal.querySelector('.cruise__route-value').textContent = element.route;
                modal.querySelector('.cruise__time-value').textContent = element.time;
                modal.querySelector('.modal__schedule-container').innerHTML = element.description;
                modal.querySelector('.cruise__price-actual').textContent = element.price;
            }
            if (element.id !== id) {
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

            if (target && target.classList.contains('modal__gallery-item')) {
                fillTheModal(target.getAttribute('data-id'));
            }

            if (target === modal) {
                return;
            }
            if (target) {
                target = target.parentNode
            } else {
                return;
            }
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
                fillTheModal(target.getAttribute('id'));
            }
            target = target.parentNode;
        }
        if (flag) {
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