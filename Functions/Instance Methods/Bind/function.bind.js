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

console.log(conan.sing()); // "Conan sings LA LA LA"

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

const lisaSing = conan.sing.bind(lisa);
console.log(lisaSing()); // "Lisa sings LA LA LA"
