const array = [1, 2, 3,]

// .at(index) returns the element at specified index.
// *RETURNS element* 
// *DOES NOT ALTER ARRAY*
console.log(array.at(2)) // 3

// .concat(array) merges arrays.
// *RETURNS new array* 
// *DOES NOT ALTER ARRAY*
console.log(array.concat([4, 5, 6])) // [ 1 ,2, 3, 4, 5, 6 ]

// .entries() returns a new array iterator.
// *RETURNS new array iterator* 
// *DOES NOT ALTER ARRAY*
console.log(array.entries()) // [ Array Iterator ]

// .every(callback, args) checks if every element passes test.
// *RETURNS boolean* 
// *DOES NOT ALTER ARRAY*
console.log(array.every((x) => x > 2)) // false

// .fill(value, start, end) changes all elements within range to given value.
// *RETURNS modified array* 
// *ALTERS ORIGINAL ARRAY*
console.log(array.fill(2.5, 1, 2)) // [ 1, 2.5, 3 ]

// .filter(callback, args) creates new array based off filter.
// *RETURNS new filtered array* 
// *ALTERS ORIGINAL ARRAY*
console.log(array.filter((num) => num < 3)) // [ 1, 2.5 ]

// .find(callback, args) return first element if found else returns undefined. 
// *RETURNS first element* 
// *DOES NOT ALTER ARRAY*
console.log(array.find((element) => element = 1)) // 2.5

// .findIndex(callbackFn, args) gets index of found element. 
// *RETURNS index* 
// *DOES NOT ALTER ARRAY*
console.log(array.findIndex((num) => num > 1)) // 1

// .flat(depth) creates new array with sub-array elements concatenated. 
// *RETURNS new array* 
// *DOES NOT ALTER ARRAY*
console.log([1, [2], [[3, 4]]].flat(2)) // [ 1, 2, 3, 4 ]

// .flatMap() returns new flattened array one by one. 
// *RETURNS new array* 
// *DOES NOT ALTER ARRAY*
console.log([[1, 2], [3, 4], [5]].flatMap((subArray) => subArray)) // [1, 2, 3, 4, 5]

// .forEach(callback, args) executes provided func once for each element in array .
// *NO return value* 
// *DOES NOT ALTER ARRAY*
array.forEach((element) => console.log(element * 2)) // 2, 5, 6

// .includes(element, fromIndex) determines if array includes provided value. 
// *RETURNS bool* 
// *DOES NOT ALTER ARRAY*
console.log(array.includes(3)) // true

// .indexOf(element, fromIndex) return the first index of found element else -1.
// *RETURNS index* 
// *DOES NOT ALTER ARRAY* 
console.log(array.indexOf(3)) // 2

// .join(separator) creates new string of concatenated elements, joined by separator.
// *RETURNS string* 
// *DOES NOT ALTER ARRAY*
console.log(array.join(' - ')) // '1 - 2.5 - 3'

// .keys() returns array iterator that contains keys for each index in array.
// *RETURNS array iterator* 
// *DOES NOT ALTER ARRAY*
console.log(array.keys()) // Object [Array Iterator]

// .lastIndexOf() returns last index at which element can be found else -1.
// *RETURNS last index of supplied element* 
// *DOES NOT ALTER ARRAY*
console.log(array.lastIndexOf(3)) // 2

// .map(callback, args) creates new array with results of calling a func on every element in array.
// *RETURNS new mapped array*
// *DOES NOT ALTER ARRAY*
console.log(array.map((element) => element * 10)) // [ 10, 25, 30 ]

// .pop() removes last element from array and returns it.
// *RETURNS the removed element
// *ALTERS ORIGINAL ARRAY
console.log(array.pop(), array) // 3, [1, 2.5]

// .push(element, ..., elementN) appends elements to end of array.
// *RETURNS length of new array
// *ALTERS ORIGINAL ARRAY
console.log(array.push(3), array) // 3 [1, 2.5, 3]

// .reduce(accumulator, currentValue) reduces values of arrays down to one value from left to right.
// *RETURNS the value
// *DOES NOT ALTER ARRAY
console.log(array.reduce((acc, val) => acc + val, 0)) // 6.5

// .reduceRight(accumulator, currentValue) reduces values of arrays down to one value from right to left. 
// *RETURNS value of reduction
//* DOES NOT ALTER ARRAY
console.log(array.reduceRight((acc, val) => acc - val)) // -0.5


// .reverse() reverses array in place
// *RETURNS reversed array
// *ALTERS ORIGINAL ARRAY
console.log([1, 2, 3].reverse()) // [3, 2, 1]
// .toReversed() reverses array without altering original
// *RETURNS reversed array
// *DOES NOT ALTER ORIGINAL
console.log(array.toReversed()) // [2.5, 3, 4]


// .shift() removes and returns first element of array
// *RETURNS removed element
// *ALTERS ORIGINAL ARRAY
console.log(array.shift(), array) // 1 [2.5, 3]

// .slice(start, end) removes portion of array based on start and stop
// *RETURNS newly sliced array
// *DOES NOT ALTER ARRAY 
console.log(array.slice(0, 1)) // [2.5]

// .some() checks if at least one element passes test
// *RETURNS boolean
// *DOES NOT ALTER ARRAY
console.log(array.some((num) => num > 1)) // true


// .sort(compareFn) sorts array based on callback
// *RETURNS sorted array
// *ALTERS ORIGINAL ARRAY
console.log([3, 2, 1].sort((a, b) => a - b)) // [1, 2, 3]
// .toSorted(compareFn) sorts without modifying original array based on callback 
// *RETURNS sorted array
// *DOES NOT ALTER ARRAY
console.log([3, 2, 1].toSorted((a, b) => a - b)) // [1, 2, 3]


// .splice(start, deleteCount, itemToAdd) change elements in array by removing or replacing or adding new elements
// *RETURNS array of deleted items
// *ALTERS ORIGINAL ARRAY
console.log([1, 2, 3, 4, 5].splice(4, 0, 6)) // []

// .toLocaleString(locales, options) 
console.log(array.toLocaleString())


// .toString() returns string representing all elements in array
// *RETURNS string
// *DOES NOT ALTER ARRAY
console.log(['c', 'a', 't'].toString()) // 'c,a,t'

// .unshift(element, ..., elementN) add elements to beginning of array
// *RETURNS length of array
// *ALTERS ORIGINAL ARRAY
console.log([3, 4, 5].unshift(1, 2)) // 5

// .values() returns new array iterator that iterates over each value
// *RETURNS nothing
// *DOES NOT ALTER ARRAY
console.log(array.values()) // Object [Array Iterator]