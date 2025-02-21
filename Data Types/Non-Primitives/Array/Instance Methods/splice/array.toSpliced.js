// .toSpliced() creates a new array by removing or replacing elements in the original array
// and/or adding new elements, without modifying the original array.

// SYNTAX:
// .toSpliced(start)
// .toSpliced(start, deleteCount)
// .toSpliced(start, deleteCount, item1, ..., itemN)

// PARAMETERS:
// start - index to start at
// deleteCount (optional) - number of elements to delete
// item1, ..., itemN (optional) - elements to add to the array

// RETURNS:
// A new array that contains the modified elements.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE:
console.log([1, 3, 5, 7, 9].toSpliced(3, 2)); // [1, 3, 5, 9]

// EXAMPLE:
const evenNums = [2, 4, 6, 8, 10];
const evenNumsSpliced = evenNums.toSpliced(1, 2, 5, 7);

console.log(evenNums); // [2, 4, 6, 8, 10]
console.log(evenNumsSpliced); // [2, 5, 7, 8, 10]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced
