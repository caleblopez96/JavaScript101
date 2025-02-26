// waits until all promises are fulfilled or rejected, then returns a promise obeject with the results

// SYNTAX:
// Promise.allSettled(iterable);

// PARAMETERS:
// iterable - iterable of promises

// RETURNS:
// A single Promise that resolves with an array of the results from all the input promises.
// status - string indicated "fulfilled" or "rejected"
// value - only present if status is "fulfilled". The value that promise was "fulfilled" with
// reason - only present if status is "rejected". The reason the promise was rejected

// EXAMPLE:

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

const iterablePromiseArray = [
  fetch(`${url}/1`),
  fetch(`${url}/2`),
  fetch(`https://nope.nope`), // doesn't exist --> forcing rejected status
  fetch(`${url}/4`),
  fetch(`${url}/5`),
  fetch(`https://nope.nope`), // doesnt exist --> forcing rejected status
];

let results = await Promise.allSettled(iterablePromiseArray);

// 0: {status: 'fulfilled', value: Response}
// 1: {status: 'fulfilled', value: Response}
// 2: {status: 'rejected', value: TypeError: Failed to fetch at <>}
// 3: {status: 'fulfilled', value: Response}
// 4: {status: 'fulfilled', value: Response}
// 5: {status: 'rejected', value: TypeError: Failed to fetch at <>}

const fulfilled = results.filter((result) => result.status === "fulfilled");
const rejected = results.filter((results) => results.status === "rejected");
console.log(fulfilled);
console.log(rejected);
