'use strict';


// --------------------- Operators (Оператори) ------------------

// Математичні оператори --------------
// +, -, *, /, **, % -------------

// let numb = prompt('Enter som number from 1 to 100','');
// let numbPower = prompt('Enter som number from 1 to 100','');
// let squareNumb = numb ** numbPower;
// console.log(squareNumb);

// let remainderNumb = numb % 3;  
// console.log(remainderNumb);

// let sumNumb = numb + 888;


let arrNumbs = [1,2,3,4,5,6,7,8,9];

// arrNumbs.forEach(numb => {
//     if(numb % 2 !== 0) {
//         console.log(numb);
//     }
// })


// -------------------------------------------

// || - або, працює до першої істини (true), якщо немає true 
    // ,то повретає останнє значення
// && - i, або, працює до першої лжи (false), якщо немає false , 
// то поверне останнє значення
            //false true false
let someVar = 0 || ' ' || -0;
// console.log(someVar);


let someVar_2 = 'false' && 'MArina' && '';
console.log(someVar_2.length);


console.log(Number(NaN));

console.log((0.1 + 0.2) === 0.3);
