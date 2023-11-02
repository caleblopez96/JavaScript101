// destructuring allows you to extract values from an array and assign them to variables. 

// used commonly in function parameter assignments, iteration, and more.

// EXAMPLE: 
const numbers = [15, 20, 10];
const [ firstNumber, secondNumber, thirdNumber ] = numbers;
console.log(firstNumber); // 15
console.log(secondNumber); // 20
console.log(thirdNumber); // 10


// EXAMPLE: 
// skipping elements
const colors = [ 'red', 'green', 'blue' ];
const [ firstColor, , lastColor ] = colors;
console.log(firstColor); // red
console.log(lastColor); // blue


// EXAMPLE:
// rest parameter
const fruits = [ 'apple', 'banana', 'strawberry', 'orange' ];
const [ firstFruit, ...restOfFruits ] = fruits;
console.log(firstFruit); // apple
console.log(restOfFruits); // ['banana', 'strawberry', 'orange']