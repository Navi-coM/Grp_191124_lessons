'use strict'

// ---------- AJAX (Async JS and XML (JSON - JavaScript Object Notation)) -----------------

// console.log(`Firts Action`);

// let someAction = () => console.log(`Second Action`);
// someAction();
// setTimeout(() => console.log(`Third action`), 0);

// console.log(`Last Action`);

// -------------------------
// 1. setTimeout
// 2. Promise
// 3. Async Await
// 4. XMLHttpRequest
// 5. fetch

// ---------------------------
// 4. XMLHttpRequest
let xhr = new XMLHttpRequest();
let urlRequest = 'https://jsonplaceholder.typicode.com/todos/2';

// xhr.open('GET', urlRequest, true);
// xhr.onload = function() {
//     if(xhr.status === 200) {
//         // console.log(JSON);
//         let newObj = JSON.parse(xhr.responseText);
//         newObj.title = 'Watch football';
//         console.log(newObj.title);
//         console.log(newObj);
//     } else {
//         console.error(`Error request`, xhr.status)
//     }
// }
// xhr.send();

// 5.Fetch -----------

// fetch(urlRequest)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error =>  console.error(`Error:`, error))


    // ------------------ Promise (обіцянка) -----------

// Promise - обіцянка щось виконати коли щось відбудеться
// Стан - 1) pending (очикування), 2) fulfilled (успіх), 3) rejected (неуспіх)
// Result - 1) undefined, 2) value, 3) error

// pending     fulfilled     rejected
//              resolve       reject
// undefined    value          error
             //  then()        catch()

const promise = new Promise((resolve,reject) => {
    resolve (`OK`);
    setTimeout(() => {
        reject(new Error(`Error`))
    }, 1000);
})

// promise.then(() => value);
// promise.finally(console.log(`Виконаєтьс прилюбому сценарію`));

// console.log(promise);


// --------------------JSON перетворення -------------

let student_1 = {
    name: 'Oleh',
    age: 26
}

// console.log(student_1);

let jsonStudent_1 = JSON.stringify(student_1);
console.log(jsonStudent_1);
// console.log(typeof jsonStudent_1);

let parseStudent_1 = JSON.parse(jsonStudent_1);
console.log(parseStudent_1);



// --------------------- Fetch ------------


let btnAddPost = document.querySelector('.btn_post');
let btnAddUser = document.querySelector('.btn_user');
let blockPosts = document.querySelector('.posts');
let blockUsers = document.querySelector('.users');
let amountPost = document.querySelector('.amount');
let btnDel = document.createElement('button');

const urlPosts = new URL('https://jsonplaceholder.typicode.com/posts');


let getAmountPosts = function() {
    let amountPostValue = amountPost.value;
    let urlPostsLimit = new URL(`?&_limit=${amountPostValue}`, urlPosts);
    return urlPostsLimit;
}

function addPost() {
    fetch(getAmountPosts())
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            data.forEach(post => {
                blockPosts.insertAdjacentHTML('beforeend', `<p><span>${post.id}</span>:<b>${post.title}</b><br/>${post.body}</p>`)
            });
        })
        .catch(console.error)
        .finally(console.log(`Я спрацюю в любому випадку!!!`))
}

btnAddPost.addEventListener('click', addPost);
blockUsers.addEventListener('click', addStydent);

let localUrl = './stydents.json';

function addStydent() {
    fetch(localUrl)
     .then(response => {
        if(response.ok){
           return response.json();
        }
    })
    .then(json => {
        json.forEach(user => {
            blockUsers.insertAdjacentHTML('beforeend', `<p><span>${user.id}</span>:<b>${user.name}</b><br/>${user.age}</p>`);
        })
    })
    .catch(console.error)
    .finally(console.log(`Я спрацюю в любому випадку`))
}


// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json