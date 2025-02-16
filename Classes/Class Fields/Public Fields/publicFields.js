// Private class fields help maintain encapsulation by preventing external access
// Public fields allow direct instance access

// Class fields clean up the constructor and provide a clear structure

// EXAMPLE:
class MyClass {
  // Public field
  publicField = "Public Field";

  // Private field
  #privateField = "Private Field";

  getPrivateField() {
    return this.#privateField;
  }
}

// Create an instance
const instance = new MyClass();
console.log(instance.publicField); // "Public Field"
console.log(instance.getPrivateField()); // "Private Field"
// console.log(instance.#privateField); //! SyntaxError: Private name #privateField is not defined

// EXAMPLE:
class Cat {
  static numOfCats = 0;
  numLegs = 4; // Public field
  hasTail = true; // Public field

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    return (this.numLegs -= 1);
  }
}
