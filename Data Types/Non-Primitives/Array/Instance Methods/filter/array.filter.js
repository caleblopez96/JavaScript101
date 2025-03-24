// .filter() creates a new array with all elements that pass the test implemented by the provided function.

// SYNTAX:
// array.filter(callbackFn)
// array.filter(callbackFn, thisArg)

// PARAMETERS:
// callbackFn - Function to test each element.
// element - The current element being processed.
// index (optional) - The index of the current element being processed in the array.
// array (optional) - The array .filter() was called on.

// RETURNS:
// A new array containing the elements that passed the test. If no elements pass, an empty array is returned.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE 1: Get a list of all tasks that are not completed
const tasks = [
  { description: "Finish portfolio", completed: true },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

let filtered = tasks.filter((task) => task.completed === false);

console.log(filtered);
// [
//   { description: 'Buy groceries', completed: false },
//   { description: 'Workout', completed: false }
// ]

// EXAMPLE 3:
// Count Occurrences of a Specific Value
// Given an array of values and a target value, return the number of times the target appears in the array.

function countOccurrences(array, target) {
  const containsTarget = array.filter((element) => element === target);
  return containsTarget.length;
}
countOccurrences([1, 2, 3, 2, 4, 2], 2); // 3

// EXAMPLE 4: filter out by falsy values with Boolean constructor
const array = [0, 1, false, 2, "", 3, null, undefined];
const filteredArray2 = array.filter(Boolean);
console.log(filteredArray2); // [1, 2, 3]

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
