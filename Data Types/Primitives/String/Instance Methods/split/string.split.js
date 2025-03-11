// .split() divides string into an ordered list of substrings based on provided pattern

// SYNTAX:
// string.split(separator)
// string.split(separator, limit)

// PARAMETERS:
// separator - pattern to separate at
// limit (optional) - limit of subtrings to be included in returned array

// RETURNS:
// array of strings split by separator

// EXAMPLE: split by word
function splitWords(string) {
  return string.split(" ");
}
const splitSentence = splitWords("Hello! this is a test sentence.");
console.log(splitSentence); // ['Hello', 'this', 'is', 'a', 'test', 'sentence.']

// EXAMPLE: split by character
function splitCharacters(string) {
  return string.split("");
}
const splitString = splitCharacters("Hello");
console.log(splitString); // ['H', 'e', 'l', 'l', 'o']

// EXAMPLE: create copy with split
function stringCopy(string) {
  return string.split();
}
const splitCopy = stringCopy("String copy");
console.log(splitCopy); // [ 'String copy' ]

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
