// .slice() returns copy of portion of array

// SYNTAX:
// .slice()
// .slice(start)
// .slice(start, end)

// PARAMETERS:
// start (optional) - index to start extracting from
// end (optional) - index to end extraction

// RETURNS:
// new array with sliced elements

// MUTATION:
// does NOT mutate original array.

// EXAMPLE:
const og = [1, 2, 3, 4, 5];
const ogSliced = og.slice(2, 4);
console.log(ogSliced); // [3, 4]

// EXAMPLE:
// Write a JavaScript function to get the
// first element of an array.
// Passing the parameter 'n' will return
// the first 'n' elements of the array.

function firstEl(array, n) {
  if (n == null) {
    return array[0];
  }
  return array.slice(0, n);
}

firstEl([7, 9, 0, -2]); // 7
firstEl([], 3); // []
firstEl([7, 9, 0, -2], 3); // [7, 9, 0]
