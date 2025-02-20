// .splice() change elements in array by removing or replacing or adding new elements

// SYNTAX:
// .splice(start)
// .splice(start, deleteCount)
// .splice(start, deleteCount, item1, ..., itemN)

// PARAMETERS:
// start - index to start at
// deleteCount (optional) - number of elements to delete
// item1, ..., itemN (optional) - elements to add to array

// RETURNS:
// array of deleted items

// MUTATION:
// mutates original array

// EXAMPLE:
const evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(2, 1)); // [ 6 ] returns array of deleted items
console.log(evenNums); // [2, 4, 8, 10];
