// returns new array containing results 
// after applying a function.
//! returns NEW array. Doesn't mutate original array.

// SYNTAX:
// map(callbackFn)
// map(callbackFn, thisArg)
// array.map((callbackFn) => {/.../});
// array.map(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


// EXAMPLE: 
const beforeMap = [ 2, 4, 6, 8 ];

const mappedArray = beforeMap.map((x) => x * 2);
console.log(mappedArray) // [4, 8, 12, 16]

const products = [
    { name: 'Product A', price: 100 },
    { name: 'Product B', price: 150 },
    { name: 'Product C', price: 200 }
]

const formattedProducts = products.map(product => ({
    ...product, formattedPrice: `$${product.price.toFixed(2)}`
})) 

console.log(formattedProducts); // [{…}, {…}, {…}] 
// 0: {name: 'Product A', price: 100, formattedPrice: '$100.00'} 
// 1: {name: 'Product B', price: 150, formattedPrice: '$150.00'} 
// 2: {name: 'Product C', price: 200, formattedPrice: '$200.00'}