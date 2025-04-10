// .push() adds one or more elements to the end of an array.
// MUTATES the original array.

// SYNTAX:
// array.push()
// array.push(element1)
// array.push(element1, element2)
// array.push(element1, element2, /* …, */ elementN)

// PARAMETERS:
// element1, ..., elementN - the elements to add to the end of the array

// RETURNS:
// the new length of the array after the elements have been added.

// MUTATION:
// MUTATES the original array

// EXAMPLE: pushing a single element to an array
const array1 = [1, 2, 3, 4, 5];
const newLength = array1.push(6); // 6 -> [1, 2, 3, 4, 5, 6]
console.log(newLength); // Outputs the new length of the array

// EXAMPLE: adding an item to a shopping cart
const cartItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 15 },
];

const addItemToCart = () => {
  const newItem = { name: "Item 3", price: 20 };
  cartItems.push(newItem);
};

addItemToCart();
console.log(cartItems);
// [
//   { name: "Item 1", price: 10 },
//   { name: "Item 2", price: 15 },
//   { name: "Item 3", price: 20 },
// ]

// EXAMPLE: pushing multiple elements to an array
const array2 = [1, 2, 3];
array2.push("a", "b", "c");
console.log(array2); // [1, 2, 3, 'a', 'b', 'c']

// EXAMPLE: push without mutation
function push(arr, val) {
  return [...arr, val];
}
const nums = [1, 2, 3];
console.log(push(nums, 4));
console.log(nums); // [1, 2, 3]

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746898#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
