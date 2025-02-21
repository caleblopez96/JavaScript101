// .every() checks if all elements in an array pass a test and returns a boolean.

// SYNTAX:
// array.every(callbackFn)
// array.every(callbackFn, thisArg)

// PARAMETERS:
// element – The current element being processed.
// index (optional) – The index of the current element.
// array (optional) – The array .every() was called on.

// RETURNS:
// true if all elements pass the test, otherwise false.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE 1: check if all numbers are even
const everyArray = [1, 2, 3, 4, 5];

function isEven(element) {
  return element % 2 === 0;
}

console.log(everyArray.every(isEven)); // false

// EXAMPLE 2: checking if all tasks are completed
const task = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

const completedTask = task.every((task) => task.completed);

console.log(completedTask); // false

// EXAMPLE 3: using all parameters in the callback
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((num, index, arr) => {
  console.log(`Checking ${num}, at index ${index}, in [${arr}]`);
  return num % 2 === 0;
});

console.log(allEven); // true

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
