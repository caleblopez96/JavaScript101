// .lastIndexOf() returns the last index at which a specified element can be found

// SYNTAX:
// .lastIndexOf(searchElement)
// .lastIndexOf(searchElement, fromIndex)

// PARAMETERS:
// searchElement - element to search the array for
// fromIndex - index to start search from

// RETURNS:
// the last index of searchElement in the array; -1 if not found

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const longArray = [1, 2, 3, 1, 4, 5, 1, 2, 3, 6, 5];
console.log(longArray.lastIndexOf(1)); // 6

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
