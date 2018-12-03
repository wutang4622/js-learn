'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    //querySelectorAll получим Псевдомассив, в котором лежат все элементы по порядку, подходящие под заданный селектор
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';
circlep[3].style.fontSiz

    // heart.forEach(function(item, i, array){
    //     item.style.backgroundColor = 'blue';
    // });


    let div = document.createElement('div'),
    text = document.createTextNode('Мазафака');
    
    div.classList.add('black');

    // document.body.appendChild(div);
    
    //wrapper.appendChild(div);

    document.body.insertBefore(div, circle[0]);
    document.body.removeChild(circle[1]);
    wrapper.removeChild(heart[1]);

    document.body.replaceChild(btn[1], circle[1]);
