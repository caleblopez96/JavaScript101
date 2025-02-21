// .sort() sorts elements in an array

// SYNTAX:
// .sort()
// .sort(compareFn)

// PARAMETERS:
// compareFn (optional) - function that determines order of elements
// a - the first element for comparison
// b - the second element for comparison

// RETURNS:
// reference to original array, now sorted
// (a, b) => a - b sorts numbers in ascending order
// (a, b) => b - a sorts numbers in descending order
// .sort() => converts array elements to strings and sorts by Unicode value

// MUTATION:
// MUTATES original array

// EXAMPLE:
[12, 45, 13, 76, 25].sort((a, b) => a - b); // [12, 13, 25, 45, 76]

// EXAMPLE:
const numbers = [99, 45, 88, 31, 66];

const ascending = numbers.sort((a, b) => a - b);
console.log(ascending); // [31, 45, 66, 88, 99]
console.log(numbers); // [31, 45, 66, 88, 99]

const descending = numbers.sort((a, b) => b - a);
console.log(descending); // [99, 88, 66, 45, 31]
console.log(numbers); // [99, 88, 66, 45, 31]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
