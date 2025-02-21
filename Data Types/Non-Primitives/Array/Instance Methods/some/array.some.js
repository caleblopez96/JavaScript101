// .some() checks if at least one element in the array passes the test implemented by the provided function.

// SYNTAX:
// array.some(callbackFn)
// array.some(callbackFn, thisArg)

// PARAMETERS:
// callbackFn - Function to test for each element. It accepts three arguments:
//   - element - The current element being processed in the array.
//   - index (optional) - The index of the current element.
//   - array (optional) - The array some was called upon.
// thisArg (optional) - Value to use as `this` when executing `callbackFn`.

// RETURNS:
// A boolean indicating whether at least one element passes the test.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE 1:
console.log([1, 2, 3, 4, 5].some((num) => num === 0)); // false

// EXAMPLE 2: check for even numbers
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
  return element % 2 === 0;
});

console.log(hasEven); // true

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
