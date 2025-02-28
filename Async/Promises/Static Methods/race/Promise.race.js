// the .race() method accepts an array of promises and returns a new promise.
// the returned promise settles with the eventual sate of the first promise that settles

// SYNTAX:
// Promise.race(iterable)

// PARAMETERS:
// iterable - an iterable collection of promises

// RETURNS:
// a new promise that settles with the eventual state of the first promise settled

// EXAMPLE:
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

const iterablePromiseArray = [
  fetch(`${url}/1`),
  fetch(`${url}/2`),
  fetch(`${url}/3`),
  fetch(`${url}/4`),
  fetch(`${url}/5`),
  fetch(`${url}/6`),
];

async function getFirstResolved(iterable) {
  try {
    const winner = await Promise.race(iterable);
    console.log(winner);
    return winner;
  } catch (error) {
    console.error("Error:", error);
  }
}
getFirstResolved(iterablePromiseArray);
