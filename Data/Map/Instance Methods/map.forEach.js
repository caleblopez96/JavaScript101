// use .forEach() to iterate over every element inside of the map

// SYNTAX: 
// .forEach(callbackFn)
// .forEach(callbackFn, args)

// EXAMPLE:
const prices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 800],
  ["Tablet", 400]
]);

prices.forEach((value, key) => {
  console.log(`${key} : ${value}`) // 'Laptop : 1000' 'Smartphone : 800' 'Tablet: 400'
})