// Arrow function expressions are a compact alternative to a traditional function expression with deliberate limitations in usage.

// You dont have to write a return statement as arrow functions are implicitly returned

// Arrow functions don't have their own bindings to this, and should not be used as methods.

// ** does NOT have its own binding to this **

// SYNTAX:
// const functionName = param => {}
// const functionName = (param1, param2) => {}
// const functionName = (...params) => {}

// EXAMPLE:
const addition = (...numbers) => {
  return numbers.reduce((num, sum) => num + sum);
};
console.log(addition(1, 2, 3, 4)); // 10

// EXAMPLE:
const subtraction = (num1, num2) => num1 - num2;
console.log(subtraction(5, 2)); // 3

// EXAMPLE:
const greeting = (hour) => {
  return hour <= "1200" ? "Good morning" : "Good afternoon";
};
console.log(greeting(1200)); // Good morning

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
