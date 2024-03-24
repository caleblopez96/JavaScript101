// use array.join() to create and return
// a new string by concatenating all of the elements in the array,
// separated by commas or a specified separator string.

// SYNTAX:
// join()
// join(separator)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join("|")); // 1,2,3|4,5,6|7,8,9
