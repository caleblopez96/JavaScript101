// .fill() changes all elements with a range

// SYNTAX:
// .fill(value)
// .fill(value, start)
// .fill(value, start, end)

// PARAMETERS:
// value - The value to fill
// start (optional) - index at which to start filling
// end (optional) - index to end filling

// RETURNS:
// the original array modified

// MUTATION:
// mutates original array

// EXAMPLE:
const example = [1, 2, 3, "a", 5];
example.fill(4, 3, 4); // [1, 2, 3, 4, 5]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
