'use strict'
// helloUserMessage();
// ----------------- Function ----------------

// Онсновнмй будівельний блок коду, який повторно можна використовувати.

// 1) Function Declaration -  оголошення функції
// 2) Function expression -  функціональний вираз
// 3) Arrow Function -  стрілкова функція


// 1) Function Declaration --------------------

// function name(params){block function}

function helloUserMessage() {     // створення функції
    alert(`Hello Student!!!`);
}

// helloUserMessage(); // виклик функції

function helloUserName(name) {
    return `Hello ${name}`;
    // console.log('Function the end'); - не буде працювати
}

// console.log(helloUserName('Anton'));
// console.log(helloUserName('Yullia'));
// console.log(helloUserName('Alina'));

const btnHello = document.querySelector('#btn_hello');
const btnSum = document.querySelector('#btn_sum');
const btnLimit = document.querySelector('#btn_limit');
const blockSumResult = document.querySelector('.sum');

// function getNumbAmdSum() {
//     let numb_1 = +prompt(`Enter first number`);
//     let numb_2 = +prompt(`Enter second number`);

//     let sum = numb_1 + numb_2;

//     blockSumResult.innerHTML = `<p>${sum}</p>`;
//     return sum;
// }

function calculateSum(){
    let numb_1 = +prompt(`Enter first number`);
    let numb_2 = +prompt(`Enter second number`);

    let sum = numb_1 + numb_2;
    return sum;
}

function addNewSumInHTML(){
    blockSumResult.innerHTML = `<p>${calculateSum()}</p>`;
}


// btnSum.addEventListener('click', addNewSumInHTML);

const userLimitNumerInpt = document.querySelector('#limit-number'); 

function getLimitNumber(userLimitNumber) {
    userLimitNumber = +userLimitNumerInpt.value;

    for(let i = 3; i <= userLimitNumber; i++) {
        if(i % 2 !== 0) continue
        console.log(i);
    }
}

// btnLimit.addEventListener('click', getLimitNumber);

// 2) Function Espression --------------

// console.log(sum_2());  - так не можна (немає hoisting)
let sum_2 = function() {
    let numb_3 = 15;
    let numb_4 = 6;

    return numb_3 + numb_4;
}

// console.log(sum_2());

let sum_3 = sum_2;

// console.log(sum_3());
// console.log(sum_3 === sum_2);

// 3) Arrow Function (стрілкова функція) ------------

let multiply = function(numb_5 , numb_6) {
    return numb_5 * numb_6
}

let multiply_2 = (numb_5, numb_6) => numb_5 * numb_6

// console.log(multiply_2(3,4));

// 4) Самовикликаюча функція ---------------

// let multiply_3 = ((numb_5, numb_6) => console.log(numb_5 * numb_6))(2, 5);

// let someFunction = (function(name) {
//     console.log(`Hello ${name}`);
//     return name
// })('Oleh');

// console.log(someFunction);


// 5) Работа з аргументами -------------

// function sum_4(numb_1, numb_2, numb_3) {
//     return numb_1 + numb_2;
// }

// console.log(sum_4.length);

// function someArgs() {
//     console.log(arguments.length);
// }


// someArgs(1,2,3,4);  //4
// someArgs();      //0
// console.log(someArgs.length);

// numb_1 = 5
// numb_1 - параметр
// 5 - argument

function sum_5(...args) {
    let sum = 0;
    // console.log(args);
    // console.log(args.length);
    for (let i = 0; i < args.length; i++) {
        sum += (args[i])
    }
    console.log(sum);
}

sum_5(1,2);
sum_5(1,2,5);
sum_5(1,2,5,6,7,8,9);


// 6 Рекурсивна функція --------------------

function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));


// 7 Callback функції -------------------

const calcNumberSquare = num => num ** 2;
const calcDivideTwo = num => num / 2;

const arrNumbers = [1,2,3,4,5];
const arrNumbers_2 = [2,4,6,8];

function changeArrNumbs(arr, callback) {
    let newArrNumbs = [];

    for(let i = 0; i < arr.length; i++) {
        newArrNumbs.push(callback(arr[i]))
    }
    return newArrNumbs;
}

// console.log(changeArrNumbs(arrNumbers, calcNumberSquare));
// console.log(changeArrNumbs(arrNumbers_2, calcDivideTwo));
// console.log(changeArrNumbs([1,2,3], factorial));

// 8  Контекст виклику функції Call ---------------------

const stydent = {
    name: 'Alex'
}
const stydent_1 = {
    name: 'Oleh'
}

function sayHelloStydent() {
    console.log(`Hello, ${this.name}`);
}

sayHelloStydent.call(stydent);
sayHelloStydent.call(stydent_1);


function sayHelloStydent1(name) {
    console.log(`Hello, ${name}`);
}
sayHelloStydent1('Iruna')