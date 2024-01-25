// spread extracts values from iterables into individual elements.

// It can be used in function calls, array literals and object literals.

// EXAMPLE: unpacking each number of the numbers array
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
console.log(numbers); // [1, 2, 3] leaves elements inside of the array.

// EXAMPLE: Convert array into object
const array1 = [1, 2, 3];
const objectFromArray = {...array1};
console.log(objectFromArray); // {0: 1, 1: 2, 2: 3}

// EXAMPLE: making a copy of an array
const original = [1, 3, 9, 27];
const copy = [...original];
console.log(copy); // [1, 3, 9, 27]

// EXAMPLE: combining arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// EXAMPLE: function call 
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const numberArray = [1, 2, 3];
console.log(sum(numberArray)); // 1,2,3,undefinedundefined
console.log(sum(...numberArray)); // 6

// EXAMPLE: Convert string into array with each letter its own element.
const string = 'hello';
const eachLetter = [...string];
console.log(eachLetter); // ['h', 'e', 'l', 'l', 'o'];