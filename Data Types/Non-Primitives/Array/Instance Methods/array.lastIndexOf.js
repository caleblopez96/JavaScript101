// .lastIndexOf() returns the last index at which a specified element can be found in the array.
// does NOT mutate the original array.

// SYNTAX:
// array.lastIndexOf(searchElement)
// array.lastIndexOf(searchElement, fromIndex)

// PARAMETERS:
// searchElement - the element to search for in the array.
// fromIndex (optional) - the index to start the search from, searching backwards.

// RETURNS:
// the last index of searchElement in the array; -1 if not found.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE:
const longArray = [1, 2, 3, 1, 4, 5, 1, 2, 3, 6, 5];
console.log(longArray.lastIndexOf(1)); // 6 (last occurrence of 1)
console.log(longArray.lastIndexOf(2)); // 7 (last occurrence of 2)
console.log(longArray.lastIndexOf(3)); // 8 (last occurrence of 3)
console.log(longArray.lastIndexOf(10)); // -1 (not found)

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
