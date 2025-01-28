// syntactic sugar of if else statement

// SYNTAX:
// condition ? exprIfTrue : exprIfFalse

// EXAMPLE:

function oldEnoughToVote(age) {
  return age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote'
}

console.log(oldEnoughToVote(12)) // You are not eligible to vote
console.log(oldEnoughToVote(18)) // You are eligible to vote

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
