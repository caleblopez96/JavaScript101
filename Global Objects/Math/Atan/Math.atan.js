// The Math.atan() static method returns 
// the inverse tangent (in radians) of a number.

// SYNTAX: 
// Math.atan(x)

// EXAMPLE: 

// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// Expected output: 0.6747409422235527

console.log(calcAngle(5, 3));
// Expected output: 1.0303768265243125