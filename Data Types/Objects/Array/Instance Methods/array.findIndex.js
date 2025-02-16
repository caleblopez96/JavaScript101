// .findIndex() returns the index of the first element
// that satisfies the provided function

// SYNTAX:
// array.find(callbackFn)
// array.find(callbackFn, thisArg)

// PARAMETERS:
// element – The current element being processed (required).
// index (optional) – The index of the current element.
// array (optional) – The full array .find() was called on.
// thisArg (optional) – A value to use as `this` inside callbackFn.

// RETURNS:
// index if found, otherwise -1

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const tasks = [
  { description: "Finish portfolio", completed: true },
  { description: "Buy groceries", completed: false },
  { description: "Reply to emails", completed: true },
  { description: "Workout", completed: false },
  { description: "Study JavaScript", completed: true },
];

const workoutIndex = tasks.findIndex((task) => task.description === "Workout");
console.log(workoutIndex); // 3

const walkDog = tasks.findIndex((task) => task.description === "Walk the Dog");
console.log(walkDog); // -1
