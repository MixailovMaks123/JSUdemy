'use string';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemOne = document.getElementsByTagName('Li')[0],
    menuItemTwo = document.getElementsByTagName('Li')[1],
    menuItemThree = document.getElementsByTagName('Li')[2],
    menuItemFour = document.getElementsByTagName('Li')[3],
    menuItemFive = document.createElement('Li'),
    title = document.getElementById('title'),
    advertising = document.getElementsByClassName('adv')[0],
    promptFor = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]); 

menuItemOne.textContent = 'Mac';
menuItemTwo.textContent = 'iPad';
menuItemThree.textContent = 'iphone';
menuItemFour.textContent = 'Watch';

menuItemFive.classList.add('menu-item');
menuItemFive.textContent = "AirPods";
menu.appendChild(menuItemFive);

document.body.style.backgroundImage = "url('img/AppleBackground.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";
title.style.backgroundColor = 'black';


advertising.remove(); 

let survey = prompt('Ваше отношение к технике Apple?','');
promptFor.textContent = survey;

