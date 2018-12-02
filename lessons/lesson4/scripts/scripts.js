'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == null || money == "") {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}
    
start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses : function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");    
            
                if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b;
                } else {
                    console.log("not performed");
                    i = i - 1;
                }
        }
    },
    detectDayBudget : function () {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel : function () {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)  {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings : function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита" + appData.monthIncome);
        }
    },
    chooseOptExpenses : function () {
        for(let i = 0; i < 3; i++) {
            let optExpenses = +prompt("Статья необязательных расходов?");
    
            appData.optionalExpenses = optExpenses;
        }
    },
    chooseIncome : function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        
        if((typeof(items)) === 'string' && items != '' && (typeof(items))  != null) {
            console.log('done');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();
            appData.income.forEach(function(item,index, array){     
                alert('Способы дополнительного заработка ' + array);
            });
        } else {
            console.log('not done');
        }
    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}


// let i = 0;
// while(i < 2) {
   
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");    

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         console.log("not performed");
//         i--;
//     }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");    

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         console.log("not performed");
//         i--;
//     }
// } while(i < 2);