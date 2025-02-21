// .map() returns a new array containing results after applying a callback function to each element of the array.
// does NOT mutate the original array.

// SYNTAX:
// array.map(callbackFn)
// array.map(callbackFn, thisArg)
// array.map((element, index, array) => {}, thisArg); // no access to 'this'
// array.map(function(element, index, array) {}, thisArg); // access to 'this'

// PARAMETERS:
// callbackFn - function to execute on each element of the array
// element - the current element being processed in the array
// index - the index of the current element being processed in the array
// array - the array map was called on
// thisArg - value to use as `this` inside callbackFn

// RETURNS:
// a new array with results from the callback function

// MUTATION:
// does NOT mutate the original array

// EXAMPLE: Create a new array that includes only the descriptions of each task
const tasks = [
  { description: "Finish portfolio", completed: false },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

let descriptions = tasks.map((task) => task.description);
console.log(descriptions); // ['Finish portfolio', 'Buy groceries', 'Reply to emails', 'Workout', 'Study JavaScript']

// EXAMPLE: Map the status of the completed tasks
let isCompleted = tasks.map((task) => task.completed);
console.log(isCompleted); // [false, false, true, false, true]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
