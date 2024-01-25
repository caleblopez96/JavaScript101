// adds one or more elements to end of an array.
//! MUTATES original array.

// EXAMPLE: 
[ 1, 2, 3, 4, 5 ].push(1); // 6 -> [1, 2, 3, 4, 5, 1]

// EXAMPLE: adding item to shopping cart
const cartItems = [
    {name: 'Item 1', price: 10},
    {name: 'Item 2', price: 15}
]
const addItemToCart = () => {
    const newItem = {name: 'Item 3', price: 20};
    cartItems.push(newItem);
}
addItemToCart();
console.log(cartItems); // [{...}, {...}, {...}]
// 0: {name: 'Item 1', price: 10}
// 1: {name: 'Item 2', price: 15}
// 2: {name: 'Item 3', price: 20}

// EXAMPLE: pushing elements to array
const array1 = [1, 2, 3];
array1.push('a', 'b', 'c');
console.log(array1); // [1, 2, 3, 'a', 'b', 'c'];