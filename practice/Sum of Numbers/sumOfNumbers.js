// Sum of Numbers
// Write a function that takes an array of numbers and returns the sum of all the numbers.

function sumOfNums(array) {
  let sum = 0 // create variable that'll hold the sum of nums
  for (let element of array) { // loop through each element of the array
    sum += element // add the element to sum
  }
  return sum // return the sum
}

console.log(sumOfNums([1, 2, 3, 4])) // 10
console.log(sumOfNums([5, 10, 15]))//