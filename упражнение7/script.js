"используйте строгий";

let start = document.getElementById('start'),//Начать расчет

    Значение бюджета= document.getElementsByClassName("значение бюджета")[0],//Доход
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
    сбережения = document.querySelector('#сбережения'),//чекбокс
    chooseSum = document.querySelector('.выберите-сумма'),//сумма 
    choosePercent = document.querySelector(".выберите-процент"),//процент
    
    Значение года= document.querySelector("значение года"),//год
    monthValue = document.querySelector('.month-value'),//месяц
    dayValue = document.querySelector('.day-value');//день
