// fromEntries() creates an object from an iterable

// SYNTAX:
// Object.fromEntries(iterable)

// PARAMETERS
// iterable - iterable to turn into object

// RETURNS:
// object containing the values in the iterable

// EXAMPLE:
const apiResult = [
  ["name", "caleb"],
  ["age", 28],
];

const obj = Object.fromEntries(apiResult);
console.log(obj); // {age: 28, name: 'caleb'}

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
