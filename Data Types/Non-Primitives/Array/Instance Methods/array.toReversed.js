// .toReversed() returns a new array with the elements of the original array in reverse order.

// SYNTAX:
// .toReversed()

// PARAMETERS:
// None

// RETURNS:
// A new array containing the elements of the original array, reversed.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE:
const oneThroughFive = [1, 2, 3, 4, 5];
const fiveThroughOne = oneThroughFive.toReversed();
console.log(fiveThroughOne); // [5, 4, 3, 2, 1]
console.log(oneThroughFive); // [1, 2, 3, 4, 5]

// EXAMPLE: using with a string array
const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.toReversed();
console.log(reversedFruits); // ['cherry', 'banana', 'apple']
console.log(fruits); // ['apple', 'banana', 'cherry']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed
