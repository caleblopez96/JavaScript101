// use the ...rest parameter to collect all arguments inside of a function into one single array. 

// useful for functions that can take a variable number of arguments.

// *PACKING elements into box*

// opposite of ...spread

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


//EXAMPLE: function that accepts unlimited arguments and subtracts them
function subtract(...numbers) {
  return numbers.reduce((total, num) => total - num, 0);
}
console.log(subtract(5, 3, 1)); // -9

// EXAMPLE: function that accepts nth arguments and adds them
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// EXAMPLE: Combining multiple arrays into a single array
// rest is being used as a function parameter 
// the return statement uses spread
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
function combinedArrays(...arrays) {
  return arrays.reduce((sum, num) => [...sum, ...num]);
}
const arr3 = combinedArrays(arr1, arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// EXAMPLE: Combine multiple objects into one array of objects
const obj1 = { a: 1 };
const obj2 = { a: 2 };
function combineObjects(...objects) {
  return objects.reduce((accumulator, obj) => {
    return accumulator.concat(obj);
  }, []);
}
const combinedObjects = combineObjects(obj1, obj2);
console.log(combinedObjects); // [{…}, {…}]


