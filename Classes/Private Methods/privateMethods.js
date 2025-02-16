class MyClass {
  #privateMethod() {
    console.log("PRIVATE METHOD CALLED");
  }

  // public method to access private method
  publicMethod() {
    this.#privateMethod(); // Can access the private method within the class
  }
}

const myClass = new MyClass();
myClass.publicMethod(); // Works fine, calls #privateMethod() inside publicMethod()
// myClass.#privateMethod(); // This will throw an error, private methods cannot be accessed outside the class
// SyntaxError: SUpport for the experimental syntax 'classPrivateMethods' isnt currently enabled
