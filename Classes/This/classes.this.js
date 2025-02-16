// when you call a function on nothing, but the function comes from inside a class,
// the value of this will be undefined, not the window

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

const kitty = new Cat("Garfield");

// normal method call, `this` refers to `kitty`
console.log(kitty.dance("tango"));
// output: This is:  Cat { name: 'Garfield' }
//         meow, I'm Garfield and I like tango

// extracting the function (without binding it)
const danceFunc = kitty.dance;
console.log(danceFunc); // [function: dance]

// calling the func on its own
console.log(danceFunc("salsa"));
// output: This is:  undefined
//         TypeError: Cannot read properties of undefined (reading 'name')
