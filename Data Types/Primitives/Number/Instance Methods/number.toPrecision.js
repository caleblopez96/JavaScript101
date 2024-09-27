// use .toPrecision() to return a string with the specified precision

// SYNTAX:
// .toPrecision()
// .toPrecision(precision)

// EXAMPLE:
function formatForPrecision(number) {
  return Number.parseFloat(number).toPrecision(3)
}
console.log(formatForPrecision(1.999999)) // 2.00