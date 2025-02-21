// .includes() checks if an array includes a certain element or value.
// does NOT mutate the original array.

// SYNTAX:
// array.includes(searchElement)
// array.includes(searchElement, fromIndex)

// PARAMETERS:
// searchElement - the value to search for (required).
// fromIndex - index to start searching from (optional, default is 0).

// RETURNS:
// boolean - true if the array contains the element, otherwise false.

// MUTATION:
// does NOT mutate the original array.

// EXAMPLE:
const schoolSubjects = ["Math", "Science", "Social Studies"];

let mathSubjectCheck = schoolSubjects.includes("Math");
console.log(mathSubjectCheck); // true

let artSubjectCheck = schoolSubjects.includes("Art");
console.log(artSubjectCheck); // false

// EXAMPLE with fromIndex:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3, 2)); // true (searches from index 2)
console.log(numbers.includes(2, 2)); // false (searches from index 2)

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
