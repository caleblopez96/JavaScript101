// .call() allows you to call a function on a 'this' object

// SYNTAX:
// .call(thisArg);
// .call(thisArg, arg1);
// .call(thisArg, arg1, arg2, /* …, */ argN);

// PARAMETERS:
// thisArg - the value to use as this when calling the function
// arg1, ..., argN - arguments to the function

// RETURNS:
// the result of the function with the specified this value and args.

// EXAMPLE:

class Cat {
  constructor(name) {
    this.name = name;
  }

  static exampleOfThis() {
    console.log("This is: ", this);
  }

  dance(style = "breakdancing") {
    console.log("This is: ", this);
    return `meow, I'm ${this.name} and I like ${style}`;
  }
}

const fluffy = new Cat("Fluffy");
const kitty = new Cat("Garfield");

// normal method call
console.log(fluffy.dance("tango")); // This is: Cat { name: 'Fluffy' } meow, I'm Fluffy and I like tango

// using .call() to invoke dance with a different `this`
console.log(fluffy.dance.call(kitty, "salsa")); // this is:  Cat { name: 'Garfield' } meow, I'm Garfield and I like salsa

// using .call() on an object that isn't even a Cat
const randomObject = { name: "Whiskers" };
console.log(fluffy.dance.call(randomObject, "hip-hop")); // This is:  { name: 'Whiskers' }meow, I'm Whiskers and I like hip-hop
