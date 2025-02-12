// the nullish coalescing operator provides a
// concise way to handle default values when dealing
// with potentially null or undefined values.

// SYNTAX:
// leftExpr ?? rightExpr

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing


// EXAMPLE:
function getPlayerName(){

  let user = 'User1'
  let gamerTag = null; // returns user1
  /* let gamertag = 'user input' */ // returns user input
  
  return gamerTag ?? user;
}
getPlayerName(); // user1
