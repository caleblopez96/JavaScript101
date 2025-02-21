// .sort() sorts the elements of an array in place and returns the sorted array.

// SYNTAX:
// array.sort()
// array.sort(compareFn)

// PARAMETERS:
// compareFn (optional) - A function that defines the sort order. It takes two arguments:
//   - a - The first element to compare.
//   - b - The second element to compare.

// RETURNS:
// A reference to the original array, now sorted.
// - (a, b) => a - b sorts numbers in ascending order.
// - (a, b) => b - a sorts numbers in descending order.
// Note: If no compare function is provided, the array elements are converted to strings and sorted according to Unicode values.

// MUTATION:
// MUTATES the original array.

// EXAMPLE 1: sorting an array of numbers in ascending order
const numbers1 = [12, 45, 13, 76, 25];
const sortedAsc = numbers1.sort((a, b) => a - b);
console.log(sortedAsc); // [12, 13, 25, 45, 76]

// EXAMPLE 2: sorting in ascending order and demonstrating mutation
const numbers2 = [99, 45, 88, 31, 66];

const ascending = numbers2.sort((a, b) => a - b);
console.log(ascending); // [31, 45, 66, 88, 99]
console.log(numbers2); // [31, 45, 66, 88, 99]

// EXAMPLE 3: sorting in descending order
const descending = numbers2.sort((a, b) => b - a);
console.log(descending); // [99, 88, 66, 45, 31]
console.log(numbers2); // [99, 88, 66, 45, 31]

// EXAMPLE 4: sorting an array with default sort
const fruits = ["banana", "cherry", "apple", "date"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // ['apple', 'banana', 'cherry', 'date']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
