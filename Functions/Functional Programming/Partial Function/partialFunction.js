// A partially applied function is a function that pre-fills some arguments
// of another function and returns a new function that takes the remaining arguments.

// REUSABLE PARTIAL FUNCTION:
/*
function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}
*/

// Example 1: Partialy applied function using .bind()
function multiply(a, b) {
  return a * b;
}
// bind `thisArg` to null, and pre-fill the first argument
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
double(4); // 8  (2 * 4)
triple(12); // 36 (3 * 12)

// Example 2: Using a `partial` Function
export default function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}
// using the custom partial function
const partialDouble = partial(multiply, 2);
const partialTriple = partial(multiply, 3);
partialDouble(4); // 8
partialTriple(12); // 36

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746904#overview
