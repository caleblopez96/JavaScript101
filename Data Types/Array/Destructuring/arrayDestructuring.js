// use array destructuring to unpack values from an array

// EXAMPLE:
// extract the values from the fruits array and store them to a variable

const fruits = ['Apple', 'Banana', 'Orange']

const [firstFruit, secondFruit, thirdFruit] = fruits
console.log(firstFruit) // Apple
console.log(secondFruit) // Banana
console.log(thirdFruit) // Orange


// Destructuring using rest to collect rest of values
const numbers = [1, 2, 3, 4, 5]

const [firstNum, secondNum, ...remainingNums] = numbers
console.log(firstNum) // 1
console.log(secondNum) // 2
console.log(remainingNums) // [3, 4, 5]


// destructuring by skipping elements
const students = ['john', 'alice', 'jim', 'stan']

const [student1, student2, , student4] = students
console.log(student1) // john
console.log(student2) // alice
console.log(student4) // stan