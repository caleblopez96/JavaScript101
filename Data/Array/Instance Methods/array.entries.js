// .entries() returns an iterator 
// and provides you the index and value

// SYNTAX:
// .entries()

const array1 = ['A', 'B', 'C', 'D']

const iterator = array1.entries()

for (let [index, value] of iterator) {
  console.log(index, value)
}
