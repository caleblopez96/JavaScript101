// .with() - Creates a new array with a value replaced at a specific index

// - Works similarly to array.splice(), but without modifying the original array.

// SYNTAX:
// array.with(index, value)

// PARAMETERS:
// index - The index at which to replace a value (negative indices work like at())
// value - The new value to insert at the specified index

// RETURNS:
// A new array with the specified value at the given index (original array remains unchanged)

// MUTATION:
// Does NOT mutate the original array (returns a shallow copy)

// NOTES:
// - If the index is out of range, an error is NOT thrown; the array remains unchanged.

// EXAMPLE:
const numbers = [10, 20, 30, 40];
const updatedNumbers = numbers.with(1, 99);

console.log(updatedNumbers); // [10, 99, 30, 40]
console.log(numbers); // [10, 20, 30, 40]

const letters = ["a", "b", "c", "d"];
console.log(letters.with(-1, "z")); // ['a', 'b', 'c', 'z']
