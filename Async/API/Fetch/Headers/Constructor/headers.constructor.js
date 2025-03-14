// The Headers() constructor creates a new headers object

// SYNTAX:
// new Headers
// new Headers(init)

// PARAMETERS:
// init (optional) - an object contianing any http headers you want to pre-populate

// EXAMPLE:
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

// EXAMPLE:
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

async function fetchDataWithHeaders() {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  });

  try {
    const response = await fetch(`${BASE_URL}/1`, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemon1 = await response.json();
    console.log(pokemon1); // Log or return the fetched data
    return pokemon1;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

fetchDataWithHeaders();

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
