// .find() searches for the first element that matches a condition.

// SYNTAX:
// .find(callbackFn)
// .find(callbackFn, thisArg)

// PARAMETERS:
// element – The current element being processed (required).
// index (optional) – The index of the current element.
// array (optional) – The full array .find() was called on.
// thisArg (optional) – A value to use as `this` inside callbackFn.

// RETURNS:
// The first matching element, or `undefined` if no match is found.

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const trees = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 },
];

const result = trees.find((tree) => tree.name === "birch");
console.log(result); // {name: 'birch', count: 4}

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
