// Operator that takes three operands: 
// a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy 
// followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as an alternative to an if...else statement.

// SYNTAX:
// condition ? exprIfTrue : exprIfFalse

const votingAge = 18;

let message = (votingAge >= 18) ? 'You are eligible to vote' : 'You are not eligible to vote';

console.log(message); // You are eligible to vote

