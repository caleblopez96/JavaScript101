// .includes() checks if array includes a certain element or value.
// does NOT mutate original array.

// SYNTAX:
// .includes(searchElement)
// .includes(searchElement, fromIndex)

// PARAMETERS:
// searchElement - the value to search for
// fromIndex - index to start searching from

// RETURNS:
// boolean

// MUTATION:
// does NOT mutate original array.

// EXAMPLE:
const schoolSubjects = ["Math", "Science", "Social Studies"];

let mathSubjectCheck = schoolSubjects.includes("Math");
console.log(mathSubjectCheck); // true

let artSubjectCheck = schoolSubjects.includes("Art");
console.log(artSubjectCheck); // false

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
