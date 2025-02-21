// The forEach() method of Set instances executes a provided function once for each value in this set, in insertion order.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach

// SYNTAX: 
// set.forEach(element => {

// })
const mySet = new Set([2, 4, 6, 8, 10])
const destinationSet = new Set();

function doubleAndPush(origSet, destSet) {
  origSet.forEach(element => {
    destSet.add(element * 2); // Add doubled values to destSet
  })
  return destSet
}

console.log(doubleAndPush(mySet, destinationSet))
