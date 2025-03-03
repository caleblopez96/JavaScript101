// Use Array.from() to create an array from an array-like or iterable object

// Helpful with converting DOM nodes to arrays

// SYNTAX:
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// PARAMETERS:
// arrayLike - an iterable or array-like object to convert to an array
// mapFn (optional) - function to call on every element
// - element: the current element being processed in the array
// - index: the index of the current element being processed
// thisArg (optional) - value to use as this

// RETURNS:
// a new array instance

// EXAMPLE 1: Convert a string to an array
let stringToArray = Array.from("String");
console.log(stringToArray); // ['S', 't', 'r', 'i', 'n', 'g']

// EXAMPLE 2: Convert a NodeList to an array
let nodeListArray = Array.from(document.querySelectorAll("button"));
console.log(nodeListArray); // []

// EXAMPLE 3: new array and map function
let numbers = new Set([1, 2, 3, 4, 5]);
let doubledNumbers = Array.from(numbers, (num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// EXAMPLE: array from length
console.log(Array.from({ length: 5 }, (element) => (element = true))); // [true, true, true, true, true]

// EXAMPLE: sequence
const zeroToNintyNine = Array.from({ length: 100 }, (el, idx) => idx);
console.log(zeroToNintyNine);
// (100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

const oneToOneHundred = Array.from({ length: 100 }, (el, idx) => idx + 1);
console.log(oneToOneHundred);
// (100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
