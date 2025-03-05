// closures can help you create factory functions

// EXAMPLE:
function createExponentFunction(exponent) {
  return function (value) {
    return value ** exponent;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

console.log(square(2)); // 4
console.log(cube(3)); // 27

// EXAMPLE:
function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book");
const getUserId = uniqueIdGenerator("user_");
console.log(getBookId()); // book1
console.log(getBookId()); // book2
console.log(getBookId()); // book3
console.log(getUserId()); // user_1
console.log(getUserId()); // user_2
console.log(getUserId()); // user_3
