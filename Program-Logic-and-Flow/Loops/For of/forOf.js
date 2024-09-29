// use for...of to loop over arrays, strings, maps, sets, and nodelist(dom array's)

// returns each key-value pair in an array

// SYNTAX:
// for(variable of iterable) {}

// EXAMPLE:

// array
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fiona', 'George', 'Hannah', 'Isaac', 'Jack'];
for (name of names) {
  console.log(name)
}

// string
const racecar = 'racecar'
for (const letter of racecar) {
  console.log(letter) // r a c e c a r
}

// map
const myMap = new Map()
myMap.set('name', 'bill')
myMap.set('location', 'new york')
console.log(myMap) // Map { name : bill , location : new york }
for (const test of myMap) {
  console.log(test) // [name, bill] [location, new york]
}

// set
const mySet = new Set()
mySet.add(5)
mySet.add(6)
console.log(mySet) // Set {5, 6}
for (const element of mySet) {
  console.log(element) // 5 6
}