// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

//* COMPLETE
//1. Write a JavaScript function to check whether an `input` is an array or not.
function isArray(input) {
  return Array.isArray(input)
}

// Test
console.log(isArray('w3resource')); // false
console.log(isArray([1, 2, 4, 0])); // true

// Explanation:
// Array.isArray determines whether passed value is an array
////////////////////////////////////////





//* COMPLETE
//2. Write a JavaScript function to clone an array.
function arrayCloner(array) {
  return [...array]
}

// Test
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = arrayCloner(originalArray);
console.log(clonedArray); // Output: [1, 2, 3, 4, 5]
console.log(originalArray === clonedArray); // false

// Explanation: 
// Using the spread operator creates a shallow copy of the array
////////////////////////////////////////




//* COMPLETE
//3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
function firstEl(array, n) {
  if(n == null){
    return array[0];
  }
  return array.slice(0, n);
}

// Test
console.log(firstEl([7, 9, 0, -2]));  // 7
console.log(firstEl([],3)); // []
console.log(firstEl([7, 9, 0, -2],3)); // [7, 9, 0]

// Explanation: 
// Use the .slice() array method to return 'n' elements of the array
////////////////////////////////////////




//* COMPLETE
//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function lastEl(array, n) {
  if(n == null) {
    return array[array.length - 1]
  }
  return array.slice(-n) // -n counts from end of array
}

console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2],3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2],1)); // [-2]

// Explanation:
// use the slice method to return the last 'n' elements.
// use slice(-) to start counting at the end of the array
////////////////////////////////////////





//* COMPLETE
//5. Write a simple JavaScript program to join all elements of the following array into a string.
const colorArray = ['red', 'green', 'white', 'black']
function joinAllEl(array) {
  return array.join(', ')
}
joinAllEl(colorArray) // 'red, green, white, black'

// Explanation: 
// The join() method concatenates all elements of an array into a string.
////////////////////////////////////////





//* COMPLETE
// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
function dashFormatter(number) {
  let numToString = number.toString()

  let result = []

  for(let i = 0; i < numToString.length; i++) {
    result.push(numToString[i]);
  
  if (i < numToString.length -1 && 
    parseInt(numToString[i]) % 2 === 0 &&
    parseInt(numToString[i+1]) % 2 === 0) {
      result.push('-')
    }
  }
  return result.join('')
}
console.log(dashFormatter(25468)); // (254-6-8)
////////////////////////////////////////




//* COMPLETE
//7. Write a JavaScript program to sort the items of an array.
function sortArray(array) {
  return array.sort((a, b) => {
    return a - b
  })
}

sortArray([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]) // [-4, -3, 1, 2, 3, 5, 6, 7, 8]
////////////////////////////////////////////




//* COMPLETE
//8. Write a JavaScript program to find the most frequent item in an array.
function findMostFrequent(array) {
  let count = {}

  array.forEach(item =>{
    if(count[item]){
      count[item] += 1
    } else {
      count[item] = 1
    }
  })
  console.log(count)
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
findMostFrequent(arr1) // {2: 2, 3: 4, 4: 1, 9: 1, a: 5}
////////////////////////////////////////////





//* COMPLETE
//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDupes(array) {
  return new Set(array)
}

removeDupes([1,2,3,3,4,5,6,6,6,7]); // 1, 2, 3, 4, 5, 6, 7
//////////////////////////////////////////////



//* COMPLETE
// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
function twoArrays(array1, array2) {
  const result = []

  const maxLength = Math.max(array1.length, array2.length)

  for(let i = 0; i < maxLength; i++) {
      const value1 = array1[i] || 0
      const value2 = array2[i] || 0
      result.push(value1 + value2)
  }
  return result
}

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

console.log(twoArrays(array1, array2));
// Output: [4, 5, 8, 10, 12, 13]
////////////////////////////////////////////////




//* COMPLETE
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
function union(array1, array2) {
  return [... new Set([...array1, ...array2])]
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
////////////////////////////////////////////////




//* Correct
// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.

function retrieveValue(array) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array)) {
      result.push(array[i])
    }
  }
  return result
}

retrieveValue([1, 2, 'string'])
////////////////////////////////////////////////



//TODO this isnt correct
// 31. Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]

function removeArrayElement(array, element) {
  if (array.includes(element)){
    return array.splice(element)
  }
}
removeArrayElement(1, [1, 2, 3])

// check the value of each element in the array and if the element is equal to the index then pop it
////////////////////////////////////////////////


// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// 
Test Data :
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function fillArray(...fillerElement) {
  let result = []
  
}

////////////////////////////////////////////////




//* COMPLETE
// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
function mergeArray(array1, array2) {
  return new Set([...array1].concat([...array2]))
}

const array11 = [1, 2, 3];
const array22 = [2, 30, 1];
console.log(mergeArray(array11, array22)) // {1, 2, 3, 30}
////////////////////////////////////////////////



//* COMPLETE
// 32. Write a JavaScript function to find an array containing a specific element.
function findSpecificElement(array, element){
  if(array.includes(element)) {
    return true
  } else {
    return false
  }
}

findSpecificElement([1, 2, 3],3) // true
findSpecificElement([1, 2, 3],5) // false