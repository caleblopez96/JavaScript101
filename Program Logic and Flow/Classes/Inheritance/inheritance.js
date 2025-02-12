// Inheritance allows you to inherit properties and "extend" them from a parent class

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

// Create a new Triangle class that inherits everything from the Triangle class, but adds a describe method:
class TriangleDescribed extends Triangle {
  // don't repeat properties here, it'll "inherit" them from the "parent".
  // ALL OF THE CODE BELOW IS INHERITED FROM Triangle class:

  // constructor(a, b) {
  //   this.a = a;
  //   this.b = b;
  // }
  // getArea() {
  //   return (this.a * this.b) / 2;
  // }
  // getHypotenuse() {
  //   return Math.sqrt(this.a ** 2 + this.b ** 2);
  // }

  // just add your new method
  describe() {
    return `I am described triangle with an area of ${this.getArea()}`;
  }
}
