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
const string = "Saturday night plans";
console.log(string.split(" ")[0].toLowerCase().startsWith("sat")); // true
console.log(string.split(" ")[1].toLowerCase().startsWith("p")); // false
