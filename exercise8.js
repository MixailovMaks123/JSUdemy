'use strict';

let startBtn = document.getElementById('start'),//Начать расчет

    budgetValue = document.getElementsByClassName('budget-value')[0],//Доход
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],//Бюджет на 1 день
    levelValue = document.getElementsByClassName('level-value')[0],//Уровень дохода
    expensesValue = document.getElementsByClassName('expenses-value')[0],//Обязательные расходы
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],//Возможные траты
    incomeValue = document.getElementsByClassName('income-value')[0],//Дополнительный доход
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],//Накопления за 1 месяц
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],//Накопления за 1 год

    exprensesItem = document.getElementsByClassName('expenses-item'),//Введите обязательные расходы
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),//Введите необязательные расходы

    exprensesItemBtn = document.getElementsByTagName('button')[0],//кнопка обязательных расходов
    optionalItemBtn = document.getElementsByTagName('button')[1],//кнопка необязательных расходов
    countBudgetBtn = document.getElementsByTagName('button')[2],//кнопка расчета

    chooseIncome = document.querySelector('.choose-income'),//возможные доходы
    savings = document.querySelector('#savings'),//чекбокс
    chooseSum = document.querySelector('.choose-sum'),//сумма 
    choosePercent = document.querySelector('.choose-percent'),//процент

    yearValue = document.querySelector('.year-value'),//год
    monthValue = document.querySelector('.month-value'),//месяц
    dayValue = document.querySelector('.day-value');//день

    
    
let money,time;

startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

	while(isNaN(money) || money == '' || money == null){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

exprensesItemBtn.addEventListener('click', function(){
    let sum = 0;
   
    for(let i = 0; i < exprensesItem.length; i++){

        let a = exprensesItem[i].value,
            b = exprensesItem[++i].value;
    
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' &&  a.length < 50){
            console.log('done');
            appData.expenses[a]	= b;
            sum += +b;
        }else{
            i = i - 1;
            console.log('no');
        }
    
    }
    expensesValue.textContent = sum;

});

optionalItemBtn.addEventListener('click', function(){
    for(let i=0 ; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
    
});

countBudgetBtn.addEventListener('click', function(){
   
    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        
        if(appData.moneyPerDay < 100){
            levelValue.textContent ='Минимальный уровень достатка';
        }else if(appData.moneyPerDay > 99 && appData.moneyPerDay < 2000){
            levelValue.textContent = 'Средний уровень достатка';
        }else if(appData.moneyPerDay > 1999){
            levelValue.textContent = 'Высокий уровень достатка';
        }else{
            levelValue.textContent = 'Ошибка';
        }
    }else{
        daybudgetValue.textContent = 'Произошла ощибка';
    }
});

chooseIncome.addEventListener('input',function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});



chooseSum.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
	budget: money,
    timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
    
   
};

