// .findIndex() returns the index of the first element
// that satisfies the provided testing function.

// SYNTAX:
// array.findIndex(callbackFn)
// array.findIndex(callbackFn, thisArg)

// PARAMETERS:
// callbackFn - Function to execute on each element.
// element - The current element being processed (required).
// index (optional) - The index of the current element.
// array (optional) - The full array .findIndex() was called on.
// thisArg (optional) - A value to use as `this` inside callbackFn.

// RETURNS:
// The index of the first matching element, or -1 if no match is found.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE: Find the index of the task "Workout"
const tasks = [
  { description: "Finish portfolio", completed: true },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

const workoutIndex = tasks.findIndex((task) => task.description === "Workout");
console.log(workoutIndex); // 3

// EXAMPLE: Try to find the index of a task that doesn't exist
const walkDogIndex = tasks.findIndex(
  (task) => task.description === "Walk the Dog"
);
console.log(walkDogIndex); // -1

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
