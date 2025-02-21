// .splice() changes elements in an array by removing, replacing, or adding new elements.

// SYNTAX:
// .splice(start)
// .splice(start, deleteCount)
// .splice(start, deleteCount, item1, ..., itemN)

// PARAMETERS:
// start - index to start at
// deleteCount (optional) - number of elements to delete
// item1, ..., itemN (optional) - elements to add to the array

// RETURNS:
// An array containing the deleted elements (if any).
// The original array is modified.

// MUTATION:
// Mutates the original array.

// EXAMPLE:
const evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(2, 1)); // [6]
console.log(evenNums); // [2, 4, 8, 10]

// EXAMPLE: Adding elements
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi", "mango");
console.log(fruits); // ['apple', 'kiwi', 'mango', 'cherry']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
