// .toSorted() sorts elements in an array and returns them in a new array.

// SYNTAX:
// .toSorted()
// .toSorted(compareFn)

// PARAMETERS:
// compareFn (optional) - function that determines order of elements
// a - the first element for comparison
// b - the second element for comparison

// RETURNS:
// reference to original array, now sorted
// (a, b) => a - b sorts numbers in ascending order
// (a, b) => b - a sorts numbers in descending order
// .toSorted() => converts array elements to strings and sorts by Unicode value

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const numbers = [99, 45, 88, 31, 66];

const numbersSorted = numbers.toSorted((a, b) => a - b);
console.log(numbers); // [99, 45, 88, 31, 66]
console.log(numbersSorted); // [31, 45, 66, 88, 99]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
