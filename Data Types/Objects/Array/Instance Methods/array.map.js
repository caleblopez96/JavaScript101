// returns new array containing results
// after applying a function.
//! returns NEW array. Doesn't mutate original array.

// SYNTAX:
// .map(callbackFn);
// .map(callbackFn, thisArg);
// .map((element, index, array) => {}, thisArg); no access to 'this'
// .map(function(element, index, array) {}, thisArg); access to 'this'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

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

let isCompleted = tasks.map((task) => task.completed);
console.log(isCompleted); // [false, false, true, false, true]
