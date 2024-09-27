// use new Map() to create a new map object

// SYNTAX:
// new Map()
// new Map(iterable)

// EXAMPLE:
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ['c', 3]
])

console.log(myMap) // Map(3) { 'one' => 1, 'two' => 2, 'three' => 3 }
// [[Entries]]
// 0: { "a" => 1 }
// 1: { "b" => 2 }
// 2: { "c" => 3 }
// size: 3