// assigns a value to the right side only if the right side is null or undefined

// SYNTAX:
// x ??= y
// Equivalent to:
// if (x === null || x === undefined) {
//   x = y;
// }

// EXAMPLE:

let x = undefined;
let y = 10;

x ??= y;
console.log(x); // 10
