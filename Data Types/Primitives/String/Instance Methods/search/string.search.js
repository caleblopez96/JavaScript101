// .search() searches for a match between a regexp and the string

// SYNTAX:
// string.search(regexp)

// PARAMETERS:
// regexp - regular expression to search against

// RETURNS:
// the index of the first match or -1 if no match found

// EXAMPLE:
const paragraph = "My dog is better than yours!";

// regexp to search for anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;
console.log(paragraph.search(regex)); // 27

// get element found at index
console.log(paragraph[paragraph.search(regex)]); // '!'

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
