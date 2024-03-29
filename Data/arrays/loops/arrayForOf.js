// A simpler and more declarative way to iterate over an array.

// SYNTAX: 
/* 
    for (variable of iterable) {
        
    } 
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// ES5
const list = [ 2, 3, 4 ];

for(let i = 0; i < list.length; i++) {
    console.log(list[i]); // 2 3 4
}

// ES6
const array = [ 1, 2, 3, 4, 5 ];

for (element of array) {
    console.log(element); // 1 2 3 4 5
}