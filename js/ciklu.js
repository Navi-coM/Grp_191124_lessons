'use strict';


// ------------------- Цікли -------------------

// 1 ----- FOR ---------------------

// let numb = 0;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// console.log(numb);


// for(start; condition; step) {block loop}

// let i = 0;

// for (i = 1; i === 0 ; i++) {
//   console.log(i);
// }

// console.log(i);


// 2. While(умова) --------------

let i = 0;  // Стартове значення

// while(i <= 10) {  // умова перевірки
//   console.log(i);  // тіло циклу
//   i++;              //крок
// }

// 3. Do While ---------------

// do {
//   console.log(i);
//   i += 2;
// } while (i <= 10);

// 4. for...of --------------------

// let arrNames = ['Iryna','Alina','Vladik'];
// console.log(arrNames.length);

// for(let name of arrNames) {
//   console.log(name);
// }


// 5. for...in ----------------------

let user = {
  name: 'Oleh',
  age: 28,
  city: 'Helsinki'
}

for(let key in user) {
  console.log(`${key}: ${user[key]}`);
}

console.log(user.name);

// ---------------- break continue------

// break - повністю зупиняє виконання циклу
// continue - пропускаю поточну ітерацію

// for (let i = 0; i <= 5; i++) {
//   if(i === 4) break;
//   console.log(i);
// }

for (let i = 0; i <= 5; i++) {
  if(i % 2 === 0) continue;
  console.log(i);
}