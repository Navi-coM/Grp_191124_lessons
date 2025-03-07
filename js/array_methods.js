'use strict';

// Методи долдавання і видалення ---------------

// 1. POP, PUSH  (stack)----------------

let arrNumb = [1, 2, 3, 4];

// console.log(arrNumb);

// arrNumb.push(8);
// console.log(arrNumb);

// let newArrNumb = arrNumb.pop();

// console.log(arrNumb.pop());
// console.log(arrNumb);

// 2. Shift, Unshift (черга) ----------------


// arrNumb.shift();

// console.log(arrNumb);

// arrNumb.unshift(10);

// console.log(arrNumb);

// ----------- Splice, Slice -----------

// 1. Splice (додає, видаляє, заміняє)---- 

let strWords = 'I like Beetroot every day';
// console.log(Array.isArray(strWords));

let arrWords = strWords.split(' ');
// console.log(arrWords);

// arrWords.splice(0, 2);


// arrWords.splice(0, 2, 'We', 'are');
// console.log(arrWords);

// ['I', 'like', 'Our', 'group', 'every', 'day'];

// arrWords.splice(2, 1, "Our", "group");
// console.log(arrWords);

// ------------ Варіантии зробити масив порожнім --------

// arrWords = [];
// arrWords.splice(0);
// arrWords.length = 0;
// console.log(arrWords);


// 2 Slice ----------------------

// arr.slice(start, end);

let nameStudent = 'Yaroslav';
let arrNameLetters = nameStudent.split('');

// console.log(arrNameLetters);

let newString = arrNameLetters.slice(4, 6);
let newString2 = arrNameLetters.slice(0);
// console.log(newString);
// console.log(newString2);

// -----------------3. Concat ---------------

let arrNumb2 = [10, 11, 12];

let newArrNumb2 = arrNumb.concat(...arrNumb2)

console.log(newArrNumb2);

// ----------------- 4. Map ----------------

let arrSquareNumb = arrNumb2.map(function (numb) {
    return numb ** 2;
})
let arrSquareNumb2 = arrNumb2.forEach(function (numb) {
    console.log(numb ** 2);
})
// console.log(arrSquareNumb);
// console.log(arrNumb2);
// console.log(arrSquareNumb2);

console.log(arrWords.map(item => item.length));

// let some = 8

// ++++++++++++++ HOME WORK +++++++++++++++

// Вивести в консоль найдовше ім'я з масиву arrWords, 
// ви можете використовувати любий метод масивів.




// --------------- 5. Filter -------------------------

let arrStudent = [
    { id: 1, name: 'Oleh' },
    { id: 2, name: 'Alina' },
    { id: 3, name: 'Yaroslav' }
]

console.log(arrStudent.filter(item => item.id <= 2));
console.log(arrStudent.filter(item => item.name.length > 5));

// ---------------- 6. Sort -----------------------

let arrFoods = ['bread', 'milk', 'beer'];
let arrNumbs = [30, 20, 8];

console.log(arrFoods.sort((a, b) => a - b));

console.log(arrFoods.sort());
console.log(arrNumbs.sort(compareNumeric));

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

// ----------------- 7. Reduce -----------------

// arrNumb_2.reduce(function(accumulator, item, index, array));

let arrSalary = [1500, 2000, 800, 500];
const premija = 1000;

let result = arrSalary.reduce(function(sum, salary) {
    return sum + salary;
}, premija);

console.log(result);


// setAttribute('checked', false);
// getAttribute('checked');