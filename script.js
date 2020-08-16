'use strict';

// let Name = "Джон";
// let admin;

// admin = Name;
// alert(admin);

// let myPlanetName = "Земля";
// let currentUserName = "Ань";

// alert(`Привет ${myPlanetName} это ${currentUserName}`);

// let value = true;
// alert(typeof 56);

// let age = "18";
// let a = "4";
// alert(+a + +age);

// let n = 1;
// n += 1;
// n *= 2;
// alert(n);

// let m = 4;
// m *= 5 + 3;
// alert(m);

// let one = ("Код" > "Кот");
// let tow = ("red" != "коп");
// alert(one);
// alert(tow);

// let userName = prompt('Как вас зовут?', '');
// alert(`Ваше имя - ${userName}`);
// // let question = confirm("Вы здесь главный?");
// if (userName == "Ань") {
//     alert(`Приветствую ${userName}, вы здесь босс`);
// } else {
//     alert(`Приветствую ${userName}, вы здесь гость`);
// }

// let userName = prompt('Как вас зовут?', '');
// alert(`Ваше имя - ${userName}`);
// let statu = (userName == "Ань") ? `Приветствую ${userName}, вы здесь босс` : `Приветствую ${userName}, вы здесь гость`;
// alert(statu);

// let userName = prompt('Как вас зовут?', '');
// alert(`Ваше имя - ${userName}`);
// let statu = (userName == "Ань") ? `Приветствую ${userName}, вы здесь босс` :
//     (userName == "Маш") ? `Приветствую ${userName}, вы здесь лунтик` :
//     (userName == "Аксим") ? `Приветствую ${userName}, вы здесь хокаге` :
//     `Приветствую ${userName}, вы здесь гость`;
// alert(statu);


// let question = prompt("Введите число", "");
// if (question > 0) {
//     alert( "1" );
// } else if (question < 0) {
//     alert( "-1" );
// } else {
//     alert( "0" );
// }

// let a = prompt("Введите а", "");
// let b = prompt("Введите b", "");
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result); // ошибка 


// let login = prompt("Введите логин", "");
// let status = (login == "Сотрудник") ? "Привет" :
//     (login == "Директор") ? "Здравствуйте" :
//     (login == "") ? "Нет логина" :
//     "";
// alert(status);

// let age = prompt("Введите возраст, ' ' ");
// if ((age <= 14) || (age >= 90)) {
//     alert('Ваш возраст не входит в имеющийся диапазон');

// } else {
//     alert('Ваш возраст входит в диапазон от 14 до 90 (включительно)');
// }

let status = prompt('Введите ваш логин', '');
if (status == 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password == 'Я главный') {
        alert('Здравствуйте');
    } else if ((password == '') || (password === null)) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (status === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}