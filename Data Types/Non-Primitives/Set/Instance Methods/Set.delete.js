// the delete () method of Set instances removes a specified value from this set, if it is in the set.

// SYNTAX:
// Set.delete()

const mySet3 = new Set()
mySet3.add(1)
mySet3.add(2)
mySet3.add(3)
console.log(mySet3) // Set {1, 2, 3}
mySet3.delete(2)
console.log(mySet3) // Set {1, 3}