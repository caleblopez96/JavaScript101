// use .every() when you need to check if all
// elements in the array pass the test.

// SYNTAX:
// .every(callbackFn)
// .every(callbackFn, thisArg)

// PARAMETERS:
// element – The current element being processed.
// index (optional) – The index of the current element.
// array (optional) – The array .every() was called on.

// RETURNS:
// boolean

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
const everyArray = [1, 2, 3, 4, 5];

function isEven(element) {
  return element % 2 === 0;
}

console.log(everyArray.every(isEven)); // false

// EXAMPLE 2:
const task = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

const completedTask = task.every((task) => task.completed);

console.log(completedTask); // false

// EXAMPLE 3:
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((num, index, arr) => {
  console.log(`Checking ${num}, at ${index}, in ${arr}`);
  return num % 2 === 0;
});

console.log(allEven); // true

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
