// in JavaScript, this can refer to different things depending on its context

// 1. Global scope (window in browsers)
console.log(this); // window {}

// 2. Inside an object method (this refers to the object)
const user = {
  name: "Walter White",
  getName: function () {
    return this.name; // this refers to the user object
  },
};
console.log(user.getName()); // "Walter White"

// 3. Inside a class (this refers to the instance)
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name; // this refers to the instance of User
  }
}

const user1 = new User("Jesse Pinkman");
console.log(user1.getName()); // "Jesse Pinkman"

// 4. In an event listener (this refers to the element)
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", function () {
  console.log(this); // this refers to the button element
});

// 5. In an arrow function (this is inherited from surrounding scope)
const person = {
  name: "Saul Goodman",
  regularFunction: function () {
    console.log(this.name); // this refers to person
  },
  arrowFunction: () => {
    console.log(this.name); // this refers to the surrounding scope --> undefined. (window in the browser)
  },
};

person.regularFunction(); // "Saul Goodman"
person.arrowFunction(); // undefined
