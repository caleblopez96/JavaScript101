// if you need to add a new constructor to your parent class, you'll need the super key word

// the super keyword allows you to inherit the constructor of the parent class,
// then you can add your new constructor properties

// EXAMPLE: PARENT CLASS
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

// Create new triangle class that accepts a, b, and a color
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b); // this calls the parent constructor and inherits the a, b constructor property
    this.color = color; // add the new constructor property
  }
  getColor() {
    return this.color;
  }
}
const redTriangle = new ColorTriangle(3, 4, "red");
console.log(redTriangle); // ColorTriangle {a: 3, b: 4, color: "red"}
console.log(redTriangle.getColor()); // 'red'
