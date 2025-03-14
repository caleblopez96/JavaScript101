// How to effectively handle errors when using fetch:
// 1. Use a try/catch block to handle network failures
// such as no internet, DNS issues, or CORS errors.

// 2. Fetch response objects include an "ok" property.
//    - response.ok is true for successful requests(status codes: 200-299).
//    - its set to false for errors like 404 (Not Found) or 500 (Server Error).
// 3. fetch() does NOT reject on HTTP errors (404, 500, etc...).
//    - which is why you manually check with (!response.ok)

// CODE:
// if (!response.ok) {
//   throw new Error(`HTTP ERROR! Status: ${response.status}`);
// }

// EXAMPLE:

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

async function fetchData() {
  try {
    const response = await fetch(`${url}/-1`); // force a 404 for example

    if (!response.ok) {
      throw new Error(`HTTP ERROR! Status: ${response.status}`);
    }
    const pokemon1 = await response.json();
    console.log(pokemon1);
  } catch (error) {
    console.error("Error: ", error);
  }
}
fetchData(); // Error: HTTP ERROR! Status: 404

fetch(`${url}/1`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("error: ", error));

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789476#overview
