// Check if a Number is Positive
// Write a function that checks if a given number is positive, negative, or zero.

function checkIfPositive(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}