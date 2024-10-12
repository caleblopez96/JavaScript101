// use .flat() to create a new array with all sub-array elements concatenated

// SYNTAX:
// .flat()
// .flat(depth)

// EXAMPLE:
const flattenArray = [1, 2, 3, [4, 5, [6, 7, 8, 9]]]
console.log(flattenArray.flat(1)) // [1, 2, 3, 4, 5, [6, 7, 8, 9]]
console.log(flattenArray.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]