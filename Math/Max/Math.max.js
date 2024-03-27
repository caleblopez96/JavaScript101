// The Math.max() static method returns the largest
// of the numbers given as input parameters, 
// or -Infinity if there are no parameters.

// SYNTAX:
// Math.max(x)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// EXAMPLE:
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
