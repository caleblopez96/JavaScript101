// .map() returns new array containing results after applying a callback function.

// SYNTAX:
// .map(callbackFn);
// .map(callbackFn, thisArg);
// .map((element, index, array) => {}, thisArg); no access to 'this'
// .map(function(element, index, array) {}, thisArg); access to 'this'

// PARAMETERS:
// callbackFn - function to execute on each element of array
// element - current element being processed in the array
// index - index of current element being processed in the array
// array - the array map was called on
// thisArg - value to use as this

// RETURNS:
// a new array

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
// Create a new array that only includes the descriptions of each task

const tasks = [
  { description: "Finish portfolio", completed: false },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

let descriptions = tasks.map((task) => task.description);
console.log(descriptions); // ['Finish portfolio', 'Buy groceries', 'Reply to emails', 'Workout', 'Study JavaScript']

// EXAMPLE:
// map the status of the completed task
let isCompleted = tasks.map((task) => task.completed);
console.log(isCompleted); // [false, false, true, false, true]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
