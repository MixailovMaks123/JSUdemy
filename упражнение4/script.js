"используйте строгий";

пусть деньги,время;

 запуск функции() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	в то времякак(isNaN(деньги) || деньги == " || деньги == ноль){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
начало();

пусть AppData = {
	бюджет: деньги,
    Данныео времени: время,
	расходы: {},
	Дополнительныерасходы: {},
	доход: [],
	экономия: правда
};


функция выборазатрат() {
	для(пусть i=0; i<2; i++){
		 
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		если((тип(a)) === 'строка' & &(тип(a)) != null && (тип(b)) != null && a != " && b !=" &&  a.длина < 50){
			console.log("готово");
			AppData.расходы[a]	= b;
		}else{
			i = i - 1;
			console.log("нет");
		}
		
	};
}
Выберитерасходы();

функция detectDayBudget(){ 
	AppData.moneyPerDay = (AppData.бюджет / 30).Исправлено();
	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


функция detectLevel(){
	если(AppData.moneyPerDay < 100){
		console.log('Минтмальный уровень достатка');
	}иначе , если(AppData.moneyPerDay >> 100 && AppData.moneyPerDay < 2000){
		console.log('Средний уровень достатка');
	}иначе , если(AppData.moneyPerDay >> 2000){
		console.log('Высокий уровень достатка');
	}еще{
		console.log("Ошибка");
	}
}
Уровеньобнаружения();

функция сохраненияконтрольной суммы(){
    если(AppData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процен?");

        AppData.monthIncome = сохранить/100/12*в процентах;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
Сохранениеконтрольной суммы();

функция chooseOptExpenses(){
	для(пусть i=0 ; i < 3 ; i++){
		let questionOptExpenses = prompt("Статья не обязательных расходов", '');
		AppData.optionalExpenses[i] = Вопросы и ответы;
		console.log(AppData.optionalExpenses);
	}
}
Выберитезначения();
