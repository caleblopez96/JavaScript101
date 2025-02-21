// .reduce() applies a reducer function on each element in the array

// SYNTAX:
// .reduce(callbackFn)
// .reduce(callbackFn, initialValue)
// .reduce((accumulator, currentValue, currentIndex, array) => {}, thisArg) no access to 'this'
// .reduce(function(accumulator, currentValue, currentIndex, array) {}, thisArg); // access to 'this'
// initialValue (optional) - value that accumulator initially starts with

// PARAMETERS:
// callbackFn - the function to use on each element in the array
// accumulator - the value from the previous call to the callbackFn
// currentValue - the value of the current element
// currentIndex - the index of position of currentValue in the array
// array - the array reduce was called on
// initialValue (optional) - value which accumulator is initialized to

// RETURNS:
// the value from the reducer function applied to each array element

// MUTATION:
// does NOT mutate original array

// EXAMPLE:
[1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // 15

// EXAMPLE 2: Reduce down item prices in car to a total purchase price
const cartItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 15 },
  { name: "Item 3", price: 20 },
];

const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

console.log(`Total Price: $${totalPrice}`); // Total Price: $45

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
