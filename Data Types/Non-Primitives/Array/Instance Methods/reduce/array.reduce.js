// .reduce() executes a reducer function on each element of an array, reducing it to a single value.
// Does NOT mutate the original array.

// SYNTAX:
// array.reduce(callbackFn)
// array.reduce(callbackFn, initialValue)

// PARAMETERS:
// callbackFn - the function to execute on each element in the array
// accumulator - the accumulated result from the previous callback execution
// currentValue - the current element being processed
// currentIndex (optional) - the index of the current element
// array (optional) - the array reduce was called on
// initialValue (optional) - the initial value for the accumulator

// RETURNS:
// The final accumulated value after applying the reducer function to all elements.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE 1: Reducing an array by adding all the numbers
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs: 15

// EXAMPLE 2: Calculating total price from cart items
const cartItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 15 },
  { name: "Item 3", price: 20 },
];

const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Price: $${totalPrice}`); // Outputs: Total Price: $45

// EXAMPLE 3: Flattening an array of arrays
const arrayOfArrays = [[1, 2], [3, 4], [5]];
const flattenedArray = arrayOfArrays.reduce(
  (acc, curr) => acc.concat(curr),
  []
);
console.log(flattenedArray); // Outputs: [1, 2, 3, 4, 5]

// EXAMPLE 4: Counting occurrences of values in an array
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1; // Initialize or increment count
  return acc;
}, {});
console.log(fruitCount);
// Outputs: { apple: 2, banana: 3, orange: 2 }

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
