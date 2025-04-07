// JavaScript Challenge (50 Topics)

// Basic Concepts

// Variables & Scope: What is the difference between let, const, and var? Provide an example of each.
the difference between these variable declarations are how theyre scoped and whether or not their values can be reassigned. let and const are block scoped and var is function scoped. let and var can have their variable values reassigned, but variables declared with const cannot

// Data Types: List at least five JavaScript data types and provide an example of each.
// String: "JavaScript"
// Boolean: true or false
// Number: let num = 5
// Null: let userAge = null
// Undefined: return type of a func by default
// Array: const array = [1, 2, 3]
// Object: const person = {
name: "caleb
}
// BigInt: 0.091291274129657864357230452
// Symbol: new Symbol()

// Operators: What is the difference between == and === in JavaScript? Provide an example.
the difference between equality and strict equality is === checks for equality of value and type where == only checks value. in javascript values can be coerced, so this can cause strange behaviors. liek 5 == '5' returning true

// Type Coercion: Show an example of implicit type conversion in JavaScript.

// Template Literals: How do template literals improve string concatenation? Provide an example.
template literals provide an easier syntax to work with string and variables:
const num = 5
const name = "caleb"
`hello my name is ${name} and number is ${num}`

// Truthy & Falsy Values: List at least three falsy values and provide an example of checking a falsy value.
three falsy values: 0 false " "
you can check these by using typeof or console.log

// Functions: What is a function declaration vs. a function expression? Provide an example of each.
a function declaration uses the function key word where a function expressesion doesnt
const addTwo = (a, b) => a + b
function addTwo(a, b) {
return a + b
}

// Arrow Functions: Show how an arrow function differs from a regular function.
arrow functions dont use the function keyword and have lexical bnding of this
function example() {
return "hello world"
}
const example = () => "hello world"

// Immediately Invoked Function Expressions (IIFE): Write an IIFE function and explain why it’s useful.
(function getDate() {
const date = new Date()
const day = date.getDate()
}())

theyre useful when you need a function to run automatically on page load and without being called

// Closures: Explain closures and provide an example where they are useful.
A closure is when a function has access to an outer functions variables. They're useful for higher order functions and when you 

// Objects & Arrays
// Objects: Create an object with at least three properties and access them in two different ways.

// Array Methods: Show an example of using .map() and .filter() on an array.

// Destructuring: Demonstrate object and array destructuring with examples.

// Spread & Rest Operators: Show how the spread (...) and rest (...) operators work differently.

// Object Methods: What is Object.keys() and Object.values()? Provide an example.

// Control Flow & Loops
// Conditional Statements: Show an example using if...else and the ternary operator.

// Switch Statement: Provide an example where a switch statement is better than multiple if statements.

// Loops: Write a loop using for, while, and forEach().

// Break & Continue: Show an example using both break and continue.

// Try...Catch: Demonstrate error handling with try...catch in JavaScript.

// Functions & Advanced Concepts
// Call, Apply, Bind: Explain the difference between call(), apply(), and bind() with examples.

// Higher-Order Functions: What is a higher-order function? Provide an example.

// Recursion: Write a recursive function that calculates the factorial of a number.

// Pure Functions: What is a pure function? Provide an example.

// Memoization: Implement memoization in JavaScript to optimize a function.

// DOM Manipulation
// Selecting Elements: Show examples of getElementById(), querySelector(), and querySelectorAll().

// Changing DOM Elements: Modify an element’s text, style, and class using JavaScript.

// Event Listeners: Create an event listener that logs a message when a button is clicked.

// Event Delegation: Demonstrate event delegation using event.target.

// Creating & Removing Elements: Append a new element and then remove it from the DOM.

// Asynchronous JavaScript
// setTimeout & setInterval: Provide an example of setTimeout() and setInterval().

// Promises: Show how to create and handle a basic Promise.

// Async/Await: Convert a Promise-based function to use async/await.

// Fetching Data: Fetch data from an API using fetch() and display it.

// Error Handling in Async Code: Demonstrate how to handle errors in async/await.

// ES6+ Features
// Default Parameters: Write a function that uses default parameters.

// Optional Chaining (?.): Show how optional chaining prevents errors.

// Nullish Coalescing (??): Demonstrate how ?? differs from ||.

// Modules (ES6 import/export): Show how to export and import a function between two files.

// Symbol Data Type: Create a Symbol and use it in an object.

// Object-Oriented Programming (OOP)
// Classes & Objects: Create a class with properties and methods, then instantiate it.

// Prototypes: Explain how prototypes work with an example.

// Inheritance: Show how one class can inherit from another in JavaScript.

// Getter & Setter Methods: Implement get and set in a JavaScript class.

// Static Methods: Create a class with a static method and explain how it works.

// Miscellaneous Topics
// LocalStorage & SessionStorage: Store, retrieve, and delete an item from localStorage.

// Debouncing & Throttling: Implement a simple debounce function in JavaScript.

// Bitwise Operators: Show an example of using a bitwise operator.

// WeakMap & WeakSet: Explain the difference between WeakMap and Map with an example.

// JSON Handling: Convert a JavaScript object into a JSON string and parse it back into an object.
