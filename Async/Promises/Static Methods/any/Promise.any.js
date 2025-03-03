// .any() takes an iterable of promise objects and returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected if all of the given promises are rejected

// all promises have to fail for the error to happen

// SYNTAX:
// Promise.any(iterable)

// PARAMETERS:
// iterable - an iterable promise object

// RETURNS:
// a promise representing the first resolved promise, and only rejects if every single iterable rejects

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

// Promise.any(iterablePromiseArray).then((first) => console.log(first));

async function promiseAny() {
  try {
    const res = await Promise.any(iterablePromiseArray);
    const data = await res.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
promiseAny();
