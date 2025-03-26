// use Object.is() to determine if two values are the same value

// The only difference between Object.is() and === is in their treatment of signed zeros and NaN values.
// The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

// SYNTAX:
// Object.is(value1, value2)

// PARAMETERS:
// value1 - first value to compare
// value2 - second value to compare

// RETURNS:
// boolean

// EXAMPLE:
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
