// .then() is autmatically called and handles the resolved state of a Promise.

// Use .then() to specify actions when a Promise is successfully resolved.

// Multiple .then() methods can be chained for sequential operations.
// .then() resolves with a response object.

// SYNTAX:
// promise.then((response) => {})

// PARAMETERS:
// response - the resolved value returned by the Promise.

// RETURNS:
// A Promise that allows chaining additional operations.

// MUTATION:
// does NOT mutate the original Promise.

// EXAMPLE: Fetching Pokémon data using .then()
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => response.json()) // Parse JSON response
  .then((data) => console.log(data)) // Handle parsed data
  .catch((error) => console.log("Error:", error));

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
