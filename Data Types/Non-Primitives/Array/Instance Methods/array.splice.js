// .splice() changes elements in an array by removing, replacing, or adding new elements.

// SYNTAX:
// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, ..., itemN)

// PARAMETERS:
// start - The index at which to start changing the array.
// deleteCount (optional) - The number of elements to delete from the start index.
// item1, ..., itemN (optional) - The elements to add to the array starting from the start index.

// RETURNS:
// An array containing the deleted elements (if any).

// MUTATION:
// MUTATES the original array.

// EXAMPLE 1: removing an element
const evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(2, 1)); // [6]
console.log(evenNums); // [2, 4, 8, 10]

// EXAMPLE 2: adding elements
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi", "mango");
console.log(fruits); // ['apple', 'kiwi', 'mango', 'cherry']

// EXAMPLE 3: replacing elements
const colors = ["red", "green", "blue", "yellow"];
const removedColors = colors.splice(1, 2, "orange", "purple");
console.log(removedColors); // ['green', 'blue']
console.log(colors); // ['red', 'orange', 'purple', 'yellow']

// EXAMPLE 4: adding elements without removing any
const numbers = [1, 2, 3];
numbers.splice(2, 0, 4, 5);
console.log(numbers); // [1, 2, 4, 5, 3]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
