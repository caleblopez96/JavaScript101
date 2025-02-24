// .at() retrieves the element at a given index from a string or array.

// SYNTAX:
// string.at(index)

// PARAMETERS:
// index - The index of the character to return

// RETURNS:
// The character at the specified index.
// Returns undefined if the index is out of bounds.

// MUTATION:
// Does NOT mutate the original string or array.

// EXAMPLES:

// Using .at() with a string
console.log("Hello".at(1)); // 'e'
console.log("Hello".at(-1)); // 'o'

// Using .at() with an array
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.at(1)); // 'banana'
console.log(fruits.at(-1)); // 'cherry'

// COMPARISON: getting the last char in string
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
console.log(myString.charAt(myString.length - 2)); // 't'

// Using slice() method
console.log(myString.slice(-2, -1)); // 't'

// Using at() method
console.log(myString.at(-2)); // 't'
