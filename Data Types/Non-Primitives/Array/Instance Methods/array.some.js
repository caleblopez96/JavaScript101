// .some() checks if at least one element in array passes test from function

// SYNTAX:
// .some(callbackFn)
// .some(callbackFn, thisArg)
// .some((element, index, array) => {}, thisArg); no access to 'this'
// .some(function(element, index, array) {}, thisArg); access to 'this'

// PARAMETERS:
// element - current element being processed in the array

// RETURNS:
// boolean if one or more passes test

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
console.log([1, 2, 3, 4, 5].some((num) => num === 0)); // false

// EXAMPLE:
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
  return element % 2 === 0; // Check if the element is even
});

console.log(hasEven); // true

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
