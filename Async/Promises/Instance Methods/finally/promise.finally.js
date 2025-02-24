// .finally() runs regardless of the outcome of the promise.

// use .finally() to perform cleanup or final actions that should run regardless of the promise’s outcome.

// .finally() ensures that certain code runs after the promise settles.

// useful for actions like stopping a loading spinner,
// closing a database connection, or resetting variables.

// unlike .then() and .catch(), .finally() is NOT
// mandatory to have in a promise.

// EXAMPLE: Fetching Pokémon data using .then()
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => response.json()) // Parse JSON response
  .then((data) => console.log(data)) // Handle parsed data
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Promise resolved")); // indicate promise has settled
