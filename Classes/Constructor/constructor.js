// A constructor is a function used to create and initialize objects.

// When you define a constructor inside a class or a function, it allows you to pass in arguments and assign them to properties when creating an instance of the object.

// if the properties are required from the start, using a constructor is preferred

// SYNTAX:
class className {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
  defineMethod() {
    return "";
  }
}

// EXAMPLE 2a: with a constructor:
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

const t = new Triangle(3, 4);
t.getArea(); // 6
t.getHypotenuse; // 5

// EXAMPLE 2b: without a constructor
class Triangle2 {
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

let myTriangle = new Triangle2();
myTriangle.a = 3;
myTriangle.b = 4;
myTriangle.getArea(); // 6
myTriangle.getHypotenuse(); // 5

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40702412#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
