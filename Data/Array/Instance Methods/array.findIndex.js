// .findIndex() returns the index of the first element
// that satisfies the provided function

// SYNTAX:
// .findIndex(callbackFn)
// .findIndex(callbackFn, args)

// EXAMPLE:

const array1 = [1, 15, 23, 41, 32]
const index = array1.findIndex((num) => num > 30)
console.log(index) // 3 (since the first number that is greater is index 3)