// .filter() filters values of an array.

// SYNTAX:
// .filter(callbackFn)
// .filter(callbackFm, args)

// PARAMETERS:
// element - The current element being processed
// index (optional) - the index of the current element being processed in the array
// array (optional) - the array .filter() was called on

// RETURNS:
// shallow shallow copy or array containing the elements that passed the test

// MUTATION:
// does NOT mutate original array.

// EXAMPLE:
// Get a list of all tasks that are not completed
const tasks = [
  { description: "Finish portfolio", completed: true },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

let filtered = tasks.filter((task) => {
  return task.completed === false;
});

console.log(filtered); // [ {description: 'Buy groceries', completed: false} { description: 'Workout', completed: false } ]

// EXAMPLE 2:
const numbers = [10, 20, 30, 40];

const filteredArray = numbers.filter((num, index, arr) => {
  console.log(`Checking index ${index}: ${num} in [${arr}]`);
  return num > 15;
});

console.log(filtered);
// Checking index 0: 10 in [10,20,30,40]
// Checking index 1: 20 in [10,20,30,40]
// Checking index 2: 30 in [10,20,30,40]
// Checking index 3: 40 in [10,20,30,40]
// [20, 30, 40]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
