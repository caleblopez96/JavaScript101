// .splice(start, deleteCount, itemToAdd) change elements in array by removing or replacing or adding new elements

// RETURNS array of deleted items

// MUTATES ORIGINAL ARRAY

// SYNTAX:
// .splice(start, deleteCount, itemToAdd)

const evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(2, 1)); // [ 6 ] returns array of deleted items
console.log(evenNums); // [2, 4, 8, 10];
