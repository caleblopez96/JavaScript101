// .shift() removes the first element from an array and returns it.

// SYNTAX:
// array.shift()

// PARAMETERS:
// None

// RETURNS:
// The removed element from the array; returns undefined if the array is empty.

// MUTATION:
// This method MUTATES the original array, modifying its length.

// EXAMPLE 1: Basic usage of .shift()
const numbers = [1, 2, 3, 4, 5];
const removedNumber = numbers.shift(); // Removes the first element
console.log(removedNumber); // Outputs: 1
console.log(numbers); // Outputs: [2, 3, 4, 5] (original array is mutated)

// EXAMPLE 2: Managing a customer queue
let customerQueue = ["Person 1", "Person 2", "Person 3", "Person 4"];
let nextCustomer;

function removeNext() {
  const currentCustomer = customerQueue.shift(); // Removes the first customer
  console.log(`${currentCustomer} has been removed from the queue`);
  nextCustomer = `${customerQueue[0]} is next in line`; // Update next customer
}

removeNext();
console.log(customerQueue); // Outputs: ["Person 2", "Person 3", "Person 4"] (original array is mutated)
console.log(nextCustomer); // Outputs: "Person 2 is next in line"

// EXAMPLE 3: Attempting to shift from an empty array
const emptyArray = [];
const removedFromEmpty = emptyArray.shift(); // No element to remove
console.log(removedFromEmpty); // Outputs: undefined

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
