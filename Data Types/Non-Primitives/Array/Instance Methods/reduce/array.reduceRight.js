// .reduceRight() executes a reducer function on each element of an array, reducing it to a single value, starting from the last element and moving left.

// SYNTAX:
// array.reduceRight(callbackFn)
// array.reduceRight(callbackFn, initialValue)

// PARAMETERS:
// callbackFn - the function to execute on each element in the array
// accumulator - the accumulated result from the previous callback execution
// currentValue - the current element being processed
// currentIndex (optional) - the index of the current element
// array (optional) - the array reduceRight was called on
// initialValue (optional) - the initial value for the accumulator

// RETURNS:
// The final accumulated value after applying the reducer function from right to left.

// MUTATION:
// Does NOT mutate the original array.

// EXAMPLE 1: summing an array from right to left
const sum = [1, 2, 3, 4, 5].reduceRight((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// EXAMPLE 2: calculating total price from cart items in reverse order
const cartItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 15 },
  { name: "Item 3", price: 20 },
];

const totalPrice = cartItems.reduceRight(
  (acc, curVal) => acc + curVal.price,
  0
);

console.log(`Total Price: $${totalPrice}`); // Outputs: Total Price: $45

// EXAMPLE 3: concatenating strings from right to left
const words = ["world", "hello"];
const sentence = words.reduceRight((acc, curr) => acc + " " + curr);
console.log(sentence); // " hello world"

// EXAMPLE 4: reversing an array using reduceRight
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reduceRight((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);
console.log(reversedArray); // [5, 4, 3, 2, 1]

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
