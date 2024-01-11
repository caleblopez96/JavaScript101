// use the ...rest parameter to collect all remaining arguments into one single array. 

// useful for functions that can take a variable number of arguments.

// *PACKING elements into box*

// EXAMPLE: function that accepts unlimited arguments and adds them together
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//EXAMPLE: function that accepts unlimited arguments and subtracts them
function subtract(...numbers) {
    return numbers.reduce((total, num) => total - num, 0);
}
console.log(subtract(5, 3, 1)); // -9

// EXAMPLE: Combining multiple arrays into a single array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
function combinedArrays(...arrays) {
    return arrays.reduce((sum, num) => [...sum, ...num]);
}
const arr3 = combinedArrays(arr1, arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// EXAMPLE: Combine multiple objects into one array of objects
const obj1 = {a: 1};
const obj2 = {a: 2};

function combineObjects(...objects) {
    return objects.reduce((acc, obj) => {
        return acc.concat(obj);
    }, []);
}
const combinedObjects = combineObjects(obj1, obj2);
console.log(combinedObjects); // [{…}, {…}]