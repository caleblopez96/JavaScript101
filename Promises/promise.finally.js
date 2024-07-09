// .finally() runs regardless of the outcome of the promise.

// use .finally() to perform cleanup or final actions that should run regardless of the promise’s outcome.

// .finally() ensures that certain code runs after the promise settles.

// useful for actions like stopping a loading spinner, 
// closing a database connection, or resetting variables.

// unlike .then() and .catch(), .finally() is NOT
// mandatory to have in a promise.

// EXAMPLE: CREATING A PROMISE
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      //
      }, timeout);
  })
}
fetchData()
.then((data) => {
// Handle successful resolution
  console.log("Promise resolved with:", data);
})
.catch((err) => {
// Handle rejection
console.log("Promise rejected:", err);
})
.finally(() =>{
// Execute code regardless of resolution or rejection
  console.log("Promise settled");
})
