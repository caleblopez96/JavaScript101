// use the spread operator to unpack values of an array

// SYNTAX:
// ...array

// EXAMPLE:
const spreadArray = [1, 2, 3, 4, 5];
console.log(...spreadArray); // 1 2 3 4 5

// You can use spread operator to combine two arrays
const spreadArray2 = ["A", "B", "C", "D"];
const combinedArray = [...spreadArray, ...spreadArray2];
console.log(combinedArray); // [1, 2, 3, 4, 5, "A", "B", "C", "D"];
