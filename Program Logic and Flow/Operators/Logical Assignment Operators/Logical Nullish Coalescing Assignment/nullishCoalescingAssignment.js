// The Nullish Coalescing (??=) assignment operator assigns a value to the right side only if the left side is null or undefined

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

// EXAMPLE:
function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // if this property is left null or undefined, default it to 3 seconds
  options.retries ??= 5; // if this property is left null or undefined, default it to 5
  return options;
}
let setup1 = doSomeSetup();
console.log(setup1); // {retries: 5, timeout: 3000}

// REFERENCES:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40741338#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
