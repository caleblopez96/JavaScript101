// Expands elements from an array, object, or iterable into individual pieces.

// SYNTAX:
// myFunction(...iterableObj, a, b)

// Spread syntax looks exactly like rest syntax.
// In a way, spread syntax is the opposite of rest syntax.
// Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into a single element.

// EXAMPLE:
const array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4, 5]
console.log(...array); // 1, 2, 3, 4, 5

const object = {
  firstName: "first",
  lastName: "last",
  address: "address",
  age: 5,
};

const iterable = Object.entries(object);

console.log(...iterable); // ['firstName', 'first] ['lastName', 'last'] ['address', 'address'] ['age', 5]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

async function fetchData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
