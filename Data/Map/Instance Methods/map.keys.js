// .keys() returns a new map iterator object 
// that contains the keys for each element

// SYNTAX:
// .keys()

// EXAMPLE:

const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
])

console.log(prices.keys()) // [Map Iterator] {'Laptop', 'Smartphone', 'Tablet'}