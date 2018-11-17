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
