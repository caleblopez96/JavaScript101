// Use forEach() to iterate over elements
// in an array and apply a function to each element.

// SYNTAX: 
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
// array.forEach((callbackFn) => {/.../});
// array.forEach(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

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
    return totalPrice += item.price;
});

console.log(`Total Price: $${totalPrice.toFixed(2)}`); // $1222.00




// EXAMPLE: 
// Write a JavaScript program to find the 
// most frequent item in an array.
function findMostFrequent(array) {
  let count = {}

  array.forEach(item => {
    if (count[item]) {
      count[item] += 1
    } else {
      count[item] = 1
    }
  })
  console.log(count)
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
findMostFrequent(arr1) // {2: 2, 3: 4, 4: 1, 9: 1, a: 5}