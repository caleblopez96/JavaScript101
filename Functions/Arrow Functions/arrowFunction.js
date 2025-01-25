// Arrow function expressions are a compact alternative to a 
// traditional function expression, with some semantic differences
// and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, 
// arguments, or super, and should not be used as methods.

// ** does NOT have its own binding to this **

// ** Concise. No this, inherits lexical this ** 

// SYNTAX:
// const functionName = () => {}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// EXAMPLE:
const addition = (...numbers) => {
  return numbers.reduce((num, sum) => num + sum);
}
console.log(addition(1, 2, 3, 4)); // 10

// one line
const addition2 = (...numbers) => numbers.reduce((num, sum) => num + sum);
console.log(addition2(1, 2, 3, 4)); // 10

// EXAMPLE:
const greeting = (hour) => {
  return hour <= "1200" ? "Good morning" : "Good afternoon";
}
greeting(1200); // Good morning