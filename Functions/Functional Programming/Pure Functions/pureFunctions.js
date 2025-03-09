// pure functions allow you to write simple, predictable functions.

// Referential transparency:
// - the function always gives the same return value for the same arguments.
// - the function cannot depend on any mutable state.
// Side-effect free:
// - the function cannot cause any side effects.
// - side effects may incude I/O (writing to the console or log file), modifying a mutable object, reassigning a variable, etc...

// EXAMPLE: IMPURE FUNCTION 1
// mutating some piece of state (value)
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}
console.log(squareAndUpdateValue(3)); // 9
console.log(value); // 9 --> value is forever mutated

// EXAMPLE: PURE FUNCTION 1
// no side effects: same input always the same output
function square(num) {
  return num * num;
}
console.log(square(3)); // 9

// EXAMPLE: IMPURE FUNCTION 2
// the side effect is an update to the colors array
function addToArray(array, value) {
  return array.push(value);
}
const colors = ["red", "blue"];
addToArray(colors, "white");
console.log(colors); // ['red', 'blue', 'white']

// EXAMPLE: PURE FUNCTION 2
// the array argument is used to help build a new array --> the array argument isnt mutated
function pureAddToArray(array, value) {
  return [...array, value];
}
console.log(pureAddToArray(colors, "green")); // ['red', 'blue', 'white', 'green']
console.log(colors); // ['red', 'blue', 'white'] --> array unmutated

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746896#overview

// 1️⃣ Impure: Modifying a global variable
let count = 0;
function increment() {
  count++;
  return count;
}

// 1. pure
function pureIncrement(count) {
  return count + 1;
}

// 2️⃣ Impure: Changing an array directly
let numbers = [1, 2, 3];
function addNumber(num) {
  numbers.push(num);
}
// 2. pure
function addNumberPure(array, num) {
  return [...array, num];
}

// 4️⃣ Impure: Modifying an object property
let person = { name: "Alice", age: 25 };
function birthday() {
  person.age++;
}

// 5️⃣ Impure: Console Logging
function logMessage(message) {
  console.log(message);
}

// 6️⃣ Impure: Fetching Data (API Call)
async function fetchUserData() {
  return await fetch("https://api.example.com/user");
}

// 7️⃣ Impure: Depending on Date
function getCurrentYear() {
  return new Date().getFullYear();
}

// 8️⃣ Impure: Changing DOM Elements
function updateTitle(text) {
  document.title = text;
}

// 9️⃣ Impure: Mutating Function Arguments
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// 🔟 Impure: Depending on User Input (Prompt)
function getUserInput() {
  return prompt("Enter your name:");
}

// Now write pure versions of these functions!
