// .at() retrieves an element at the specified index.
//
// supports negative indices for reverse lookup.

// SYNTAX:
// array.at(index)

// PARAMETERS:
// index - The position of the element to retrieve. Can be negative to count from the end.

// RETURNS:
// The element at the given index, or `undefined` if the index is out of bounds.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLES:
const array = [1, 2, 3, 4, 5];

console.log(array.at(3)); // 4
console.log(array[-1]); // undefined
console.log(array.at(-1)); // 5 (last element)
console.log(array.at(-2)); // 4 (second-to-last element)
console.log(array.at(10)); // undefined (out of bounds)

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
