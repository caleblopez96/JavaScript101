// EXAMPLE:

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

async function fetchDataWithheaders() {
  const headers = new Headers({
    "content-type": "application.json",
    Authorization: "Bearer YOUR_TOKEN",
  });
}
try {
  const response = await fetch(`${url}/1`, { headers });
  const pokemon1 = await response.json();
} catch (error) {
  console.error(`Error fetching data: ${error}`);
}
fetchDataWithheaders();

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789480#overview
