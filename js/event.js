'use strict';
// BOM 
// window
// navigator
// location
// history
// screen

// const langBrowser = navigator.language;
// const systemComp = navigator.userAgentData.platform;
// const allComp = navigator.userAgent;
// const positionUser = navigator.geolocation.getCurrentPosition();
// console.log(langBrowser);
// console.log(systemComp);
// console.log(allComp);
// console.log(positionUser);

// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude:", position.coords.latitude);
//     console.log("Longitude:", position.coords.longitude);
// });


// ---------- 1. Події миші ----------
// ---------- 2. Події клавіатури ----------
// ---------- 3. Події форми ----------
// ---------- 4. Події документа ----------
// ---------- 5. Події CSS ----------

const btnChangeColor = document.querySelector('#btn-change-color');
const btnRes = document.querySelector('#btn-reset-color');
const blockBody = document.body;

function changeBackground() {
    blockBody.classList.add('background-blue');
    // blockBody.style.background = '#2366ca';
}
// function enterAlert() {
//     alert(`Click Button!`)
// }

function reset() {
    blockBody.classList.remove('background-blue');
    // blockBody.style.background = '';
}

btnChangeColor.onclick = changeBackground;
btnRes.onclick = reset;
// btnChangeColor.onclick = enterAlert;
// btnChangeColor.onclick = console.log(`Click`);

// --------------------- Об'єкт Event ---------------------

// event

const btnsAction = document.querySelectorAll('[data-purpose="action"]');
let btnSend;
btnsAction.forEach(btn => (btn.textContent === 'Send') ? (btnSend = btn) : '');
// console.log(btnSend);


let checkDataEvent = (event) => console.log(event);

// btnSend.onclick = checkDataEvent;
// btnSend.addEventListener('click', checkDataEvent);
// btnChangeColor.addEventListener('click', checkDataEvent);

// ----------------------

const inptAmount = document.querySelector('#inpt-amount');
// inptAmount.addEventListener('click', checkDataEvent);
// inptAmount.addEventListener('keypress', checkDataEvent);    

const btnsCurrency = document.querySelectorAll('[data-currency]');
const blockCurrency = document.querySelector('section.currency');


// btnsCurrency.forEach(() => {
//     blockBody.onclick = (event) => {
//         event.preventDefault();
//         // console.log(event.target);
//         // console.log(event.currentTarget);

//         if(event.target.dataset.currency) {
//             let nameCurrency = event.target.dataset.title;
//             alert(`Ви вибрали валюту: ${nameCurrency}`);
//         }
//     }
// })

btnsCurrency.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let currentCurrency = event.target.dataset.currency;
        let nameCurrency = event.target.dataset.title;
        let rez = (inptAmount.value / currentCurrency).toFixed(2);
        let newElForCurrency = document.createElement('p');
        newElForCurrency.innerText = `Ви можете придбати ${rez} ${nameCurrency}`;
        blockCurrency.insertAdjacentElement('beforeend', newElForCurrency);
    })
})

// ---------------------------------------------------
// Координати руху миші
// document.addEventListener('mousemove', (event) => {
//     console.log(`ccordinate X: ${event.clientX}, coordinate Y: ${event.clientY}`);
// })

// Натиснуті клавіши
document.addEventListener('keydown', (event) => {
    console.log(`Натуиснута клавіша: ${event.key}`);
    console.log(`Код клавіши: ${event.code}`);
})

// ---------------------------------------------

const parentEl = document.querySelector('#parent-el');
const childEl = document.querySelector('#btn-propagation');
// console.log(parentEl);
// console.log(childEl);

parentEl.addEventListener('click', () => {
    console.log(`Parent Element`);
})

childEl.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(`Child Element`);
})