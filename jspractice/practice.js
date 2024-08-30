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




//TODO
//8. Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

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





//TODO
//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDupes(array) {
  return new Set(array)
}

removeDupes([1,2,3,3,4,5,6,6,6,7]); // 1, 2, 3, 4, 5, 6, 7
//////////////////////////////////////////////




// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

function indexSum() {

  const array1 = [1,0,2,3,4];
  const array2 = [3,5,6,7,8,13];

  return [array1.length - 1, array2.length - 1]
}
indexSum() // [4, 5]

function indexSum(...arrays) {
  return arrays.reduce((acc, val) => {
    
  })
}
////////////////////////////////////////////////





// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
function flattenArray(...array){
  return array.reduce(() => {
    array.concat()
  })
}
////////////////////////////////////////////////




//TODO this is so wrong
// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]

function retrieveValue(array) {
  for(let i = 0; i < array.length; i++) {
    arrayIndex = array[i]
    if(typeof array[i] === 'number') {
      return [array[i]]
    }
    else {
      return `not a number`
    }
  }
}

retrieveValue([1, 2, 'string'])
////////////////////////////////////////////////



//TODO this isnt correct
// 31. Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]

function removeArrayElement(element, array) {
  if (array.includes(element)){
    return array.splice(element)
  }
}
removeArrayElement(1, [1, 2, 3])

// check the value of each element in the array and if the element is equal to the index then pop it
////////////////////////////////////////////////




const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i = 0; i < testArray.length; i++) {
  console.log(testArray[i])
  testArray
}

for(element in testArray) {
  element += element * 2
}