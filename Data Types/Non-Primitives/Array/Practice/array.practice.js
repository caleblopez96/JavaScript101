// Basic Problems

// Double the Numbers
// Given an array of numbers, return a new array where each number is doubled.
// Example: [1, 2, 3] → [2, 4, 6]
function doubleArray(array) {
  return array.map((num) => num * 2);
}
console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

// Filter Out the Even Numbers
// Given an array of numbers, return an array with only the odd numbers.
// Example: [1, 2, 3, 4, 5] → [1, 3, 5]
function filterEvens(array) {
  return array.filter((num) => num % 2 !== 0);
}
console.log(filterEvens([1, 2, 3, 4, 5])); // [1, 3, 5]

// Find the Sum of All Numbers
// Given an array of numbers, return the sum of all the numbers in the array.
// Example: [1, 2, 3, 4] → 10
function sumOfAllNums(array) {
  return array.reduce((acc, curVal) => acc + curVal, 0);
}
console.log(sumOfAllNums([1, 2, 3, 4])); // 10

// Convert to Strings
// Given an array of numbers, return an array where each number is converted to a string.
// Example: [1, 2, 3] → ["1", "2", "3"]
function arrayToString(array) {
  return array.map((element) => {
    return element.toString();
  });
}
console.log(arrayToString([1, 2, 3])); // ['1', '2', '3']

// Intermediate Problems

// Find the Maximum Number
// Given an array of numbers, return the highest number in the array.
// Example: [3, 7, 2, 9, 5] → 9
function findMaxNum(array) {
  return Math.max(...array);
}
console.log(findMaxNum([3, 7, 2, 9, 5])); // 9

// Check if All Numbers Are Positive
// Given an array of numbers, return true if all numbers are positive, otherwise false.
// Example: [1, 2, 3, 4] → true, [-1, 2, 3] → false
function checkIfAllPos(array) {
  return array.every((element) => element > 0);
}
console.log(checkIfAllPos([1, 2, 3, 4])); // true
console.log(checkIfAllPos([-1, 2, 3])); // false

// Find the First String Longer than 5 Characters

// Given an array of strings, return the first string that is longer than 5 characters.
// Example: ["apple", "banana", "pear"] → "banana"
function longerThanFive(array) {
  return array.find((element) => element.length > 5);
}
console.log(longerThanFive(["apple", "banana", "pear"])); // ['banana']

// Count Occurrences of a Specific Value
// Given an array of values and a target value, return the number of times the target appears in the array.
// Example: ([1, 2, 3, 2, 4, 2], 2) → 3
function countOccurrences(array, target) {
  // filter them then return teh length of the array mapped
  let containsTarget = array.filter((element) => element === target);
  return containsTarget.length;
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3

// Square the Numbers
// Given an array of numbers, return a new array where each number is squared.
// Example: [1, 2, 3] → [1, 4, 9]
function squareTheNums(array) {
  return array.map((element) => element * element);
}
console.log(squareTheNums([1, 2, 3])); // [1, 4, 9]

// Remove Negative Numbers
// Given an array of numbers, return a new array without negative numbers.
// Example: [1, -2, 3, -4, 5] → [1, 3, 5]

function removeNegatives(array) {
  return array.filter((num) => num >= 0);
}

console.log(removeNegatives([1, -2, 3, -4, 5])); // [1, 3, 5]
//
// Get the First Letters
// Given an array of strings, return an array of the first letter of each word.
// Example: ["apple", "banana", "cherry"] → ["a", "b", "c"]
function getFirstLetters(array) {
  return array.map((element) => element.charAt(0));
}
console.log(getFirstLetters(["apple", "banana", "cherry"])); // ['a', 'b', 'c']

// Find Numbers Greater than 10
// Given an array of numbers, return an array of numbers greater than 10.
// Example: [5, 12, 8, 20, 3] → [12, 20]
function greaterThan10(array) {
  return array.filter((element) => element > 10);
}
console.log(greaterThan10([5, 12, 8, 20, 3])); // [12, 20]

// Intermediate Problems:
// Find the Product of All Numbers
// Given an array of numbers, return the product of all numbers in the array.
// Example: [2, 3, 4] → 24
function productOfAllNums(array) {
  return array.reduce((acc, curVal) => acc * curVal);
}
console.log(productOfAllNums([2, 3, 4])); // 24

// Capitalize First Letter of Each Word
// Given an array of strings, return a new array where each string has its first letter capitalized.
// Example: ["hello", "world"] → ["Hello", "World"]
function capFirstLetter(array) {
  return array.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1)
  );
}
console.log(capFirstLetter(["hello", "world"])); // ['Hello', 'World']

