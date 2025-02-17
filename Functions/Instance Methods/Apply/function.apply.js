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
console.log(ringo.greet()); // "Ringo says hello"
console.log(ringo.greet("hi")); // Ringo says hi!

const george = {
  firstName: "George",
  lastName: "Harrison",
};

// call accepts any number of arguments not in an array
console.log(ringo.greet.call(george, "Hiya"));
// apply accepts any number of arguments as long as they're in an array
console.log(ringo.greet.apply(george, ["Hiya"])); //

// EXAMPLE:
let nums = [2, 6, 88, 35, 21];
// .call()
console.log(Math.max.call(null, nums)); // NaN
console.log(Math.max.call(...nums)); // 88

// .apply()
console.log(Math.max.apply(null, nums)); // 88
console.log(Math.max.call(...nums)); // 88
