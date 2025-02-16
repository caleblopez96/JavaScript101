// private class fields help maintain encapsulation by preventing external access
// and ensuring that data can only be modified through controlled methods.

class Circle {
  // private field
  #radius; // step 1: declare private field
  constructor(radius) {
    this.#radius = radius; // step 2
  }

  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.getRadius());
// console.log(myCircle.#radius); //! SyntaxError: Private name #radius is not defined
