// .join() creates and returns a new string by concatenating all of the elements in the array.
// does NOT mutate the original array.

// SYNTAX:
// array.join()
// array.join(separator)

// PARAMETERS:
// separator (optional) - a string to separate concatenations (default is a comma).

// RETURNS:
// a string with all elements joined together.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE:
const colorArray = ["red", "green", "white", "black"];
console.log(colorArray.join()); // 'red,green,white,black'
console.log(colorArray.join(" - ")); // 'red - green - white - black'

// EXAMPLE with an empty array:
const emptyArray = [];
console.log(emptyArray.join()); // '' (an empty string)

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
