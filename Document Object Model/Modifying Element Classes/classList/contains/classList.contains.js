// use .contains() to check if an element has a class

// SYNTAX:
// element.classList.contains("className")

// PARAMETER:
// className - the name of the class you want to check for

// EXAMPLE:
// <h1 class="main font-primary">Main heading</h1>
const h1 = document.querySelector("h1")
console.log(h1.classList.contains("main")) // true