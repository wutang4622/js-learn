'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelector('button');

//clientWidth (client) не учитывает все паддинги бордеры и т.д
let width = box.clientWidth,
    height = box.clientHeight;

    console.log(width);
    console.log(height);
    console.log(box.getBoundingClientRect());

    console.log(box.getBoundingClientRect());

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.scrollTop);


    //offsetWidth (offset) Учитывает все паддинги бордеры и т.д
    // let width = box.offsetWidth,
    // height = box.offsetHeight;

    // console.log(width);
    // console.log(height);


    //если мы хотим вычесть не видимую часть контента scroll
    // let width = box.scrollWidth,
    // height = box.scrollHeight;

    // console.log(width);
    // console.log(height);


    // btn.addEventListener('click', function(){
    //     box.style.height = box.scrollHeight + 'px';
    // });


    //scrollTop и scrollLeft изменяемые 
    // btn.addEventListener('click', function(){
    //     console.log(box.scrollTop);
    // });


    // scrollBy(0, 200);
    scrollTo(0,200);