// Area of right triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}
console.log(getTriangleArea(3, 4)); // 6

// Hypotenuse of right triangle
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
console.log(getTriangleHypotenuse(3, 4)); // 25

//* INSTEAD

let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

console.log(myTri.getArea()); // 6
console.log(myTri.getHypotenuse()); // 5
console.log((myTri.a = 5)); // 5
console.log((myTri.b = 12)); // 12
console.log(myTri.getArea()); // 30
console.log(myTri.getHypotenuse()); //
