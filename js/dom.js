'use strict'
//  DOM - document object model -------------

// Node - вузол ----------
// Кожен вузол дерева є об’єктом.
// student object model -------------------

// HTML - найвищий вузол-----------------

// window.alert(`Hello DOM!!!`);
// console.log(window.innerWidth);


// ------- Варіанти отримання доступу до елементів ------------

// document.querySelector
// document.querySelectorAll
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName



const htmlNode = document.documentElement; // отримати доступ

// console.log(htmlNode);

function changeAttributeLang() {
    htmlNode.setAttribute('lang', 'ukr');
}

const btnChangeLang = document.querySelector('#btn_lang');
const bodyBlock = document.querySelector('body');
const bodyBlock2 = document.getElementsByTagName('body');

// console.log(btnChangeLang);
// console.log(bodyBlock2);

// const textBlock = document.querySelector('.text');
const textBlocks = document.querySelectorAll('.text');
const textBlocks2 = document.getElementsByClassName('text');
// console.log(textBlock);
// console.log(textBlocks);
// console.log(textBlocks2);

const headerBlock = document.querySelector('#header');

// console.log(headerBlock.classList.value);
// console.log(headerBlock);
headerBlock.classList.add('wrapper');
headerBlock.classList.remove('container');

// -----------------------------------------------------

// console.log(bodyBlock.childNodes);
// console.log(bodyBlock.children);
// console.log(bodyBlock.firstElementChild);

const btnsAction = document.querySelectorAll('a[data-purpose]');

// console.log(btnsAction);

let arrBtnsTextContent = [];

btnsAction.forEach(function(item) {
    let textContent = item.textContent;
    arrBtnsTextContent.push(textContent);
})

// console.log(arrBtnsTextContent);

// ----------- Вивести на екран курси валют --------------------

let btnsCurrency = document.querySelectorAll('a[data-currency]');
let blockCurrency = document.querySelector('#btns-currency');

console.log(btnsCurrency);

btnsCurrency.forEach(item => {
    item.addEventListener('click', () => {
        let courseCurrency = item.getAttribute('data-currency');
        let nameCurrency = item.getAttribute('data-title');
        blockCurrency.insertAdjacentHTML('beforeend', `<p>Course: ${nameCurrency} : ${courseCurrency}</p>`);
    })
})