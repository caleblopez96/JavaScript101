// use a set instead of an array when the order of items doesnt matter, and you know you do NOT want duplicates inside of the array.

// the set object allows you to store unique values of any type

// values inside of a set can only occur once 

// useful when removing duplicate values from arrays

// use the 'Set' constructor to initialize a set with a variable such as an array
let mySet = new Set([ 1, 2, 3, 4, 5 ]);

// add a value to your set by using the 'add' method
mySet.add(6); 
console.log(mySet); // Set(6) {1, 2, 3, 4, 5, 6}

// delete a value from your set by using the 'delete' method
mySet.delete(6);
console.log(mySet); // Set(5) {1, 2, 3, 4, 5}

// check if a value exsist in a Set by using the 'has' method
mySet.has(2); // true
mySet.has(6); // false

// iterate through sets using 'for...of' loops
for(let value of mySet) {
    console.log(value); // 1 2 3 4 5
}

// get the size of a set using the 'size' property
console.log(mySet.size); // 5

// combine sets using the spread operator
let setA = new Set([ 1, 2, 3 ]);
let setB = new Set([ 4, 5, 6 ]);

let combinedSets = new Set([ ...setA, ...setB ]);
console.log(combinedSets); // 1 2 3 4 5 6

// remove duplicate values from array
let removedDuplicates = new Set([ 1, 2, 3, 2, 5, 6, 3 ]);
console.log(removedDuplicates);