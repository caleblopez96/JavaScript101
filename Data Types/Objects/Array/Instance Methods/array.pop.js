// .pop() removes the last element from the array

// SYNTAX:
// .pop()

// PARAMETERS:
// none

// RETURNS:
// the element removed from the array.

// MUTATION:
// MUTATES original array

// EXAMPLE:
const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // 5
console.log(numbers); // [1, 2, 3, 4];

// EXAMPLE 2:
let shoppingCart = ["Item 1", "Item 2", "Item 3", "Item 4"];

function removeLastItem(array) {
  const removedItem = shoppingCart.pop();
  console.log(`Removed: ${removedItem}`);
}

removeLastItem(shoppingCart); // Removed: Item 4
console.log(shoppingCart); // ['Item 1', 'Item 2', 'Item 3']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
