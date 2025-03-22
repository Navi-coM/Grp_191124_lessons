'use strict'

// localstorage - об'єкт, який зберігає дані в браузері навіть після закриття сторінки
// sessionstorage - об'єкт, який зберігає дані в браузері до закриття сторінки

// Вони не відправляють дані на сервер
// Приблизний об'єм 2 Мб

// localStorage.setItem('','')
// localStorage.getItem('')
// localStorage.removeItem('');
// localStorage.clear();
// localStorage.key();
// localStorage.length;
// -----------------------1. LocalStorage -------

let arrStydent = ['Oleh', 'Yaroslav', 'Alina', 'Alex', 'Svitlana'];
let userAdmin = {
    adminName: 'Ivan',
    role: 'admin',
    password: 'Ivan123' 
}

localStorage.setItem('studentTodayLesson', arrStydent);
localStorage.setItem('userAdminData',JSON.stringify(userAdmin));

// console.log(localStorage.getItem('StudentTodayLesson'));
// console.log(localStorage.getItem(`${JSON.parse(localStorage.key(1))}`));

// let dataValue = JSON.parse(localStorage.getItem(localStorage.key(1))); // Якщо ми незнаємо назви ключа

// console.log(dataValue);
// console.log(JSON.parse(dataValue));

localStorage.removeItem('StudentTodayLesson');

// localStorage.clear();
let lengthStorage = localStorage.length;
if(lengthStorage) {
    console.log(`В сторадж щось є`);
    
} else {
    console.log(`Сторедж порожній!`);
}

// ------------------------- Отримання наявних ключів у сторедж -----------

let keysStorage = Object.keys(localStorage);
// console.log(keysStorage);

for(let key of keysStorage) {
    console.log(`${key}`);
}

// ---------------------------- Click Storage -----

const btnClick = document.querySelector('#btn-click');
const btnClearStore = document.querySelector('#btn-clear');
const countClickTitle = document.querySelector('#count-amount');
let amountClick = 0;

function countClickStorage() {
    amountClick++;
    localStorage.setItem('amountClick', amountClick);

    let amountStorageClick = localStorage.getItem('amountClick');
    countClickTitle.innerHTML = amountStorageClick;
}
function clearCountStorage() {
    localStorage.removeItem('amountClick');
    countClickTitle.innerHTML = amountClick = 0;
}

btnClick.addEventListener('click', countClickStorage);
btnClearStore.addEventListener('click', clearCountStorage);

// -----------------------------Емуляція зміним теми за допомогою localstorage ------

const btnChangeTheme = document.querySelector('.btn_change-theme');
const btnResetTheme = document.querySelector('.btn_reset-theme');
const blockBody = document.body;

function changeTheme() {
    blockBody.classList.toggle('body_dark');

    if(blockBody.classList.contains('body_dark')) {
        localStorage.setItem('pageTheme', 'dark');
    } else {
        localStorage.setItem('pageTheme', 'light');
    }
}

function resetPageTheme() {
    if(blockBody.classList.contains('body_dark')) {
        localStorage.removeItem('pageTheme');
        blockBody.classList.remove('body_dark');
    }
}

btnChangeTheme.addEventListener('click', changeTheme);
btnResetTheme.addEventListener('click', resetPageTheme);