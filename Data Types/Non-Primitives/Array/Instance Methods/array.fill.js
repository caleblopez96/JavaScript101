// .fill() replaces elements in an array with a specified value within a range.

// SYNTAX:
// array.fill(value)
// array.fill(value, start)
// array.fill(value, start, end)

// PARAMETERS:
// value - The value to fill the array with.
// start (optional) - The index to start filling (default is 0).
// end (optional) - The index to stop filling (exclusive, default is array.length).

// RETURNS:
// The modified original array.

// MUTATION:
// Modifies the original array in place.

// EXAMPLE 1: filling the entire array
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]

// EXAMPLE 2: filling from index 2 to the end
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 2);
console.log(arr2); // [1, 2, 9, 9, 9]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
