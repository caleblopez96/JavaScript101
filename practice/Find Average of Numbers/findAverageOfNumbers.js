// Write a function that takes an array of umbers and returns the average of those numbers

function findAvg(array) {
  let sum = array.reduce((a, b) => a + b)
  return sum / array.length
}

const testArr = [20, 10, 5, 30]
console.log(findAvg(testArr)) // 16.25