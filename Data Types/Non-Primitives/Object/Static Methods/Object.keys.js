// .keys() returns an array of an object's own enumerable property keys

// SYNTAX:
// Object.keys(object)

// PARAMETERS:
// object - the object to retrieve keys from

// RETURNS:
// An array containing the object's keys

// MUTATION:
// does NOT mutate the original object

// EXAMPLE:
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

const object1Keys = Object.keys(object1);
console.log(object1Keys); // ['a', 'b', 'c']

console.log(Object.keys(object1)); // ['a', 'b', 'c']

// EXAMPLE: COMMON USE CASE

Object.keys(object).map((day) => <li key={day}>{day}</li>);

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
