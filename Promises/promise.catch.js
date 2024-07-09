// when a promise is rejected, it automatically calls the .catch() method.

// the .catch() method handles the rejected state of a promise.

// use .catch() to specify what should happen when the promise is rejected (i.e., an error occurs).


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