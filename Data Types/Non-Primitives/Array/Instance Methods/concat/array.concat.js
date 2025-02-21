// .concat() merges arrays or values into a new array without modifying the original.

// SYNTAX:
// array.concat(value1, value2, ..., valueN)

// PARAMETERS:
// value1, ..., valueN - Arrays and/or values to concatenate to the original array.

// RETURNS:
// A new array containing the original array followed by the provided values or arrays.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLES:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayA = ["a", "b", "c"];
const arrayB = ["d", "e", "f"];

// Concatenating multiple arrays
const mergedArray = array1.concat(array2, arrayA, arrayB);
console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"]

// Using a function to concatenate multiple arrays dynamically
function arrayConcatenate(...arrays) {
  return [].concat(...arrays); // Alternative: arrays.flat()
}

console.log(arrayConcatenate(array1, array2, arrayA, arrayB));
// Output: [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
