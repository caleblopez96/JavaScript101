// The entries() method of Set instances returns a new set iterator object that contains an array of[value, value] 
// for each element in this set, in insertion order. For Set objects there is no key like in Map objects.
// However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array[value, value] is returned.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries

const mySet = new Set([5, 20, 30, 6, 12])

const iterator = mySet.entries()

for (let entry of iterator) {
  console.log(entry) // [5, 5] [20, 20] [30, 30] [6, 6] [12, 12]
}