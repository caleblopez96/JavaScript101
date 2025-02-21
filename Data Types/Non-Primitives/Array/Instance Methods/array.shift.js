// .shift() removes the first element from an array

// SYNTAX:
// .shift()

// PARAMETERS:
// None

// RETURNS:
// The removed element from the array; undefined if empty

// MUTATION:
// MUTATES original array.

// EXAMPLE:
[1, 2, 3, 4, 5].shift(); // 1 -> [2, 3, 4, 5]

// EXAMPLE:
let customerQueue = ["Person 1", "Person 2", "Person 3", "Person 4"];
let nextCustomer;

function removeNext() {
  const currentCustomer = customerQueue.shift();
  console.log(`${currentCustomer} has been removed from the queue`);
  nextCustomer = `${customerQueue[0]} is next in line`;
}

removeNext();
console.log(customerQueue); // ["Person 2", "Person 3", "Person 4"]
console.log(nextCustomer); // "Person 2 is next in line"

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
