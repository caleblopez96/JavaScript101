// Getters and setters allow you to define the ways to retrieve or change the values of object properties.

// Setters allow you to set the value of an objects properties

// SYNTAX:
// set nameOfYourSetter(){}

// Use a setter when you want to provide a way for someone to update something like its a property but have logic happen behind the scenes

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }
}

const c = new Circle(5);
c.radius = 23; // this updates the set radius() which actually updates this._radius
console.log(c._radius); // 23
