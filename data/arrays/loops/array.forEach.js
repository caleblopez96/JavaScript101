// Use array.forEach() method to iterate over elements in an array and apply a function to each element. 

// does NOT mutate original array.
[1, 2, 3, 4, 5].forEach((num) => (num * 2)); // [2, 4, 6, 8, 10];

// EXAMPLE
const shoppingCart = [
    { product: 'Laptop', price: 999 },
    { product: 'Headphones', price: 149 },
    { product: 'Mouse', price: 25 },
    { product: 'Keyboard', price: 49 },
]

let totalPrice = 0;

shoppingCart.forEach(function(item){
    totalPrice += item.price
})

console.log(`Total Price: $${totalPrice.toFixed(2)}`); // $1222.00