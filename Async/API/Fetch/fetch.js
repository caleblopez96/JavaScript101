// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// SYNTAX:
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error: ", error));

// SYNTAX: async...await
// const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
// const url = `${BASE_URL}`;

// async function fetchData() {
//   try {
//     const response = await fetch(`${url}/`);
//     if (!response.ok) {
//       throw new Error(`HTTP ERROR! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }

// PARAMETERS:
// url - the url of the api you're trying to hit

// RETURNS:
// a new promise with the result of the fetch

// EXAMPLE:
const baseURL = "https://pokeapi.co/api/v2/pokemon";
const url = `${baseURL}`;

// EXAMPLE: async...await
async function fetchSomeData() {
  try {
    const response = await fetch(`${url}/1`);
    if (!response.ok) {
      throw new Error(`HTTP ERROR! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}
fetchSomeData();

// EXAMPLE: using .then() and .catch()
fetch(`${url}/1`)
  .then((response) => response.json()) // parse response into json
  .then((data) => {
    // data returned
    console.log(data); // do something with returned data
  })
  .catch((error) => console.log(error));

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789474#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
