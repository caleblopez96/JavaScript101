// .entries() returns an iterator that provides index-value pairs for an array.

// SYNTAX:
// array.entries()

// PARAMETERS:
// None

// RETURNS:
// A new iterator object containing `[index, value]` pairs.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE 1: Iterating with for...of
const array1 = ["A", "B", "C", "D"];

const iterator = array1.entries();

for (let [index, value] of iterator) {
  console.log(index, value);
}
// Output:
// 0 'A'
// 1 'B'
// 2 'C'
// 3 'D'

// EXAMPLE 2: Using .next() to manually iterate
const manualIterator = array1.entries();
console.log(manualIterator.next().value); // [0, 'A']
console.log(manualIterator.next().value); // [1, 'B']
console.log(manualIterator.next().value); // [2, 'C']
console.log(manualIterator.next().value); // [3, 'D']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
