// Function declarations are hoisted,
// which means they are moved to the top of their
// containing scope during the compilation phase.

//** Hoisted **

// SYNTAX:
// function nameOfFunction() {}

// EXAMPLE:
function addition(...numbers) {
  return numbers.reduce((sum, num) => sum + num);
}

console.log(addition(1, 2, 3, 4)); // 10

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
