// classes are templates for creating objects.

// EXAMPLE:
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let me = new Person("Caleb", "Lopez"); // Person {firstName: 'caleb', lastName: 'Lopez'}

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

function printName(string) {
  return string.split("").sort().join("");
}
console.log(printName("node"));
console.log(printName("abcel"));
