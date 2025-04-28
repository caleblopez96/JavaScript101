// Software entities should be open for extension but closed for modification.
// This means that the behavior of a module can be extended without modifying its source code.

// you should be able to extend the class behavior without modifying the class itself.

// this is an example of why you need the use the open-closed principle.
// In the example below, we have a class called AreaCalculator that calculates the area of circles and squares.
// But if you needed to add a new shape, like a triangle, you would have to modify the AreaCalculator class.
// This violates the open-closed principle because the class is not closed for modification.

// EXAMPLE: Violoating the Open-Closed Principle
class AreaCalculator {
  static calculate(shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.type === "square") {
      return shape.side * shape.side;
    }
  }
  static calculateArea(shapes) {
    return shapes.reduce((sum, shape) => {
      sum + AreaCalculator.calculate(shape);
    }, 0);
  }
}

// object literal for circle and square
// this is a simple way to create objects without using classes
const circle = { type: "circle", radius: 5 };
const square = { type: "square", side: 4 };
// const triangle = ???????? I would have to modify the AreaCalculator class to add this new shape. Which is why this example violates the open-closed principle.

// EXAMPLE: Applying the Open-Closed Principle:

class Shape {
  area() {
    // OVERRIDE ME!!!
    console.log("Shape did not implement area!");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

class AreaCalculator {
  static calculate(shape) {
    return shape.area();
  }
  static calculateAll(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
  }
}

const circle1 = new Circle(5);
const square1 = new Square(4);

// now if you need to make a rectangle class
// instead of modifying an existing class, you just make a new one:

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
const rectangle1 = new Rectangle(10, 20);

AreaCalculator.calculate(rectangle1); // 200

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/41043350
