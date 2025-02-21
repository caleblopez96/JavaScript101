// .slice() returns a shallow copy of a portion of an array into a new array.

// SYNTAX:
// array.slice()
// array.slice(start)
// array.slice(start, end)

// PARAMETERS:
// start (optional) - the index to start extracting from (inclusive)
// end (optional) - the index to end extraction (exclusive)

// RETURNS:
// A new array with the sliced elements, based on the specified start and end indices.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE 1: basic usage of .slice()
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(2, 4);
console.log(slicedArray); // [3, 4]
console.log(originalArray); // [1, 2, 3, 4, 5] (original array remains unchanged)

// EXAMPLE 2: function to get the first element(s) of an array
function firstEl(array, n) {
  if (n == null) {
    return array[0]; // returns the first element if no parameter is passed
  }
  return array.slice(0, n); // returns the first 'n' elements
}

console.log(firstEl([7, 9, 0, -2])); // 7 (first element)
console.log(firstEl([], 3)); // [] (empty array)
console.log(firstEl([7, 9, 0, -2], 3)); // [7, 9, 0] (first three elements)

// EXAMPLE 3: slicing with negative indices
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const slicedFruits = fruits.slice(-3);
console.log(slicedFruits); // ['cherry', 'date', 'elderberry']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
