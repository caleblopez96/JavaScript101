// a composition function is a function composed of other functions
// EXAMPLE: composition function --> takes any amount of functions as arguments and executes them
function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

// EXAMPLE:
function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

// not ideal:
joinWithDash(splitWords(lowerCaseString("My favorite function"))); // 'my-favorite-function'

// ideal:
const sluggify = compose(joinWithDash, splitWords, lowerCaseString);
console.log(sluggify("Fancy Product 12")); // 'fancy-product-12'

// EXAMPLE:
const square = (a) => a * a;
const double = (a) => a * 2;

const doubleAndThenSquare = compose(square, double);

console.log(doubleAndThenSquare(3)); // 36
