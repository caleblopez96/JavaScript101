// variables defined wihtin a function can only be accessed by that function

// EXAMPLE:

const num = 6;

function example() {
  let num = 5;
  let privateNum = 69;
  console.log(num);
}
example(); // 5

console.log(num); // 6
console.log(privateNum); // privateNum is not defined
