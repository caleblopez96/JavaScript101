// use .[Symbol.iterator] to allow a map to be iterable

// SYNTAX:
// map[Symbol.iterator]()

const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
])

const iterator1 = prices[Symbol.iterator]();
for (const item of iterator1) {
  console.log(item)
}

// ['Laptop', 1000]
// ['Smartphone', 800]
// ['Tablet', 400]
