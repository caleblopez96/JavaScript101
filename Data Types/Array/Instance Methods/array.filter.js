// Returns new array of elements that filter.
// does NOT mutate original array.
//! returns NEW array.

// SYNTAX:
// filter(callbackFn)
// filter(callbackFn, thisArg)
// array.filter((callbackFn) => {/.../});
// array.filter(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// EXAMPLE:
// Get a list of all tasks that are not completed

const tasks = [
  { description: 'Finish portfolio', completed: true },
  { description: 'Buy groceries', completed: false },
  { description: 'Reply to emails', completed: true },
  { description: 'Workout', completed: false },
  { description: 'Study JavaScript', completed: true }
];

let filtered = tasks.filter((task) => {
  return task.completed === false
})

console.log(filtered) // [ {description: 'Buy groceries', completed: false} { description: 'Workout', completed: false } ]