// use .flat() to create a new array with all sub-array elements concatenated into it.

// SYNTAX:
// array.flat()
// array.flat(depth)

// PARAMETERS:
// depth (optional) - The depth level specifying how deep a nested array structure should be flattened.

// RETURNS:
// A new array with the sub-array elements concatenated into it.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE:
const flattenArray = [1, 2, 3, [4, 5, [6, 7, 8, 9]]];
console.log(flattenArray.flat(1)); // [1, 2, 3, 4, 5, [6, 7, 8, 9]]
console.log(flattenArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
