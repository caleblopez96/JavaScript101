// The add() method of Set instances inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add

const mySet = new Set()
mySet.add(1)
mySet.add(3)
console.log(mySet) // Set {1, 3}
mySet.add(5)
console.log(mySet) // Set {1, 3, 5}