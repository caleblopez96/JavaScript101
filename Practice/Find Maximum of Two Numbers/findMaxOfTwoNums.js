// Find Maximum of Two Numbers
// Write a function that takes two numbers and returns the larger of the two.

function maxOfTwoNums(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

// using ternary operator
function maxOfTwoNums(num1, num2) {
  return num1 > num2 ? num1 : num2
}