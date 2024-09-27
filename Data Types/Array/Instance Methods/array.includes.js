// checks if array includes a certain element or value.
// does NOT mutate original array.


// SYNTAX: 
// includes(searchElement)
// includes(searchElement, fromIndex)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// EXAMPLE:
const schoolSubjects = ["Math", "Science", "Social Studies"];

let mathSubjectCheck = schoolSubjects.includes("Math");
console.log(mathSubjectCheck); // true

let artSubjectCheck = schoolSubjects.includes("Art");
console.log(artSubjectCheck); // false