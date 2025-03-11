// .slice() extracts a section of a string and returns a new string without modifying the original string

// SYNTAX:
// string.slice(indexStart)
// string.slice(indexStart, indexEnd)

// PARAMETERS:
// indexStart - index of first character to include
// indexEnd (optional) - index of character to stop

// RETURNS:
// a new string containg the extracted section

// EXAMPLE:
const paragraph = "The Zoo is fun";
const paragraphSliced = paragraph.slice(0, 7);
console.log(paragraphSliced); // 'The Zoo'
