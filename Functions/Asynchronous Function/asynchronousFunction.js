// Use asynchronous functions to handle asynchronous operations

// Async functions return a Promise and allow the use of 'await' for cleaner asynchronous code

// SYNTAX:
// async function functionName() { ... }
// await asyncFunction()

// RETURNS:
// A Promise that resolves when the asynchronous operation is complete

// EXAMPLE:
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

// EXAMPLE: Fetch 3 Pokémon using async functions
async function get3Pokemon() {
  try {
    const res1 = await fetch(`${url}/1`);
    const pokemon1 = await res1.json();

    const res2 = await fetch(`${url}/2`);
    const pokemon2 = await res2.json();

    const res3 = await fetch(`${url}/3`);
    const pokemon3 = await res3.json();

    const results = [pokemon1, pokemon2, pokemon3];
    console.log(results);
    return results;
  } catch (error) {
    console.log("Error fetching Pokémon: ", error);
  }
}

get3Pokemon();

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40725982#overview
// https://www.udemy.com/course/pro-javascript/learn/lecture/40725990#overview
// https://www.udemy.com/course/pro-javascript/learn/lecture/40725998#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
