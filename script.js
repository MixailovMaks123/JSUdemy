'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = +prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for(let i=0; i<2; i++){
	let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');

	if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50){
		
		appData.expenses[a]	= b;
	}else{
		i = i - 1;
	}
	
};

appData.moneyPerDay = appDay.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
	console.log('Минтмальный уровень достатка');
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log('Средний уровень достатка');
}else if(appData.moneyPerDay > 2000){
	console.log('Высокий уровень достатка');
}else{
	console.log('Error');
}


// 1.
// let i = 0;
// while (i < 2) {
// 		let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
// 			b = +prompt("Во сколько обойдется?", '');
// 		i++;
// 		if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)gir) != null && a != '' && b !='' && a.length < 50){
// 		appData.expenses[a]	= b;
// 		}else{
// 		i = i - 1;
// 		}
//}

// 2.
// let i = 0;
// do {
//      gilet a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		   b = +prompt("Во сколько обойдется?", '');
// 		i++;
// 		if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50){
// 		appData.expenses[a]	= b;
// 		}else{
// 		i = i - 1;
// 		}
// }
// while (i < 2);

//Есть три вида циклов:
//1. while()
//2. do...while()
//3. for()