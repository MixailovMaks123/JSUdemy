'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц? ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null || money < 0) {
        money = +prompt("Ваш бюджет на месяц? ", "");
    }
    while (true) {
        if (time === null) { 
            time = prompt("Введите корректно дату в формате YYYY-MM-DD", ""); 
        } else if (time.match(/\d{4}\b-\d{2}\b-\d{2}\b/) !== null){
            alert('Пошло на else..if');
            let splitTime = time.split('-').map(Number);
            if (splitTime[0] == 2021 && 0 <= splitTime[1] && splitTime[1] <= 12 && 0 <= splitTime[1] && splitTime[1] <= 31) {
                alert("Вы правильно ввели дату!");
                return time;
            } else {
                time = prompt("Введите корректно дату в формате YYYY-MM-DD", "");
        }
        } else {
            time = prompt("Введите корректно дату в формате YYYY-MM-DD", "");
        }
    }
}

start();

let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {}, 
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце ", ""),
                b = prompt("Во сколько обойдется? ", "");

                if ((typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) === "string" && (typeof(b)) !== null && a != '' && b !== '' && a.length < 50 && !isNaN(Number(b))) {
                    if (+money < +b) {
                        alert("Ваш бюджет не позволяет тратить столько денег, выберете еще раз");
                        i--;
                    } else {
                        alert("Введите еще раз"); 
                        appData.expenses[a] = b;
                    }
                } else {
                    alert("Введите еще раз"); 
                    i--;
                }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
       if (appData.moneyPerDay <= 100 && appData.moneyPerDay >= 1) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else if (appData.moneyPerDay < 0 || appData.moneyPerDay === "" || appData.moneyPerDay === null || isNaN(appData.moneyPerDay)) {
            alert("Введены неверные данные");
        } else {
            alert("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
                while (isNaN(save) || save == "" || save == null || save < 0 || isNaN(percent) || percent == "" || percent == null || percent < 0) {
                        save = +prompt("Какова сумма накоплений?", "");
                        percent = +prompt("Под какой процент?", "");
                }
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с нашего депозита: " + appData.monthIncome);
        }
    
    },
    chooseOptExpenses: function() {
        for(let i = 1; i !== 4; i++) {
            let answerOnQuest = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = answerOnQuest;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
        while(true) {
            if ((typeof(items)) === 'string' && items !== "" && typeof(items) !== null) {
                alert('Прошло');
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
                break;
            } else {
                prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
            }
        }
        appData.income.forEach(elem => alert("Способы доп. заработка: " + elem));
    }
};
for (let variable in appData) {
    alert(`Наша программа включает в себя данные: ${variable} : ${appData[variable]}`);
}
