// .indexOf() finds the index of a specified element in the array.
// does NOT mutate the original array.

// SYNTAX:
// array.indexOf(searchElement)
// array.indexOf(searchElement, fromIndex)

// PARAMETERS:
// searchElement - the element you are searching for (required).
// fromIndex - the index to start the search from (optional, default is 0).

// RETURNS:
// index of searchElement in the array; -1 if not found.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE:
const schoolSubjects = ["Math", "Science", "Social Studies"];

let mathIndex = schoolSubjects.indexOf("Math");
console.log(mathIndex); // 0

let languageArtsIndex = schoolSubjects.indexOf("Language Arts");
console.log(languageArtsIndex); // -1

// EXAMPLE with fromIndex:
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.indexOf(2)); // 1
console.log(numbers.indexOf(2, 2)); // 3 (search starts from index 2)

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
