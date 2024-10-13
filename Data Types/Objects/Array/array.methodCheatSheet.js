/* 
  ADD/MODIFY: push(), unshift(), splice(), fill(), copyWithin()
  REMOVE: pop(), shift(), unshift()
  
  RETURN NEW ARRAYS: concat(), slice(), filter(), map()
  RETURN SINGLE VALUE: reduce(), reduceRight()
  
  SEARCH/FIND: indexOf(), lastIndexOf(), includes(), find(), findIndex()
  
  LOOP/ITERATE: forEach(), entries(), keys(), values()
  
  TRANSFORM/ORDER: reverse(), sort()
  JOIN/FLATTEN: join(), flat(), flatMap()
  
  TEST: every(), some()
*/

// .at(index) returns the element at specified index.
// *RETURNS element* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].at(2)) // 3

// .concat(array) merges arrays.
// *RETURNS new array* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].concat([4, 5, 6])) // [ 1 ,2, 3, 4, 5, 6 ]

// .entries() returns a new array iterator.
// *RETURNS new array iterator* 
// *DOES NOT MUTATE ARRAY*
const iterator = ['A', 'B', 'C'].entries() // Object [Array Iterator]

for (let entry of iterator) { console.log(entry) } // [0, 'A'] [1, 'B'] [2, 'C']

// .every(callback, args) checks if every element passes test.
// *RETURNS boolean* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].every((x) => x > 2)) // false

// .fill(value, start, end) changes all elements within range to given value.
// *RETURNS modified array* 
// *MUTATES ORIGINAL ARRAY*
console.log([1, 2, 3].fill(2.5, 1, 2)) // [ 1, 2.5, 3 ]

// .filter(callback, args) creates new array based off filter.
// *RETURNS new filtered array* 
// *MUTATES ORIGINAL ARRAY*
console.log([1, 2, 3].filter((num) => num < 3)) // [ 1, 2]

// .find(callback, args) return first element if found else returns undefined. 
// *RETURNS first element* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].find((element) => element == 1)) // 1

// .findIndex(callbackFn, args) gets index of found element. 
// *RETURNS index* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].findIndex((num) => num > 1)) // 1

// .flat(depth) creates new array with sub-array elements concatenated. 
// *RETURNS new array* 
// *DOES NOT MUTATE ARRAY*
console.log([1, [2], [[3, 4]]].flat(2)) // [ 1, 2, 3, 4 ]

// .flatMap() returns new flattened array one by one. 
// *RETURNS new array* 
// *DOES NOT MUTATE ARRAY*
console.log([[1, 2], [3, 4], [5]].flatMap((subArray) => subArray));// [1, 2, 3, 4, 5]

// .forEach(callback, args) executes provided func once for each element in array .
// *NO return value* 
// *DOES NOT MUTATE ARRAY*
[1, 2, 3].forEach((element) => console.log(element * 2)) // 2, 4, 6

// .includes(element, fromIndex) determines if array includes provided value. 
// *RETURNS bool* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].includes(3)) // true

// .indexOf(element, fromIndex) return the first index of found element else -1.
// *RETURNS index* 
// *DOES NOT MUTATE ARRAY* 
console.log([1, 2, 3].indexOf(3)) // 2

// .join(separator) creates new string of concatenated elements, joined by separator.
// *RETURNS string* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].join(' - ')) // '1 - 2 - 3'

// .keys() returns array iterator that contains keys for each index in [1, 2, 3].
// *RETURNS array iterator* 
// *DOES NOT MUTATE ARRAY*
const keyIterator = ['A', 'B', 'C'].keys() // Object [Array Iterator]

for (let keys of keyIterator) { console.log(keys) } // 0 1 2

// .lastIndexOf() returns last index at which element can be found else -1.
// *RETURNS last index of supplied element* 
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].lastIndexOf(3)) // 2

// .map(callback, args) creates new array with results of calling a func on every element in [1, 2, 3].
// *RETURNS new mapped array*
// *DOES NOT MUTATE ARRAY*
console.log([1, 2, 3].map((element) => element * 10)) // [ 10, 20, 30 ]

// .pop() removes last element from array and returns it.
// *RETURNS the removed element
// *MUTATES ORIGINAL ARRAY
console.log([1, 2, 3].pop()) // 3

// .push(element, ..., elementN) appends elements to end of [1, 2, 3].
// *RETURNS length of new array
// *MUTATES ORIGINAL ARRAY
console.log([1, 2, 3].push(3)) // 3

// .reduce(accumulator, currentValue) reduces values of arrays down to one value from left to right.
// *RETURNS the value
// *DOES NOT MUTATE ARRAY
console.log([1, 2, 3].reduce((acc, val) => acc + val, 0)) // 6.5

// .reduceRight(accumulator, currentValue) reduces values of arrays down to one value from right to left. 
// *RETURNS value of reduction
//* DOES NOT MUTATE ARRAY
console.log([1, 2, 3].reduceRight((acc, val) => acc - val)) // -0.5


// .reverse() reverses array in place
// *RETURNS reversed array
// *MUTATES ORIGINAL ARRAY
console.log([1, 2, 3].reverse()) // [3, 2, 1]
// .toReversed() reverses array without MUTATEing original
// *RETURNS reversed array
// *DOES NOT MUTATE ORIGINAL
console.log([1, 2, 3].toReversed()) // [23, 2, 1]


// .shift() removes and returns first element of array
// *RETURNS removed element
// *MUTATES ORIGINAL ARRAY
console.log([1, 2, 3].shift()) // 1

// .slice(start, end) removes portion of array based on start and stop
// *RETURNS newly sliced array
// *DOES NOT MUTATE ARRAY 
console.log([1, 2, 3].slice(0, 1)) // 1

// .some() checks if at least one element passes test
// *RETURNS boolean
// *DOES NOT MUTATE ARRAY
console.log([1, 2, 3].some((num) => num > 1)) // true


// .sort(compareFn) sorts array based on callback
// *RETURNS sorted array
// *MUTATES ORIGINAL ARRAY
console.log([3, 2, 1].sort((a, b) => a - b)) // [1, 2, 3]
// .toSorted(compareFn) sorts without modifying original array based on callback 
// *RETURNS sorted array
// *DOES NOT MUTATE ARRAY
console.log([3, 2, 1].toSorted((a, b) => a - b)) // [1, 2, 3]


// .splice(start, deleteCount, itemToAdd) change elements in array by removing or replacing or adding new elements
// *RETURNS array of deleted items
// *MUTATES ORIGINAL ARRAY
console.log([1, 2, 3, 4, 5].splice(4, 0, 6)) // []

// .toLocaleString(locales, options) 
console.log([1, 2, 3].toLocaleString())


// .toString() returns string representing all elements in array
// *RETURNS string
// *DOES NOT MUTATE ARRAY
console.log(['c', 'a', 't'].toString()) // 'c,a,t'

// .unshift(element, ..., elementN) add elements to beginning of array
// *RETURNS length of array
// *MUTATES ORIGINAL ARRAY
console.log([3, 4, 5].unshift(1, 2)) // 5

// .values() returns new array iterator that iterates over each value
// *RETURNS nothing
// *DOES NOT MUTATE ARRAY
const valueIterator = ['A', 'B', 'C'].values() // Object [Array Iterator]

for (let value of valueIterator) { console.log(value) } // 'A' 'B' 'C'