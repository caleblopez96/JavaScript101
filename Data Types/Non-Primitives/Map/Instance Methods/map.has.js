// .has() returns boolean indicating whether an element with the key exist in the map

// SYNTAX:
// .has(key)

const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
])

console.log(prices.has("Laptop")) // true
console.log(prices.has("iPad")) // false