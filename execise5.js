'use strict';

let money,time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null){
		money = +prompt("Ваш бюджет на месяц?", '');
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
    chooseExpenses:function(){
        for(let i=0; i<2; i++){
		 
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' &&  a.length < 50){
                console.log('done');
                appData.expenses[a]	= b;
            }else{
                i = i - 1;
                console.log('no');
            }
            
        }
    },
    detectDayBudget:function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
	    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel:function(){
        if(appData.moneyPerDay < 100){
            console.log('Минтмальный уровень достатка');
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        }else if(appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        }else{
            console.log('Error');
        }
    },
    checkSaving:function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процен?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses:function(){
        for(let i=0 ; i < 3 ; i++){
            let questionOptExpenses = prompt("Статья не обязательных расходов", '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        for(let i=0; i<1; i++){
            let items = prompt('что принесет дополнительный доход? (перечислите через запятой)',''),
                arr=[];
            if((typeof(items)) === 'string' && (typeof(items)) != null  && items != '' ){
                arr = appData.income = items.split(', ');
                appData.income.push(prompt("Что-то еще?"));
                appData.income.sort();
                
            }else{
                i = i - 1;
            }
            
            arr.forEach(function(item, i){     
            alert(i + ": " +" дополнительный зароботок " + item);
            });
                
           
        }
        
    }
};


