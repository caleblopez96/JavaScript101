// The Logical AND Assignment (&&=) operator checks if the left-hand value is truthy.
// if its truthy, it updates the value with the right-hand side
// if its falsy, it short circuits and keeps original value.

// SYNTAX:
// &&=

// EXAMPLE:

let num = 10;
num &&= 50;
console.log(num); // 50

// right side never evaluates because null is falsy
let num2 = null;
num2 &&= 50;
console.log(num2); // null

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40741336#content

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment
