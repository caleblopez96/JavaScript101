// Add All Numbers in an Array
// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

const numberArray = [5, 10, 15, 20, 25]

function addAllNumbers(array) {
  return array.reduce((a, b) => {
    return a + b
  })
}

console.log(addAllNumbers(numberArray)) // 75