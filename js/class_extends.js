"use strict";

// _ - protected (іншому програмісту не можна це змінювати);
// # - private(захищена властивість JS, не змінюється)

class Student {
  constructor(name, city, course = "front-end") {
    this.name = name;
    this.city = city;
    this.course = course;
  }

  sayHello() {
    alert(`Hello ${this.name}`);
  }
}

class Bachelor extends Student {
  constructor(name, city, course = "front-end", age, isBachelor) {
    super(name, city, course);
    this._age = age;
    this._isBachelor = isBachelor;
  }

  #itAcademy = "Beetroot Academy";

  helloStudent() {
    alert(`Hello ${this.name} from ${this.#itAcademy}`);
  }
  sayHello() {
    alert(`How you ${this.course}`);
  }
}

let bachelorOleh = new Bachelor("Oleh", "Miami", "back-end", 28, true);
// bachelorOleh.itAcademy = 'Hillel';
// bachelorOleh._isBachelor = false;
// console.log(bachelorOleh);
// bachelorOleh.sayHello();

// ---------------------- Class Button-----------------------------

class Button {
  constructor(value, width, height, className, padding, borderRadius) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.className = className;
    this.value = value;
    this.borderRadius = borderRadius;
  }

  render() {
    let btn = document.createElement("button");

    btn.style.width = `${this.width}px`;
    btn.style.height = `${this.height}px`;
    btn.style.padding = `${this.padding}px`;
    btn.style.borderRadius = `${this.borderRadius}px`;

    btn.innerText = this.value;
    btn.classList.add(this.className);

    return btn;
  }
}

const blockForButtons = document.querySelector("#all-buttons");

const btnSend = new Button("Send", 110, 40, "btn_send", 5, 12);
const btnReset = new Button("Reset", 110, 40, "btn_reset", 5, 12);
const btnCreate = new Button("Create", 110, 40, "btn_create", 5, 12);
blockForButtons.append(btnSend.render());
blockForButtons.append(btnReset.render());
blockForButtons.append(btnCreate.render());
// console.log(btnSend);

class ModernButton extends Button {
  constructor(
    box_shadow,
    border,
    value,
    width,
    height,
    className,
    padding,
    borderRadius
  ) {
    super(value, width, height, className, padding, borderRadius);
    this.box_shadow = box_shadow;
    this.border = border;
  }

  render() {
    let btnModern = super.render();
    btnModern.style.border = this.border;
    btnModern.style.boxShadow = this.box_shadow;

    return btnModern;
  }
}

const btnResetModern = new ModernButton(
  "#d2d5e2 -1px 0px 4px 3px",
  "2px solid green",
  "Reset",
  110,
  40,
  "btn_reset",
  5,
  0
);
blockForButtons.append(btnResetModern.render());

// -------------------class Component--------------------------

class Component {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}

class Button2 extends Component {
  constructor(selector, onClick) {
    super(selector);
    this.element.addEventListener("click", onClick);
  }

  setText(text) {
    this.element.textContent = text;
  }
}

const newButton = new Button2("#newButton", () => {
  alert(`Button is Clicked!`);
});

// newButton.setText(`Edit`);
// newButton.show();

// ----------------------- Class робота з Password ---------------------

class User {
  constructor(username, password) {
    this.username = username;
    this._password = password; // умовно приватна властивість
  }

  // Метод перевірки паролю
  checkPassword(password) {
    return this._password === password;
  }

  //Метод Зміни паролю
  changePassword(oldPassword, newPassword) {
    if (this.checkPassword(oldPassword)) {
      this._password = newPassword;
      alert(`Password changed successfully`);
    } else {
      alert(`Old password is incorrect`);
    }
  }

  // Метод вивести даны юзера без паролю
  getUserInfo() {
    return {
      username: this.username,
    };
  }
}
const user1 = new User("admin", "12345");
const user2 = new User("user", "qwerty");

// console.log(user1.getUserInfo());
// console.log(user2.getUserInfo());

// console.log(user1.checkPassword('12345'));
// console.log(user2.checkPassword('12345'));

// user1.changePassword('1234','54321');
// console.log(user1.checkPassword('54321'));

// ---------------------- Як перевірити тип даних Class -----------------
console.log(typeof Button);

const newClass = new Button();
console.log(newClass);

console.log(newClass instanceof Button);
console.log(newClass.constructor === Button);

// --------------------------Універсальний Клас для створення HTML елементів-------------------------------------

class ElementCreater {
  constructor(tagName) {
    this.element = document.createElement(tagName);
  }

  setText(text) {
    this.element.textContent = text;
    return this;
  }

  setHTML(html) {
    this.element.innerHTML = html;
    return this;
  }

  setAttr(name, value) {
    this.element.setAttribute(name, value);
    return this;
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  setStyle(property, value) {
    this.element.style[property] = value;
  }

  appendTo(parentEl) {
    if (typeof parentEl === "string") {
      document.querySelector(parentEl).appendChild(this.element);
    } else {
      parentEl.appendChild(this.element);
    }
    return this;
  }

  getElement() {
    return this.element;
  }
}


const newBlock = new ElementCreater("div")
  .setHTML(`<p>Beetroot Academy is the Best!!</p>`)
  .addClass(`new-block`)
  .setAttr("id", "my-block")
  .appendTo("body");

const newLink = new ElementCreater("a")
  .setText(getText()) 
  .addClass(`section__link`)
  .setAttr("href", "https://google.com")
  .appendTo(".new-block");


function getText() {
    let getTextFromResource = 'Ukraine is Win!';
    return getTextFromResource;
}

