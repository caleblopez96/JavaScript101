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

// EXAMPLE 3: Using mapFn to modify elements
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = Array.from(numbers, (num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
