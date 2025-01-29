// The Math.random() static method returns a
// floating-point, pseudo-random number that's 
// greater than or equal to 0 and less than 1, 
// with approximately uniform distribution over that 
// range — which you can then scale to your desired range.

// SYNTAX:
// Math.random()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// EXAMPLE:
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

// EXAMPLE: 
console.log(Math.floor(Math.random() * 10)) //