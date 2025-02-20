// you can bind arguments to functions

// EXAMPLE:
function multiply(a, b) {
  return a * b;
}

// make a copy where a is always 2
const double = multiply.bind(null, 2);
console.log(double(4)); // 8
