// use .length property to get the number of elements in an array

// EXAMPLE: retrieving the length of an array
const myArray = [10, 20, 30, 40, 50];
console.log(myArray.length); // 5

// EXAMPLE: get 3rd to last element
const myArray2 = [1, 5, true, false, "JavaScript"];
console.log(myArray2[myArray2.length - 3]); // true

// EXAMPLE: reducing length of the array by 1 element
myArray.length = 4;
console.log(myArray); // [10, 20, 30, 40]

// EXAMPLE: iterate over an entire array with array.length
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // 10 20 30 40
}
