// The slice() method returns a shallow copy of 
// a portion of an array into a new array
// selected from start to end 

// SYNTAX:
slice()
slice(start)
slice(start, end)

// EXAMPLE: 
// Write a JavaScript function to get the 
// first element of an array. 
// Passing the parameter 'n' will return 
// the first 'n' elements of the array.

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