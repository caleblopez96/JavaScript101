// a closure is a function defined inside of another function that has access to the parent functions variables

// EXAMPLE:
function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();
nextId(); // 1
nextId(); // 2
nextId(); // 3

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40741660#overview

// MDN:
//
