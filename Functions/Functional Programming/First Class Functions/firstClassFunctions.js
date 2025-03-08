// In JavaScript, functions are first-class citizens, meaning they can be:
// 1. Assigned to variables
// 2. Passed as arguments to other functions
// 3. Returned from other functions
// 4. Stored in data structures (like arrays or objects)

// JavaScript treats functions like any other value, allowing them to be manipulated
// just like numbers, strings, or objects. However, since they are executable,
// they also have unique behaviors—like being callable.

// EXAMPLE: storing a function as a variable
const greet = (person) => `Hello ${person}`;
console.log(greet("John Pork")); // Hello John Pork

// EXAMPLE: passing function as argument to another function
console.log([1, 2, 3, 4, 5].filter((n) => n % 2 === 0));

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746890#overview
