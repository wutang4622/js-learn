'use strict';

// console.log(leftBorderWidth);
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// let person = {
//     name : "John",
//     age : 25,
//     isMarried : false
// }

// console.log(person["age"]);

// let arr = ['plum.png','orange.jpg','apple.bmp'];

// console.log(arr[2]);

// let answer = +prompt("Есть ли вам 18","Да");
// console.log(typeof(answer));

// let inc = 10,
//     decr = 10;

    // inc++;
    // decr--;
    // console.log(inc++);
    // console.log(decr--);

    // console.log(5%2);
let go = 1;
let isChecked = false,
isclosed = false;

console.log(isChecked && isclosed);



switch(num) {
    case num < 5:
        console.log("Неверно!");
            break;
    case num > 100:
        console.log("Много");
            break;
    case 10: 
        console.log("Верно");
            break;
    default : 
        console.log("Что то пошло не так");
            break;

}
let num = 10;
while(num < 55) {
    console.log(num);
    num++;
}


// function declaration выглядит таким образом и она будет доступна из любой точки кода
function calc(a,b) {
    return a + b;
}

//function expression выглядит таким образом и она НЕ будет доступна из любой точки кода

let calc = function calc(a,b) {
    return a + b;
}

// новый стандарт ES 6 function expression
let calc = (a,b) => a+b;

let str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// let twelve = "12.4";
// console.log(Math.round(twelve));

let twelve = "12.2px";

console.log(parseInt(twelve));
console.log(parseFloat(twelve));




//объекты
let options = {
    width: 1024,
    heigth: 1024,
    name: "test"
};

//console.log(options.name);

options.bool = false;
// delete options.bool;



options.colors = {
    border: "black",
    bg: "red"
};

// console.log(options);

// перебрать объект циклом
for(let key in options) {
    console.log('Свойства ' + key + 'имеет значение ' + options[key]);
}
// получить количество свойств в объекте
console.log(Object.keys(options).length);


// let arr = [1,2,3,4,5];
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");
// console.log(arr);


// let arr = [1,2,3,4,5];
// arr.forEach(function(item, index, array){
//     console.log(index + ': ' + item + ' (массив: ' + array + ')');
// });

// console.log(arr);

// let array1 = [1,3,4,6,7];
// for(let key of array1) {
//     console.log(key);
// }

//метод split переводит строку в массив
// let answer = prompt("", ""),
//     array = [];

//     array = answer.split(',');

//метод join переводит массив в строку
// let array = ["awwa","www","waaa","aaa"],
//     element = array.join(', ');
//     console.log(element);

//сортирует элементы по алфавиту
// let array = ["awwa","www","waaa","aaa"],
//      element = array.sort();
//      console.log(element);

// та же самая сортировка только цифры
// let array = [1,15,4],
// element = array.sort(compare);

// function compare(a,b) {
//     return a - b;
// }
// console.log(array);

//ООП наследование
let soldier = {
    health : 400,
    armor : 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);



//работа с элементами на странице
// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.wrapper .heart'),
//     oneHeart = document.querySelector('.heart');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle);
// console.log(heart);
// console.log(oneHeart);