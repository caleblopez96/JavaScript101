// .call() allows you to call a function on a 'this' object

// lets you establish your own object that you want to call a function on

// SYNTAX:
// .call(thisArg);
// .call(thisArg, arg1);
// .call(thisArg, arg1, arg2, /* …, */ argN);

// PARAMETERS:
// thisArg - the value (typically an object) to use as this when calling the function
// arg1, ..., argN (optional) - arguments to the function

// RETURNS:
// the result of calling the function with the specified this value and arguments

// EXAMPLE: call the sing method on the second object
const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    return `${this.name} sings LA LA LA`;
  },
};

console.log(conan.sing()); // "Conan sings LA LA LA"

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};
// call sing on lisa
conan.sing.call(lisa); // "Lisa sings LA LA LA"

// EXAMPLE:

// EXAMPLE:
let nums = [2, 6, 88, 35, 21];
// .call()
Math.max.call(null, nums); // NaN
Math.max.call(...nums); // 88

// .apply()
Math.max.apply(null, nums); // 88
Math.max.call(...nums); // 88

// REFERENCE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40713564#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
