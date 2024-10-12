// an object that represents an eventual process.

// the promise object represents the eventual
// completion (or failure) of asynchronous operations and its resulting value.

// a promise has three states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// use the .then() method to interact with a resolved promise.
// use the .catch() method to interact with a rejected promise.
// use the .finally() method to execute code regardless of resolution or rejection.


// SYNTAX:
const promiseSyntax = new Promise((resolve, reject) => {
    // 
});

// EXAMPLE: CREATING A PROMISE
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //
        }, timeout);
    })
}
const url = 'https://api.example.com'
fetchData(url)
.then(response => response.json())
.then((data) => {
  // Handle successful resolution
    console.log("Promise resolved with:", data);
})
.catch((error) => {
  // Handle rejection
  console.log("Promise rejected:", error);
})
.finally(() =>{
  // Execute code regardless of resolution or rejection
    console.log("Promise settled");
})




// EXAMPLE:
const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    randomNumber > 0.5 ? resolve() : reject();
  }, 5000)
});
randomPromise
.then(() => {
  console.log("number greater than 0.5, promise resolved");
})
.catch(() => {
  console.log("number less than 0.5, promise rejected");
})
