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

if (window.outerWidth < 1200) {
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

    console.log(cruises);
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