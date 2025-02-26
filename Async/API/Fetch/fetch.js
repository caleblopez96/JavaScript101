// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// SYNTAX:
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error: ", error));

// PARAMETERS:
// url - the url of the api you're trying to hit

// RETURNS:
// a new promise with the result of the fetch

// EXAMPLE:

const baseURL = "https://pokeapi.co/api/v2/pokemon";
const url = `${baseURL}`;

// EXAMPLE:
fetch(`${url}/1`)
  .then((response) => response.json()) // response and JSON parse
  .then((data) => {
    // data returned
    console.log(data); // do something with returned data
  })
  .catch((error) => console.log(error));

// EXAMPLE: async...await
async function fetchSomeData() {
  try {
    const response = await fetch(`${url}/1`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
fetchSomeData();
