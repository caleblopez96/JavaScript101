// continue statement is used within loops (such as for, while, or do...while) to skip the current iteration and proceed to the next one. 

/* It's particularly useful when you want to skip specific iterations based on certain conditions, allowing you to avoid executing certain code within the loop for particular cases. */

// SYNTAX: 
for (initialization; condition; update) {
  // Code before the continue statement

  if (someCondition) {
    continue; // Skip the current iteration and proceed to the next one
  }

  // Code after the continue statement
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  // if number at index is odd, continue
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  evenNumbers.push(numbers[i]);
}
console.log(evenNumbers); // [2, 4, 6, 8, 10]