'use strict';

let student = {
    name: 'Alina',
    city: 'Kyiv',
    course: 'front-end',
    sayHello() {
        alert(`Hello ${this.name}`)
    }
}

let student_2 = {
    name: 'Yarik',
    city: 'Paris',
    course: 'front-end',
    sayHello() {
        alert(`Hello ${this.name}`)
    }
}

// console.log(student);
// console.log(student_2);
// student.sayHello();
// student_2.sayHello();


// ------ DRY (ont repeat yourself) -------------------

// ------ Перед класами було так ----------

// function Student(name, city, course) {
//     this.name = name;
//     this.city = city;
//     this.course = course;
//     this.sayHello = function() {
//         alert(`Hello ${this.name}`);
//     }
// }

// let student_3 = new Student('Oleh', 'Kyiv', 'front-end');
// let student_4 = new Student('Julia', 'Dnipro', 'front-end');
// let student_5 = new Student('Sveta', 'Odessa', 'front-end');

// -------------- Нарешті прийшли до Class ---------------

// Class === Function

// gender, height, weight, color, age, color_hair

class Student{
    constructor(name, city, course = 'front-end') {
        this.name = name;
        this.city = city;
        this.course = course;
    }

    sayHello() {
        alert(`Hello ${this.name}`);
    }
}
console.log(typeof Student);

let stydent_5 = new Student('Iryna', 'Zurihhh', 'back-end');

console.log(stydent_5);
stydent_5.sayHello();


// ----------------Class Expression -------------------

// make, model, color, speed 
let Car = class {
    constructor(make, model, color, speed) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.speed = speed;
    }

    maxSpeed() {
        console.log(`${this.speed * 2} km/h`);
    }

    get fullName() {
        return `${this.make} ${this.model}`;
    }

}

let carAudi = new Car('Audi', 'RSQ8', 'grey', '240');
console.log(carAudi.fullName);


class Food {
    constructor(name, price, amount) {
        this.name = name;
        this._price = price;
        this.amount = amount;
    }

    get price() {
        return `${this._price.tofixed(1)}`;
    }

    set price(newPrice) {
        if(newPrice <= 0) {
            console.log(`Price is not defined`);
            
        } else {
            this._price = newPrice
        }
    }
}

let sousage = new Food('sousage', 10, 10);

console.log(sousage);

sousage.price = 20;

console.log(sousage);


// ------------------ ДЗ !Завдання Самостійне Взяти дані з інпутів
// ---- і створити екземпляр класу Stydent з цими даними і вивести на сторніку при натисканні на кнопку Create Student
// 
// -------------------------- Expert level виводити списком на сторінку з нпорядковим номером ------

