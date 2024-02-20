// destructuring allows you to extract values from an array and assign them to variables. 

// used commonly in function parameter assignments, iteration, and more.

// SYNTAX:
// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// EXAMPLE: 
const numbers = [15, 20, 10];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber); // 15
console.log(secondNumber); // 20
console.log(thirdNumber); // 10


// EXAMPLE: 
// skipping elements
const colors = ['red', 'green', 'blue'];
const [firstColor, , lastColor] = colors;
console.log(firstColor); // red
console.log(lastColor); // blue


// EXAMPLE:
// rest parameter
const fruits = ['apple', 'banana', 'strawberry', 'orange'];
const [firstFruit, ...restOfFruits] = fruits;
console.log(firstFruit); // apple
console.log(restOfFruits); // ['banana', 'strawberry', 'orange']


// EXAMPLE: 
const person = {
  first: 'Caleb',
  last: 'Lopez'
}
const {first, last} = person;
console.log(first, last); // Caleb Lopez