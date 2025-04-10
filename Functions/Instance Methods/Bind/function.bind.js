// .bind() permanently binds a function to a specific object.

// SYNTAX:
// .bind(thisArg);
// .bind(thisArg, arg1);
// .bind(thisArg, arg1, arg2, /* …, */ argN);

// PARAMETERS:
// thisArg - the value (typically an object) to use as this when calling the function
// arg1, ..., argN (optional) - arguments to the function

// RETURNS:
// copy of the function with the specified this value and arguments

// EXAMPLE:

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    return `${this.name} sings LA LA LA`;
  },
};
conan.sing(); // "Conan sings LA LA LA"

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

const lisaSing = conan.sing.bind(lisa);
lisaSing(); // "Lisa sings LA LA LA"

// EXAMPLE: binding only one argument
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}
// give thisArg the value of null
const aussieGreet = greet.bind(null, "G'day");
aussieGreet("Bob"); // "G'day Bob"

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746902#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
