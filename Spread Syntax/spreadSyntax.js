// Expands elements from an array, object, or iterable into individual pieces.

// SYNTAX:
// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }

//* Notes *: 
// A function definition can only have one rest parameter.
// The rest parameter must be the last parameter in the function definition.
// Trailing commas are not allowed after the rest parameter.
// The rest parameter cannot have a default value.

// Spread syntax looks exactly like rest syntax.
// In a way, spread syntax is the opposite of rest syntax.
// Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into a single element.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const array = [1, 2, 3, 4, 5]
console.log(array) // [1, 2, 3, 4, 5]
console.log(...array) // 1, 2, 3, 4, 5


const object = {
  firstName: "first",
  lastName: "last",
  address: "address",
  age: 5
}

const iterable = Object.entries(object)

console.log(...iterable) // ['firstName', 'first] ['lastName', 'last'] ['address', 'address'] ['age', 5]