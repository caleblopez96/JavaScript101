// the promise object represents the eventual
// completion (or failure) of asynchronous operating
// and its resulting value.

// a promise has three states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// SYNTAX:
const promiseSyntax = new Promise((resolve, reject) => {
    // 
});

// EXAMPLE: 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //
        //
        //
        //
        }, timeout);
    })
}


//clone array 

const original = [1, 2, 3];
const clone = [...original]
console.log(original, clone)