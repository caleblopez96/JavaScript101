// .entries() returns an iterator
// and provides you the index and value

// SYNTAX:
// .entries()

// PARAMETERS:
// none

// RETURNS:
// new iterator object

// MUTATION:
// does NOT mutate the original array

// EXAMPLE:
const array1 = ["A", "B", "C", "D"];

const iterator = array1.entries();

for (let [index, value] of iterator) {
  console.log(index, value); // 0 'A' 1 'B' 2 'C' 3 'D'
}

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
