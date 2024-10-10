const array = [1, 2, 3]

// .at(index) returns the element at specified index.
// *RETURNS element* *DOES NOT ALTER ARRAY*
console.log(array.at(2)) // 3

// .concat(array) merges arrays. *returns newly merged array*
// *RETURNS new array* *DOES NOT ALTER ARRAY*
console.log(array.concat([4, 5, 6])) // [ 1 ,2, 3, 4, 5, 6 ]

// .entries() returns a new array iterator. *returns iterator*
// *RETURNS new array iterator* *DOES NOT ALTER ARRAY*
console.log(array.entries()) // [ Array Iterator ]

// .every(callback, args) checks if every element passes test. *returns bool*
// *RETURNS boolean* *DOES NOT ALTER ARRAY*
console.log(array.every((x) => x > 2)) // false

// .fill(value, start, end) changes all elements within range to given value. *returns modified array* 
// *RETURNS modified array* *ALTERS ORIGINAL ARRAY*
console.log(array.fill(2.5, 1, 2)) // [ 1, 2.5, 3 ]

// .filter(callback, args) creates new array based off filter. *returns filtered array*
// *RETURNS new array* *MODIFIES ORIGINAL ARRAY*
console.log(array.filter((num) => num < 3)) // [ 1, 2.5 ]

// .find(callback, args) return first element if found else returns undefined. 
// *RETURNS first element* *DOES NOT ALTER ARRAY*
console.log(array.find((element) => element = 1)) // 2.5

// .findIndex(callbackFn, args) gets index of found element. 
// *RETURNS index* *DOES NOT ALTER ARRAY*
console.log(array.findIndex((num) => num > 1)) // 1

// .flat(depth) creates new array with sub-array elements concatenated. 
// *RETURNS new array* *DOES NOT ALTER ARRAY*
console.log([1, [2], [[3, 4]]].flat(2)) // [ 1, 2, 3, 4 ]

// .flatMap() returns new flattened array one by one. 
// *RETURNS new array* *DOES NOT ALTER ARRAY*
console.log([[1, 2], [3, 4], [5]].flatMap((subArray) => subArray)) // [1, 2, 3, 4, 5]

// .forEach(callback, args) executes provided func once for each element in array 
// *NO return value* *DOES NOT ALTER ARRAY*
array.forEach((element) => console.log(element * 2)) // 2, 5, 6

// .includes(element, fromIndex) determines if array includes provided value. 
// *RETURNS bool* *DOES NOT ALTER ARRAY*
console.log(array.includes(3)) // true

// .indexOf(element, fromIndex) return the first index of found element else -1
// *RETURNS index* *DOES NOT ALTER ARRAY* 
console.log(array.indexOf(3)) // 2

// .join(separator) creates new string of concatenated elements, joined by separator
// *RETURNS string* *DOES NOT ALTER ARRAY*
console.log(array.join(' - ')) // '1 - 2.5 - 3'

// .keys() returns array iterator that contains keys for each index in array.
// *RETURNS array iterator* *DOES NOT ALTER ARRAY*
console.log(array.keys()) // Object [Array Iterator]

// .lastIndexOf() returns last index at which element can be found else -1.
// *RETURNS last index of supplied element* *DOES NOT ALTER ARRAY*
console.log(array.lastIndexOf(3)) // 2
console.log(array.map())
console.log(array.pop())
console.log(array.push())
console.log(array.reduce())
console.log(array.reduceRight())
console.log(array.reverse())
console.log(array.shift())
console.log(array.slice())
console.log(array.some())
console.log(array.sort())
console.log(array.splice())
console.log(array.toLocaleString())
console.log(array.toString())
console.log(array.unshift())
console.log(array.values())