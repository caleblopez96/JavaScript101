// This demonstrates how to make sequential API requests in JavaScript.
// the recommended approach uses async/await for clarity and maintainability,
// while the alternative approach uses chained Promises, which can be harder to read.

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

// EXAMPLE: good
async function get3Pokemon() {
  try {
    const res1 = await fetch(`${url}/1`);
    const pokemon1 = await res1.json();

    const res2 = await fetch(`${url}/2`);
    const pokemon2 = await res2.json();

    const res3 = await fetch(`${url}/3`);
    const pokemon3 = await res3.json();

    const results = [pokemon1, pokemon2, pokemon3];
  } catch (error) {
    console.log("Error fetching pokemon: ", error);
  }
}

// EXAMPLE: bad
const results = [];
fetch(`${url}/1`)
  .then((res1) => res1.json())
  .then((data1) => {
    console.log("Response 1:", data1);
    return fetch(`${url}/2`);
  })
  .then((res2) => res2.json())
  .then((data2) => {
    console.log("Response 2:", data2);
    return fetch(`${url}/3`);
  })
  .then((res3) => res3.json())
  .then((data3) => {
    console.log("Response 3:", data3);
    return fetch(`${url}/4`);
  })
  .then((res4) => res4.json())
  .then((data4) => {
    console.log("Response 4:", data4);
  })
  .catch((err) => console.log("Error:", err));
