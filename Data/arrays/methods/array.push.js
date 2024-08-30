// adds one or more elements to end of an array.
//! MUTATES original array.

// SYNTAX:
// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

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
console.log(array1); // [1, 2, 3, 'a', 'b', 'c']

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
function dashFormatter(number) {
  let numToString = number.toString()

  let result = []

  for(let i = 0; i < numToString.length; i++) {
    result.push(numToString[i]);
  
  if (i < numToString.length -1 && 
    parseInt(numToString[i]) % 2 === 0 &&
    parseInt(numToString[i+1]) % 2 === 0) {
      result.push('-')
    }
  }
  return result.join('')
}
console.log(dashFormatter(25468));
////////////////////////////////////////