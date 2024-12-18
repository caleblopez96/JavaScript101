// returns new array containing results 
// after applying a function.
//! returns NEW array. Doesn't mutate original array.

// SYNTAX:
// map(callbackFn)
// map(callbackFn, thisArg)
// array.map((callbackFn) => {/.../});
// array.map(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


// EXAMPLE: 
// Create a new array that only includes the descriptions of each task

const tasks = [
  { description: 'Finish portfolio', completed: true },
  { description: 'Buy groceries', completed: false },
  { description: 'Reply to emails', completed: true },
  { description: 'Workout', completed: false },
  { description: 'Study JavaScript', completed: true }
];

let descriptions = tasks.map((task) => {
  return task.description
})

console.log(descriptions) // ['Finish portfolio', 'Buy groceries', 'Reply to emails', 'Workout', 'Study JavaScript']