// use the ...rest parameter to collect all remaining arguments into one single array. 

// useful for functions that can take a variable number of arguments.

// *PACKING elements into box*

// EXAMPLE:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// EXAMPLE:
function combinedArrays(...arrays) {
    return arrays.reduce((sum, num) => [...sum, ...num]);
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = combinedArrays(arr1, arr2);
console.log(arr3); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];