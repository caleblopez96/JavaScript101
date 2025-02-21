// use .flatMap() to first map each element using a mapping function,
// then flatten the result into a new array.

// SYNTAX:
// array.flatMap(callbackFn)
// array.flatMap(callbackFn, thisArg)

// PARAMETERS:
// callbackFn – A function that is called for every element in the array
// and returns an array (required).
// thisArg (optional) – A value to use as `this` when executing callbackFn.

// RETURNS:
// A new array with each element mapped and flattened into it.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE:
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap((num) => [num, num * 2]);
console.log(doubledAndFlattened); // [1, 2, 2, 4, 3, 6]

// EXAMPLE 2:
const tasks = [
  { description: "Task 1", tags: ["urgent", "home"] },
  { description: "Task 2", tags: ["work"] },
];

const allTags = tasks.flatMap((task) => task.tags);
console.log(allTags); // ['urgent', 'home', 'work']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
