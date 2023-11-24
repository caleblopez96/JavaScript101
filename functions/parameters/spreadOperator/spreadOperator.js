// used to extract values from iterables into individual elements.

// It can be used in function calls or array literals.

// *UNPACKING elements from box*

// EXAMPLE: array literal
const numbers = [1, 2, 3];

// unpacking each number
console.log(...numbers); // 1 2 3

// leaves elements inside of the array.
console.log(numbers); // [1, 2, 3]


// EXAMPLE: function call 
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numberArray = [1, 2, 3];
console.log(sum(...numberArray)); // 6


// Convert array into object
const array1 = [1, 2, 3];
const objectFromArray = { ...array1 };
console.log(objectFromArray); // {0: 1, 1: 2, 2: 3}

// Convert string into array with each letter its own element.
const string = 'hello';
const eachLetter = [...string];
console.log(eachLetter); // ['h', 'e', 'l', 'l', 'o'];