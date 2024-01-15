// used to extract values from iterables into individual elements.

// It can be used in function calls or array literals.

// *UNPACKING elements from box*

// opposite of ...rest

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// EXAMPLE: unpacking each number of the numbers array
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
console.log(numbers); // [1, 2, 3] leaves elements inside of the array.


// EXAMPLE: function call 
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const numberArray = [1, 2, 3];
console.log(sum(numberArray)); // 1,2,3,undefinedundefined
console.log(sum(...numberArray)); // 6

// EXAMPLE: Convert array into object
const array1 = [1, 2, 3];
const objectFromArray = {...array1};
console.log(objectFromArray); // {0: 1, 1: 2, 2: 3}

// EXAMPLE: Convert string into array with each letter its own element.
const string = 'hello';
const eachLetter = [...string];
console.log(eachLetter); // ['h', 'e', 'l', 'l', 'o'];

// EXAMPLE: unpacking array of objects
const arrayOfObject = [
    { key : 'value' },
    { key : 'value2' },
    { key : 'value3' }
]
console.log(arrayOfObject); // [{...}, {...}, {...}] leaves objects inside of array
console.log(...arrayOfObject); // {key: 'value'} {key: 'value'} {key: 'value'} 
