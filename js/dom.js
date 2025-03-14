'use strict'
// ----------- Вивести на екран курси валют --------------------

let btnsCurrency = document.querySelectorAll('a[data-currency]');
let blockCurrency = document.querySelector('#btns-currency');

// console.log(btnsCurrency);

btnsCurrency.forEach(item => {
    item.addEventListener('click', () => {
        let courseCurrency = item.getAttribute('data-currency');
        let nameCurrency = item.getAttribute('data-title');
        blockCurrency.insertAdjacentHTML('beforeend', `<p>Course: ${nameCurrency} : ${courseCurrency}</p>`);
    })
})


// --------------------------- HTMLCollection - жива колекція (getElementsByClassName
// getElementsByTagName )-------------

const paragrhs = document.getElementsByClassName('pharagraph');
const blockParagraphs = document.querySelector('#paragraphs');
// console.log(paragrhs);

// Додамо ще один параграф  ----------------
const newParag = document.createElement('p');
newParag.classList.add('pharagraph');
newParag.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
// blockParagraphs.appendChild(newParag);

// console.log(paragrhs);
// const arrParagraphs = Array.from(paragrhs);
const arrParagraphs2 = [...paragrhs];
// console.log(arrParagraphs2);

// arrParagraphs2.map(function(item) {
//     let textParagr = item.innerHTML;
//     console.log(textParagr);
// })

// --------------------------- NodeList - нежива колекція (querySelectorALL)-------------

const paragrhs2 = document.querySelectorAll('.pharagraph');
// console.log(paragrhs2);

// Додамо ще один параграф  ----------------
const newParag2 = document.createElement('p');
newParag2.classList.add('pharagraph');
newParag2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
// blockParagraphs.appendChild(newParag2);

// paragrhs2.forEach(function(item) {
//     console.log(item.classList);
// })


// -------------------------- Додавання елементу на сторінку ---------

// function addEl(tagName, className) {
//     let newEl = document.createElement(tagName);
//     newEl.classList.add(className);
//     newEl.innerText = `Our Group is the Best!!!`;
//     blockParagraphs.appendChild(newEl);
// }

// addEl('p', 'new-text');
// addEl('a', 'link');

// --------------------------------------------------

const linksTagName = document.querySelectorAll('.create-link');
const blockForNewel = document.querySelector('#new-el');


// linksTagName.forEach(function(item) {
//     const newTagName = item.getAttribute('data-tagname');

//     function addEl2() {
//         let newEl = document.createElement(newTagName);
//         newEl.classList.add('test');
//         newEl.innerText = `Our Group is the Best!!!`;
//         blockForNewel.appendChild(newEl);
//     }
//     item.addEventListener('click', addEl2);
// })
// ------------------------------------------------------------------

function someFunction() {
    alert(`${this.tagName}`);
}

linksTagName.forEach(function(item) {
    item.addEventListener('click', someFunction);
})