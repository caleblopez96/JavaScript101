// .reverse() reverses an array
// This method mutates the original array.

// SYNTAX:
// array.reverse()

// PARAMETERS:
// None

// RETURNS:
// The original array reversed.

// MUTATION:
// MUTATES the original array.

// EXAMPLE 1: reversing an array of numbers
const oneThroughFive = [1, 2, 3, 4, 5];
const fiveThroughOne = oneThroughFive.reverse();
console.log(fiveThroughOne); // [5, 4, 3, 2, 1]
console.log(oneThroughFive); // [5, 4, 3, 2, 1]

// EXAMPLE 2: reversing an array of strings
const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.reverse();
console.log(reversedFruits); //["cherry", "banana", "apple"]
console.log(fruits); // ["cherry", "banana", "apple"]

// EXAMPLE 3: reversing an array of objects
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const reversedUsers = users.reverse();
console.log(reversedUsers); // Outputs: [{ name: "Charlie" }, { name: "Bob" }, { name: "Alice" }]
console.log(users); // Outputs: [{ name: "Charlie" }, { name: "Bob" }, { name: "Alice" }]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
