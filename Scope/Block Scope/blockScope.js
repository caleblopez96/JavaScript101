// block scoped variables can only be accessed within the block

// EXAMPLE:
let radius = 8;

if (radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
}
// globally scoped variable
console.log(radius); // 8

// PI is block scoped
console.log(PI); // PI is not definednot defined

// circ is block scoped
console.log(circ); // circ is not defined
