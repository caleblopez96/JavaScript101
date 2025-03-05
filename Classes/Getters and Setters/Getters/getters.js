// Getters and setters allow you to define the ways to retrieve or change the values of object properties.

// Getters allow you to retrieve the value of an objects property

// SYNTAX:
// get nameOfYourGetter(){}

// Access the getter like a property, not a method.
// className.nameOfYourGetter

// The point of a getter is to act like a property, but have function logic behind it.
// useful when you have values derived off of other values

class Circle {
  constructor(radius) {
    this._radius = radius; // the underscore is a legacy way of declaring the a variable whose value probably should prob not change
  }

  // getter for diameter
  get diameter() {
    return this._radius * 2;
  }
}
const circle = new Circle(5);
//* access the getter like a property, not a method
console.log(circle.diameter); // 10
console.log(circle.diameter()); //! circle.diameter is not a function

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40702430#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
