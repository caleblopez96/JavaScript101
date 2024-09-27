// .get() returns the value associated with its key if it exist inside of the map

// SYNTAX:
// .get(key)

// EXAMPLE:
const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
])

console.log(prices.get("Smartphone")) // 800
console.log(prices.get("iPad")) // undefined