// Some APIs require additional information from the fetcher, which is why you might need headers.

// include the headers object in the fetch request

// A nice and easy way to create headers is the Headers constructor.

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
    console.log(pokemon1);
    return pokemon1;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// Call the function
fetchDataWithHeaders();

const response = await fetch(`${BASE_URL}/1`, {
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789480#overview
