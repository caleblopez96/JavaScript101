// find() is used to search for an element 
// in an array that matches a specific condition.

// SYNTAX: 
// find(callbackFn)
// find(callbackFn, thisArg)
// array.find((callbackFn) => {/.../});
// array.find(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// EXAMPLE: 
const trees = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
]

const result = trees.find(tree => tree.name === "birch");
console.log(result); // {name: 'birch', count: 4}

// the function and syntax of find() is very much like
// filter(), except it only returns a single element. 

// use find when you want a single element returned.
// array.find() returns undefined if nothing is found. 

//! use the filter instead of array.find when you need multiple elements returned.
