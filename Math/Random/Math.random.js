// use the .random() method on the Math object to get a random number

// SYNTAX:
// Math.random()

// EXAMPLE:
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); // 0, 1 or 2

console.log(getRandomInt(1)); // 0

console.log(Math.random()); // a number from 0 to <1

// EXAMPLE:
console.log(Math.floor(Math.random() * 10)); // random number between 1 - 10

// EXAMPLE: get random index from array
function randomInd(array) {
  let rand = Math.floor(Math.random() * array.length);
  let randomIndex = array[rand];
  return randomIndex;
}

const carArray = [
  "Ford",
  "Chevrolet",
  "GMC",
  "Cadillac",
  "Buick",
  "Dodge",
  "Chrysler",
  "Jeep",
  "Ram",
  "Tesla",
  "Lincoln",
  "Rivian",
  "Lucid",
  "Hennessey",
  "Saleen",
];

console.log(randomInd(carArray));

// REFERENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
