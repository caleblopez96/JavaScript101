// async...await is a syntactic sugar for handling promises.

// use async...await for a simpler, easier to read syntax compared to promise chaining.

// you cannot use await without async.

// EXAMPLE with ASYNC...AWAIT with TRY/CATCH
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;
async function getFirstPokemon() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getFirstPokemon();

// VS:

// Without ASYNC...AWAIT
function fetchData() {
  fetch("URL_HERE")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}
getFirstPokemon();
