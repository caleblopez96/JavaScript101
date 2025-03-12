// EXAMPLE: add function no currying
function add(a, b, c) {
  return a + b + c;
}
// EXAMPLE: add function with currying --> (a) => (b) => (c) => a + b + c;
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curryAddArrow = (a) => (b) => (c) => a + b + c;

console.log(curryAddArrow(5)(3)(2));

add(5, 3, 2); // 10
curryAdd(5)(3)(2); // 10

// step by step:
curryAdd(5); // returns a function expecting another function
curryAdd(5)(3); // returns a function expecting another function;
curryAdd(5)(3)(2); // 10
