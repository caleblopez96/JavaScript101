// .split() splits a string into an array of substrings based on a specified separator.

// SYNTAX:
// string.split(separator)
// string.split(separator, limit)

// PARAMETERS:
// separator (optional) - A string or regular expression to determine where to split the string.
// limit (optional) - An integer specifying the maximum number of splits.

// RETURNS:
// An array of substrings created by splitting the original string.
// The original string remains unchanged.

// MUTATION:
// does NOT mutate the original string.

// EXAMPLE 1: basic usage
const sentence = "JavaScript is awesome";
console.log(sentence.split(" ")); // ['JavaScript', 'is', 'awesome']

// EXAMPLE 2: using a limit
const data = "apple,banana,grape,orange";
console.log(data.split(",", 2)); // ['apple', 'banana']

// EXAMPLE 3: splitting by an empty string (character split)
const word = "hello";
console.log(word.split("")); // ['h', 'e', 'l', 'l', 'o']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
