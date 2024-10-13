## Array Methods Overview

### Modify or Add Elements
- **`push()`**: Adds elements to the end of an array.
- **`unshift()`**: Adds elements to the beginning of an array.
- **`splice()`**: Adds/removes/replaces elements in an array.
- **`fill()`**: Fills elements in an array with a static value.
- **`copyWithin()`**: Copies part of an array to another location.

### Remove Elements
- **`pop()`**: Removes the last element of an array.
- **`shift()`**: Removes the first element of an array.
- **`unshift()`**: Removes elements from the beginning of an array.

### Return New Arrays
- **`concat()`**: Joins two or more arrays.
- **`slice()`**: Returns a portion of an array.
- **`filter()`**: Creates a new array with elements that pass a test.
- **`map()`**: Creates a new array with the results of calling a function on every element.

### Return a Single Value
- **`reduce()`**: Reduces the array to a single value (left to right).
- **`reduceRight()`**: Reduces the array to a single value (right to left).

### Search/Find Elements
- **`indexOf()`**: Returns the first index of an element.
- **`lastIndexOf()`**: Returns the last index of an element.
- **`includes()`**: Checks if an array contains a specified element.
- **`find()`**: Returns the first element that satisfies a condition.
- **`findIndex()`**: Returns the index of the first element that satisfies a condition.

### Loop/Iterate
- **`forEach()`**: Calls a function for each element.
- **`entries()`**: Returns an iterator of key/value pairs.
- **`keys()`**: Returns an iterator of the keys.
- **`values()`**: Returns an iterator of the values.

### Transform/Order
- **`reverse()`**: Reverses the array.
- **`sort()`**: Sorts the array.

### Join/Flatten
- **`join()`**: Joins all elements into a string.
- **`flat()`**: Flattens nested arrays.
- **`flatMap()`**: Maps each element, then flattens the result.

### Test Elements
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.

---

### Code Snippets

#### `.at(index)`
Returns the element at the specified index.

RETURNS element at index.
```js
[1, 2, 3].at(2); // 3
```

---
#### `.concat()`
#### `.concat(value1)`
#### `.concat(value1, value2)`
#### `.concat(value1, value2, /*...*/ valueN)`
Merges arrays.

RETURNS new array.

DOES NOT MUTATE ARRAY.
```js
[1, 2, 3].concat([4, 5, 6]) // [ 1 ,2, 3, 4, 5, 6 ]
```

---
#### `.entries()`
Creates new array iterator.

RETURNS new array iterator.

DOES NOT MUTATE ARRAY.

```js
[1, 2, 3].entries() // [Array Iterator]
```

---
#### `.every(callback)`
#### `.every(callback, args)`
Checks if every element passes test.

RETURNS boolean.

DOES NOT MUTATE ARRAY.
```js
[1, 2, 3].every(num => num > 2) // false
```

---
#### `.fill(value)`
#### `.fill(value, start)`
#### `.fill(value, start, end)`
Changes all elements within range to provided value.

RETURNS modified array.

MUTATES ORIGINAL ARRAY.

```js
[1, 2, 3].fill(2.5, 1, 2) // [1, 2.5, 3]
```

---
#### `.filter(callback)`
#### `.filter(callback, args)`
Creates new array based off of a filter.

RETURNS new filtered array.

DOES NOT MUTATE ARRAY.
```js
[1, 2, 3].filter((num) => num > 1) // [2, 3]
```
---

#### `.find(callback)`
#### `.find(callback, args)`
Returns first element if found else returns undefined.

RETURNS first element else undefined.

DOES NOT MUTATE ARRAY.
```js
[1, 2, 3].find((element) => element > 2) // 3
```
---

####  `.findIndex(callback)`
####  `.findIndex(callback, args)`
Gets index of found element.

RETURNS index

DOES NOT MUTATE ARRAY
```js
[1, 2, 3].findIndex(element => element == 3) // 2
```
---

#### `.flat()` 
#### `.flat(depth)` 
creates new array with sub-array elements concatenated