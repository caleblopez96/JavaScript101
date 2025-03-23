// use structuredClone() to create a clone of an object

// SYNTAX:
// structuredClone(value)
// structuredClone(value, options)

// PARAMETERS:
// value - the object to be cloned
// options (optional) - an object with the following properties:
//    transfer - an array of transferable objects

// RETURNS:
// a deep copy of the original value

// EXAMPLE:

// original object
const obj = { a: 1, b: { c: 2 } };

// using structuredClone()
const realClone = structuredClone(obj);

// proof the realClone is the same as obj
console.log(realClone); // { a: 1, b: { c: 2 } }

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
