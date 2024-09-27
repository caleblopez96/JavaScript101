// use .delete() to remove a specified element from a Map

// SYNTAX:
// .delete(key)

// EXAMPLE:
const myMap = new Map()

myMap.set("a", 1)
myMap.set("b", 2)

myMap.delete("a")
console.log(myMap) // Map { 'b' => 2, [size]: 1 }