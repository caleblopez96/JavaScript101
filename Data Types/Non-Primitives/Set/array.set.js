// The Set object lets you store unique values 
// of any type, whether primitive values 
// or object references.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// use a set instead of an array when 
// the order of items doesn't matter, 
// and you know you do NOT want duplicates 
// inside of the array.

// useful when removing duplicate values from arrays
// as values inside of a set can only occur once.

// use the 'Set' constructor to initialize a set with a variable such as an array
let mySet = new Set([1, 2, 3, 4, 5]);

// add a value to your set by using the 'add' method
mySet.add(6);
console.log(mySet); // Set(6) {1, 2, 3, 4, 5, 6}

// delete a value from your set by using the 'delete' method
mySet.delete(6);
console.log(mySet); // Set(5) {1, 2, 3, 4, 5}

// check if a value exist in a Set by using the 'has' method
mySet.has(2); // true
mySet.has(6); // false

// iterate through sets using 'for...of' loops
for (let value of mySet) {
  console.log(value); // 1 2 3 4 5
}

// get the size of a set using the 'size' property
console.log(mySet.size); // 5

// combine sets using the spread operator
let setA = new Set([1, 2, 3]);
let setB = new Set([4, 5, 6]);

let combinedSets = new Set([...setA, ...setB]);
console.log(combinedSets); // 1 2 3 4 5 6

// remove duplicate values from array
let removedDuplicates = new Set([1, 2, 3, 2, 5, 6, 3]);
console.log(removedDuplicates);

// creating a copy of the original array
const original = [1, 1, 2, 3, 4, 5, 6, 6];
const copy = [...new Set(original)];
console.log(copy); // [1, 2, 3, 4, 5, 6]
