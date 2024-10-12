// removes last element from the array.
//! MUTATES original array.

// SYNTAX:
// pop() 
// NO PARAMETERS

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// EXAMPLE:
[1, 2, 3, 4, 5].pop(); // 5 -> [1, 2, 3, 4]

let shoppingCart = [ "Item 1", "Item 2", "Item 3", "Item 4" ];

function removeLastItem(array) {
    const removedItem = shoppingCart.pop();
    console.log(`Removed: ${removedItem}`);
}

removeLastItem(shoppingCart); // Removed: Item 4
console.log(shoppingCart); // ['Item 1', 'Item 2', 'Item 3']