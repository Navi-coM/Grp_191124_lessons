'use strict';

// -------- Type Data (Типи даних) -------

// ------- Примитіви ---------
    // 1. Number(число)
    // 2. Bigint(великі числа)
    // 3. String(строка)
    // 4. Boolean(булево значення, логічний тип)
    // 5. Null(нул)
    // 6. undefined(невизначений)
    // 7. Symbol(унікальний id проперті об'єктів)

// --------- Складні типи ---------
    // 8. Object(Об'єкт)


// =================================================

// 1. Number(число) -------

let numb = 4;
let numb_2 = 4.2;
let numb_3 = 1e6;
let numb_4 = Infinity;
let numb_5 = 10 - 'sdf40'; // NaN - Not a Number 

// console.log(typeof numb_5);
// console.log(numb_5);

// 2. BigInt (великі числа) 2 в 53 - 1 ----------

let bigNumb = 100000000000000000000000n;
 
// console.log(bigNumb);
// console.log(typeof bigNumb);

// 3. String (Строка) ----------------
// '', "", ``
let str = 'I like';
let str_2 = 'Beetroot';
let cuurentYear = '2024';

let str_3 = `${str} - ${str_2} from ${+cuurentYear + 1} years`;
let str_4 = str +' - '+ str_2  +' from '+ `${+cuurentYear + 1}` + ' years';

// console.log(str_3);
// console.log(str_4);
// console.log(typeof str_4);

// 4. Boolean (булево значення) ---------------

let bool_1 = true;
let bool_2 = false;
let someData = null;

// console.log(bool_1);
// console.log(bool_2);
// console.log(Boolean(someData));

// 5. Null (нулл) порожнє значення ----------

let amoumntStudent = null;

// console.log(amoumntStudent);
// console.log(typeof amoumntStudent);

// 6. Undefined - змінна без значення ------------

let dateFinishCourse;

// console.log(dateFinishCourse);
// console.log(typeof dateFinishCourse);


// 7. Symbol (Символ)--------------

let id_1 = Symbol('universalID');
let id_2 = Symbol('universalID');

let id_3 = 'universalID';
let id_4 = 'universalID';

// console.log(id_1 === id_2);
// console.log(id_3 === id_4);
// console.log(typeof id);

// 8. Object (об'єкт) -------------

// object
// array
// function
// class

let student = {
    studentname: 'Iryna',
    age: 28,
    city: 'Curix',
    academy: 'Beetroot',
    isProgrammer: true,
    sayHello: function() {
        alert('Hello Beetroot!!!')
    }
}

// student.sayHello();
// console.log(student);
// console.log(typeof student);

let arrNumber = [1,2,3,4,5];

// console.log(arrNumber);
// console.log(typeof arrNumber);

// function sum() {
//     return 1 + 2;
// }

// console.log(sum);
// console.log(typeof sum);
// ========================================================

// ------------ Перетворення типів даних ---------
// Number ---------------
let a = '10';
// console.log(a);
// console.log(+a);

let b = '8'; 
let c = '2';
let d = +b + c;
// console.log(d);

// 1) -, *, /, ** - перетворюють строку на число, якщо це можливо
// 2) +(), Number(), parseFloat() - перетворюють строку на число, явне перетворення

// let age_2 = prompt('Ваш вік?'); 

// let strHelloUser = `Hello User, you are ${age_2} yeras old`;
// let newAge = +age_2 + 1;

// console.log(strHelloUser);
// console.log(newAge);

// console.log(typeof age_2);

// let age_3 = prompt('Введіть ступінь для числа'); 
// let res = 5 ** age_3;
// console.log(res);

let someNumb_3 = '';
// console.log(someNumb_3);

let some = 1 + someNumb_3 + 500 / 100; 
// 1 + undefined + 5

let some_2 = 1 + null + 100 + true;

// console.log(some);

// 3) undefined - NaN
// 4) null - 0
// 5) true - 1, false - 0;
// 6) '' - 0;

// let age = null;

// let some_3 = 1 + age + 100 + false;
// console.log(some_3);

let numb_10 = +'5';
// console.log(typeof numb_10);
// console.log(numb_10);

// ------------ String ----------

// let numb_11 = 10;
// numb_11 = String(numb_11);

// console.log(typeof numb_11);
// console.log(numb_11);

// let sum = 5 + numb_11; //'510'

// console.log(sum);

let age_2 = 20;
let someRez = age_2 + 10 - '2' + 5 - true;
console.log(someRez);


//  ----------- Boolean -------------

// -0, 0, null, undefined, '', NaN - false    => 0 
// все інше - true    => 1

let someData3 = Boolean(NaN);
console.log(someData3);

let someSpace = ' ';

console.log(someSpace);
console.log(someSpace.length);


let finishExirs = 0 - Boolean('false') + ('1' + 5) * 100 / 50 + Boolean(0);
console.log(finishExirs);
