// .values() returns a new Array Iterator object that iterates over the values of an array.

// SYNTAX:
// array.values()

// PARAMETERS:
// None

// RETURNS:
// A new Array Iterator object that iterates through the array's values.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE:
const numbers = [10, 20, 30];
const iterator = numbers.values();

console.log(iterator.next().value); // 10
console.log(iterator.next().value); // 20
console.log(iterator.next().value); // 30

// EXAMPLE: using a for...of loop
const fruits = ["apple", "banana", "cherry"];
const fruitIterator = fruits.values();

for (const fruit of fruitIterator) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
