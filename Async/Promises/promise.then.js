// when a promise is resolved, it automatically calls the .then() method.

// use the .then() method to handle the resolved state of a promise.

// use .then() to specify what should happen when the promise is successfully resolved.

// you can chain multiple .then() methods to handle subsequent operations that depend on the previous resolved state.

// .then() resolves with a response object.

// SYNTAX:
// .then((response) => {})

// EXAMPLE:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //
    }, timeout);
  });
}
fetchData()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
