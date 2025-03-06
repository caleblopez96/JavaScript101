// The Math.asin() static method returns 
// the inverse sine (in radians) of a number.

// SYNTAX:
// Math.asin(x)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin

// EXAMPLE:
// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}

console.log(calcAngle(6, 10));
// Expected output: 0.6435011087932844

console.log(calcAngle(5, 3));
// Expected output: NaN
