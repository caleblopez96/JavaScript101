// Returns new array of elements that filter.
// does NOT mutate original array.
//! returns NEW array.

// EXAMPLE: 
[1, 2, 3, 4, 5].filter((num) => num % 2); // [1, 3, 5]

const products = [
    { name: 'Product A', category: 'Electronics', price: 50 },
    { name: 'Product B', category: 'Clothing', price: 50 },
    { name: 'Product C', category: 'Electronics', price: 150 },
    { name: 'Product D', category: 'Home', price: 75 }
];

const electronicsProducts = products.filter(product => product.category === 'Electronics');

console.log(electronicsProducts); // [{...}, {...}]
// 0: {name: 'Product A', category: 'Electronics', price: 50} 
// 1: {name: 'Product C', category: 'Electronics', price: 150}