// .startsWith() checks if a string begins with another string/character

// SYNTAX:
// .startsWith(searchString)
// .startsWith(searchString, position)

// PARAMETERS:
// searchString - charachters to be serached for at start of the string
// position (optional) - the start position to start searching the string

// RETURNS:
// BOOLEAN

// EXAMPLE:
const str = "Saturday night plans";
str.split(" ")[0].toLowerCase().startsWith("sat"); // true
str.split(" ")[1].toLowerCase().startsWith("p"); // false

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
