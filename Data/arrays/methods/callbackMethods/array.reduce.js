// applies a function against each element
// in the array to reduce it to a single value.
//! does NOT mutate original array.

// SYNTAX:
// reduce(callbackFn)
// reduce(callbackFn, initialValue)
// array.reduce((accumulator, currentValue) => { /* logic */ });
// array.reduce(callbackFn(accumulator, currentValue) { /* logic */ });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// EXAMPLES:
[ 1, 2, 3, 4, 5 ].reduce((acc, num) => acc + num); // 15

[3, 4, 5, 6, 7].reduce((accumulator, startingValue) => {
    return accumulator + startingValue;
}); // 25

const cartItems = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    { name: 'Item 3', price: 20 }
]

const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

console.log(`Total Price: $${totalPrice}`); // Total Price: $45