// Check if Any Number is Negative
// Given an array of numbers, return true if at least one number is negative.
// Example: [4, -1, 7] → true
function anyNumNeg(array) {
  return array.some((num) => num < 0);
}
console.log(anyNumNeg([4, -1, 7])); // true

// Reverse an Array
// Given an array, return a new array with the elements reversed.
// Example: [1, 2, 3, 4] → [4, 3, 2, 1]
function reverseArray(array) {
  return array.slice().reverse();
}
console.log(reverseArray([1, 2, 3, 4]));

// Remove Duplicates from an Array
// Given an array, return a new array with duplicates removed.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Group Odd and Even Numbers
//
// odds: an array of all odd numbers
// evens: an array of all even numbers
// Example: [1, 2, 3, 4, 5] → { odds: [1, 3, 5], evens: [2, 4] }
// Given an array of numbers, return an object with two properties:
function oddEvenObj(array) {
  let evenArray = array.filter((num) => num % 2 === 0);
  let oddArray = array.filter((num) => num % 2 !== 0);

  return {
    odds: oddArray,
    evens: evenArray,
  };
}

console.log(oddEvenObj([1, 2, 3, 4, 5]));

// Given an array of numbers, return the second largest number.
// Example: [10, 5, 8, 20] → 10
function secondLargest(array) {
  const maxNum = Math.max(...array);
  const filteredArray = array.filter((num) => num !== maxNum);
  return Math.max(...filteredArray);
}
console.log(secondLargest([10, 5, 20, 8])); // 10

// Flatten a Nested Array
// Given an array containing nested arrays, return a flattened version of the array.
// Example: [[1, 2], [3, 4], 5] → [1, 2, 3, 4, 5]
function flattenNestedArray(array) {
  return array.flat();
}
console.log(flattenNestedArray([[1, 2], [3, 4], 5])); // [1, 2, 3, 4, 5]

// Find the Most Frequent Element
// Given an array, return the element that appears the most times.
// Example: [1, 2, 2, 3, 3, 3, 4] → 3
function mostFreqElement(array) {}
console.log(mostFreqElement([1, 2, 2, 3]));

// Chunk an Array
// Given an array and a chunk size, split the array into smaller arrays of that size.
// Example: ([1, 2, 3, 4, 5, 6], 2) → [[1, 2], [3, 4], [5, 6]]
function chunkArray(array) {}

// Find the Longest Word in an Array
// Given an array of strings, return the longest string.
// Example: ["apple", "banana", "cherry"] → "banana"
//
function longestWord(array) {
  const sorted = array.sort((a, b) => b.length - a.length);
  return sorted[0];
  // sort them by length? then return array[0]
}
console.log(longestWord(["apple", "banana", "cherries"])); // 'cherries

// 1. Find the Average of an Array
// Write a function that takes an array of numbers and returns the average.
// Example:
function findAverage(array) {
  let total = array.reduce((a, b) => a + b);
  let average = total / array.length;
  return average;
}
console.log(findAverage([2, 4, 6, 8]));

// 2. Find the Index of a Target Element
// Write a function that takes an array and a target value, returning the index of the target or -1 if not found.
// Example:
//
// js
// Copy
// Edit
// findIndex([10, 20, 30, 40], 30); // 2
// findIndex([1, 2, 3], 5); // -1
function findIndex(array, target) {
  return array.indexOf(target);
}

console.log(findIndex([10, 20, 30, 40], 30)); // 2
