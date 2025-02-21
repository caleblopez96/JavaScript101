// The has() method of Set instances returns a boolean indicating whether an element with the specified value exists in this set or not.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// SYNTAX: 
// set.has(value) 

const mySet = new Set()
mySet.add(2)
mySet.add(5)
console.log(mySet) // Set {2, 5}
mySet.has(2) // true