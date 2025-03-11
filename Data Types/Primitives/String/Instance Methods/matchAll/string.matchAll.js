// .matchAll() returns an iterator of results matching the string against a regexp

// SYNTAX:
// string.matchAll(regexp)

// PARAMETERS:
// regexp - regular expression to check against

// RETURNS:
// iterable iterator object

// EXAMPLE:
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
