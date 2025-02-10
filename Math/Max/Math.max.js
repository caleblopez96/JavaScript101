// The Math.max() static method returns the largest of the numbers given as input parameters,

// returns -Infinity if there are no parameters.

// SYNTAX:
// Math.max(x, y, z)

// EXAMPLE:
console.log(Math.max(1, 3, 2));
// Expected output: 3

const array1 = [1, 3, 2];
console.log(Math.max(...array1));
// Expected output: 3

// use array reduce method to find max value
const array2 = [2, 4, 6];
array2.reduce((a, b) => Math.max(a, b)); // 6

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
