'use strict';

let menuBtn = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    tising = document.querySelector('.adv'),
    title = document.getElementById('title'),
    promptMessage = document.getElementById('prompt'),
    message = prompt('Ваше отношение к технике apple?','');

menu.insertBefore(menuBtn[2],menuBtn[1]);

document.body.style.background = "url(./img/apple_true.jpg)";

tising.remove();

title.innerHTML = 'Мы продаем только подлинную технику Apple';


promptMessage.innerHTML = message;