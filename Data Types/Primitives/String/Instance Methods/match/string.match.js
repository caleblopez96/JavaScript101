// .match() checks if a string matches a regexp

// SYNTAX:
// string.match(regexp)

// PARAMETERS:
// regexp - regular expression to check against

// RETURNS:
// an array or null if no matches found

// EXAMPLE:
const paragraph = "The quick bornw fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // ['T', 'I']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
