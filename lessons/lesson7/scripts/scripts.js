'use strict';

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// // простой пример но лучше так не делать)
// btn[0].onclick = function(){
//     alert('Вы нажали первую кнопку');
// }

// btn[0].addEventListener('click', function(event){
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' +event.target);
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + ' на элементе ' +event.target);
// });

// link.addEventListener('click', function(){
//     //если мы хотим к примеру отменить наше событие пишем event.preventDefault();
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + ' на элементе ' +event.target);
// });


// btn[0].addEventListener('mouseenter',function(){
//     alert('Вы навели на кнопку');
// });


btn.forEach(function(item){
    item.addEventListener('mouseleave', function() {
        console.log("Вышли!");
    });
});