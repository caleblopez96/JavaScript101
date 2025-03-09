// Higher order functions are functions that either:
// receive another function as an argument
// returns a function
// or does both

// typically though, theyre functions that return other functions

// EXAMPLE: a function that takes a function as an argument
function doTwice(func) {
  func();
  func();
}

doTwice(() => {
  console.log("hello there!"); // 'hello there!', 'hello there!'
});

// EXAMPLE:
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
console.log(multiplyBy(3)); // [Function]

// save them to variable then call it as a function
const triple = multiplyBy(3);
console.log(triple(10)); // 30

const double = multiplyBy(2);
console.log(double(6)); // 12
