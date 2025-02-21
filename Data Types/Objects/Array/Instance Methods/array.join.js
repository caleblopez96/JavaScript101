// .join() creates and returns a new string by concatenating all of the elements in the array

// SYNTAX:
// array.join()
// array.join(separator)

// PARAMETERS:
// separator (optional) - string to separate concatenations by

// RETURNS:
// a string with all elements joined

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const colorArray = ["red", "green", "white", "black"];
colorArray.join(); // 'red, green, white, black'
colorArray.join(" - "); // 'red - green - white - black'

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
