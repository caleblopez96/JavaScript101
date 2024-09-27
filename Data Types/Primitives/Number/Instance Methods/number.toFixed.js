// use .toFixed() to return a string representing the number using fixed-point notation

// SYNTAX:
// toFixed()
// toFixed(digits)

// EXAMPLE:
function formatNumber(number) {
  return Number.parseFloat(number).toFixed(2)
}

console.log(formatNumber(3.1495)) // 3.15