'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let expenses1 = prompt("Введите обязательную статью расходов в этом месяце"),
    expenses2 = prompt("Во сколько обойдется?");

let appData = {
    budget : money,
    timeData : time,
    expenses : {
        expenses1 : expenses2
    },
    optionalExpenses : "",
    income : [],
    savings : false
};

alert(money/30);