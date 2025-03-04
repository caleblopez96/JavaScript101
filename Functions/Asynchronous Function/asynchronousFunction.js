// EXAMPLE:
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
