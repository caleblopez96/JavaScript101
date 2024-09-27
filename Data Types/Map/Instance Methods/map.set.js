// use .set() to add or update an entry in a map

// SYNTAX:
// set(key, value)

// EXAMPLE:
const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
])

console.log(prices.set("iPad", 600)) // Map {'Laptop' => 1000, 'Smartphone' => 800, 'Tablet' => 400, 'iPad' => 600}
console.log(prices) // 