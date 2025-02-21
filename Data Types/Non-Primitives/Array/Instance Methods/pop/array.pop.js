// .pop() removes the last element from the array and returns that element.
// MUTATES the original array.

// SYNTAX:
// array.pop()

// PARAMETERS:
// none

// RETURNS:
// the element removed from the array.

// MUTATION:
// MUTATES the original array

// EXAMPLE: Removing the last number from an array
const numbers = [1, 2, 3, 4, 5];
const lastNumber = numbers.pop(); // 5
console.log(numbers); // [1, 2, 3, 4]

// EXAMPLE 2: Using .pop() in a function to remove the last item from a shopping cart
let shoppingCart = ["Item 1", "Item 2", "Item 3", "Item 4"];

function removeLastItem(array) {
  const removedItem = array.pop(); // Change from shoppingCart to array for better reusability
  console.log(`Removed: ${removedItem}`);
}

removeLastItem(shoppingCart); // Removed: Item 4
console.log(shoppingCart); // ['Item 1', 'Item 2', 'Item 3']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
