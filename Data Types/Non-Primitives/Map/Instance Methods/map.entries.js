// .entries() returns a new map iterator object that contains
// [key, value] pairs for each element in the map:

const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
]);


console.log(prices) // Map {'Laptop' => 1000, 'Smartphone' => 800, 'Tablet' => 400}
console.log(prices.entries()) // MapIterator {'Laptop' => 1000, 'Smartphone' => 800, 'Tablet' => 400}

for (let [key, value] of prices) {
  console.log(`${key} : ${value}`) // 'Laptop : 1000' 'Smartphone : 800' 'Tablet : 400'
}