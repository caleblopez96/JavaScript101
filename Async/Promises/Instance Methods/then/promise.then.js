// .then() is used to handle the resolved state of a Promise.

// Use .then() to execute actions when a Promise is successfully resolved.

// Multiple .then() methods can be chained for sequential operations.
// .then() receives the resolved value of a Promise and can return a new Promise.

// SYNTAX:
// promise.then(onFulfilled)
// promise.then(onFulfilled, onRejected)

// PARAMETERS:
// onFulfilled - the value the promise was fulfilled with
// onRejected (optional) - the value the promise was rejected with

// RETURNS:
// A Promise that allows chaining additional operations

// MUTATION:
// does NOT mutate the original Promise.

// EXAMPLE: Fetching Pokémon data using .then()
const baseURL = "https://pokeapi.co/api/v2/pokemon";
const url = `${baseURL}`;

fetch(`${url}/1`)
  .then((response) => response.json()) // Parse JSON response
  .then((data) => console.log(data)) // Handle parsed data
  .catch((error) => console.log("Error:", error));

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
