'use strict'

const obj = {};                  // літерал об'єкту
const obj_1 = new Object();      // конструктор Об'єкту

// function Object () {
//     let obj = {}
// }


let student = {
    // key: value      property(властивості)
    name: 'Iryna',
    surName: 'Shastina',
    age: 25,
    isProgrammer: true,
    skills: ['html','css','js'],

    sayHello: function() {                         //метод
        alert(`Hello Group, my name is ${this.name}`);
    },
    getFullName() {                                  //метод
        console.log(`${this.name} ${this.surName}`)
    }
}

// console.log(student);
// console.log(student.name);
// student.name = 'Vlada';
// console.log(student.name);
// console.log(student);
// console.log(student['age']);
// console.log(student['skills']);

// student.getFullName();

// getFullName()

delete student.age;              // видалення властивості
// console.log(student.age);

// student['city'] = 'Basel';
student.city = 'Basel';

// console.log(student);
// ---------------------Перевірка наявності ключа-----------------------------------

console.log('city' in student);


const user = {
    name: 'Oleh',
    email: 'asdasd@mail.com',
    country: 'Ukraine',
    city: 'Dnipro'
}

const blockForValue = document.querySelector('#value');

function isTrueValue(key, object) {
    if(key in object) {
        blockForValue.innerHTML = `<p>${key} - такий ключ існує</p>`;
    } else {
        blockForValue.innerHTML = `<p>Такого ключа не існує</p>`;
    }
}

isTrueValue('name', student);
isTrueValue('country', user);
// --------------Object.keys, Object.values, Object.entries-----------------------------------------

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// ---------------for in----------

for(let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// ------------ деструктуризація об'єктів -----------

// let {name, city} = user;

// console.log(name);
// name = 'Yarl';
// console.log(name);

// console.log(city);
// console.log(country);

// -------------- Копіювання об'єктів ------------

// let newUser2 = user;
let newUser = {};

// 1. Через for in -

for(let key in user) {
    newUser[key] = user[key]
}
// console.log(newUser);
// console.log(newUser === user);
// console.log(newUser2 === user);

// 2. Object.assign() -----------------

let newStudent2 = Object.assign(student);

console.log(newStudent2);

let newObj1 = {
    itSchool: 'Beetroot',
    name: 'Alina',
}

let newObj2 = {
    gender: 'male',
}

Object.assign(newObj2, [student, newObj1]);

console.log(newObj2);

// ... spread ------------

const mentor = {
    name: 'Ivan',
    age: 41
}

const copyMentor = { ...mentor, ...newObj1, ...student};

console.log(copyMentor);
console.log(copyMentor === mentor);

// "name":"Ivan",
// "age":"41",

// JSON.parse
// JSON.stringify