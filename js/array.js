'use strict'

// --------------------- Array ----------------

// 1. Індекси замість ключів
// 2. Масив - це як правило однотипні дані
// 3. length = останный індекс  + 1

// Як створити масив ---------------

// 1) let arr = [];
// 2) let arr_2 = new Array();

let arrFoods = ['bread', 'milk', 'beer', 'sausage'];
// let user = {
//     name: 'Ivan',
//     age: 41
// } 

// console.log(arrFoods);
// console.log(typeof arrFoods);
// console.log(Array.isArray(arrFoods));
// console.log(typeof user);
// console.log(arrFoods[0]);
// console.log(arrFoods.length);

// arrFoods[99] = 'Meat';

// console.log(arrFoods[5]);
// console.log(arrFoods.length);

// delete arrFoods[2];
// console.log(arrFoods);

// -----------------Як додавати дані в масив--------------------

let someDrink = ['whiskey', 'rom', 'vodka'];
arrFoods.push(someDrink);

// console.log(arrFoods);

// -----------------------------------------

let arrFoods_2 = [
    {
        name: 'bread',
        amount: 3,
        isBought: true
    },
    {
        name: 'milk',
        amount: 20,
        isBought: false
    },
    {
        name: 'beer',
        amount: 3,
        isBought: false
    }
];

console.log(arrFoods_2);

arrFoods_2[1].amount = 25;
console.log(arrFoods_2[1].amount);

const btnAddFood = document.querySelector('#btn_amount');
const blockAmount = document.querySelector('#amount');
const nameFood = document.querySelector('#name-food');
const amountFood = document.querySelector('#amount-food');
const boughtStatus = document.querySelector('#bought-food');


function addAmountFood() {
    let nameFoodValue = nameFood.value;
    let amountFoodValue = amountFood.value;
    let isBoughtValue = false;

    arrFoods_2.push({'name': nameFoodValue, 'amount':amountFoodValue, 'isBought':  isBoughtValue});

    for(let title of arrFoods_2) {
        blockAmount.insertAdjacentHTML('beforeEnd', `<p>${title.name}: ${title.amount} <input type="checkbox" checked></p>`);
        let inputBoughtStatus = document.createElement('input');
        console.log(inputBoughtStatus);

        // if()
        
    }
    arrFoods_2 = [];
}

btnAddFood.addEventListener('click', addAmountFood);

// classList.add('text-through');
// 
// --------------------------- пепребор масива (Цикли)---------------
// 1 For 

for(let i = 0; i < arrFoods.length; i++) {
    if(arrFoods[i] === 'milk') {
        console.log(arrFoods[i]);
    }
}

// 2 For of 

for (let title of arrFoods_2) {
    if(title.isBought === false) {
       console.log(title);
       // blockAmount.innerHTML += `<p>${name.name}</p>`;
    }
}

// ----------------------- ForEach (метод)--------------


arrFoods_2.forEach(function(item) {
    let nameUpper = item.name.toUpperCase();
    blockAmount.innerHTML += `<p>${nameUpper}</p>`;
})

console.log(arrFoods_2);
