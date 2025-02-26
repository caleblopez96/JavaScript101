// The static method .all() of the Promise object accepts an iterable (like an array) of promises
// and returns a single promise that resolves when all the input promises have resolved.

// SYNTAX:
// Promise.all(iterable)

// PARAMETERS:
// - iterable: An iterable collection (e.g., an array) containing multiple promises.

// RETURNS:
// A single Promise that resolves with an array of the results from all the input promises.

// EXAMPLE:
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

const iterablePromiseArray = [
  fetch(`${url}/1`),
  fetch(`${url}/1`),
  fetch(`${url}/1`),
  fetch(`${url}/1`),
  fetch(`${url}/1`),
  fetch(`${url}/1`),
];

Promise.all(iterablePromiseArray)
  .then((results) => {
    console.log("Promise.all() is done and resolved!");
    console.log(results);
  })
  .catch((error) => {
    console.log("One of the promises was rejected");
    console.log(error);
  });

// EXAMPLE with ASYNC func:
async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(iterablePromiseArray);
    console.log("Promise.all() is done and resolved!");
    console.log(results);
  } catch (error) {
    console.log("One of the promises was rejected");
    console.log(error);
  }
}
