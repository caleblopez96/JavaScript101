// The boolean constructor creates boolean objects.
// Booleans are essential for controlling program flow and making decisions.

// Note: Using the Boolean constructor creates a Boolean object, not a primitive value.
// It is generally recommended to use primitive boolean values (true/false) instead of Boolean objects.


// EXAMPLE:
let boolObject = new Boolean(true); // Creates a Boolean object
console.log(boolObject); // true


// Boolean primitives:
let isTrue = true; // Primitive boolean
let isFalse = false; // Primitive boolean

// The Boolean() function can also be used to convert values to booleans:
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("hello")); // Output: true
console.log(Boolean(null)); // Output: false

// Falsy values (evaluated as false):
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN

// Everything else is considered truthy (evaluated as true), including:
// - " " (non-empty strings)
// - [] (empty array)
// - {} (empty object)
// - Any non-zero number

// Boolean expressions:
// Boolean values are often used in conditional statements:
if (isTrue) {
  console.log("This code runs because isTrue is true");
}

// Logical operators with booleans:
// - && (AND): Returns true if both operands are true
console.log(true && false); // Output: false

// - || (OR): Returns true if at least one operand is true
console.log(true || false); // Output: true

// - ! (NOT): Negates the boolean value
console.log(!true); // Output: false

