// The Math.acos() static method returns the inverse
// cosine (in radians) of a number. 

// SYNTAX:
// Math.acos(x)

// EXAMPLE:
function calculateAngle(adjacent, hypotenuse){
    return Math.acos(adjacent / hypotenuse);
}
console.log(calculateAngle(4, 16)); // 1.318116071652818