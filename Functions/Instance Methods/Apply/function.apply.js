// allows you to call a function on a 'this' object.

// .apply() is a lot like .call(), but it accepts arguments as an array.

// SYNTAX:
// .apply(thisArg)
// .apply(thisArg, argsArray)

// PARAMETERS:
// thisArg - the value (typically the obj) to use as this when calling the function
// argsArray - array of arguments

// RETURNS:
// the result of calling the function with the specified this value and arguments

// EXAMPLE:
const ringo = {
  firstName: "Ringo",
  greet: function (greeting = "hello") {
    console.log(`${this.firstName} says ${greeting}!`);
  },
};
ringo.greet(); // "Ringo says hello!"
ringo.greet("hi"); // "Ringo says hi!"

const george = {
  firstName: "George",
  lastName: "Harrison",
};

// call accepts any number of arguments not in an array
ringo.greet.call(george, "Hiya"); // "George says Hiya"
// apply accepts any number of arguments as long as they're in an array
ringo.greet.apply(george, ["Hiya"]); // "George says Hiya"

// EXAMPLE:
let nums = [2, 6, 88, 35, 21];

// .call()
Math.max.call(null, nums); // NaN
Math.max.call(...nums); // 88

// .apply()
Math.max.apply(null, nums); // 88
Math.max.call(...nums); // 88

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/41072960#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
