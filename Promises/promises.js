// an object which represents an eventual process.

// the promise object represents the eventual
// completion (or failure) of asynchronous operations and its resulting value.

// a promise has three states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// use the .then() method to interact with a resolved promise.
// use the .catch() method to interact with a rejected promise.


// SYNTAX:
const promiseSyntax = new Promise((resolve, reject) => {
    // 
});

// EXAMPLE: CREATING A PROMISE
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //
        }, timeout);
    })
}

// EXAMPLE: INTERACTING WITH RESOLVED PROMISE
fetchData().then(() => {
  // 
});

// EXAMPLE: INTERACTING WITH REJECTED PROMISE
fetchData().catch(() => {
  //
});




// EXAMPLE:
const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    randomNumber < 0.5 ? resolve() : reject();
  }, 5000)
});

randomPromise
.then(() => {
  console.log("number less than 0.5, promise resolved");
})
.catch(() => {
  console.log("number greater than 0.5, promise rejected");
})