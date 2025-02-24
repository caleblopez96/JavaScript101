// .catch() handles the rejected state of a Promise.
// Automatically called when a Promise is rejected.
// Use .catch() to specify actions when an error occurs.

// SYNTAX:
// promise.catch((error) => {})

// PARAMETERS:
// error - the error returned when the Promise is rejected.

// RETURNS:
// A Promise that handles rejection and executes the provided callback function.

// MUTATION:
// does NOT mutate the original Promise.

// EXAMPLE: Handling errors in a fetch request using .catch()
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => response.json()) // Parse JSON response
  .then((data) => console.log(data)) // Handle parsed data
  .catch((error) => console.log("Error:", error)); // Handle errors

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
