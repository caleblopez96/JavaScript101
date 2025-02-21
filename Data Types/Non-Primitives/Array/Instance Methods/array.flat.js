// use .flat() to create a new array with all sub-array elements concatenated

// SYNTAX:
// .flat()
// .flat(depth)

// PARAMETERS:
// depth (optional) - depth level to flatten

// RETURNS:
// a new array with the sub array elements concatenated to it

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const flattenArray = [1, 2, 3, [4, 5, [6, 7, 8, 9]]];
console.log(flattenArray.flat(1)); // [1, 2, 3, 4, 5, [6, 7, 8, 9]]
console.log(flattenArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
