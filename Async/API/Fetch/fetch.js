// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// When fetching data from an API that returns JSON, 
// you should parse the JSON response to interact with the data.

// EXAMPLE: USING fetch and async await

// This function gets Pokémon data from the pokeapi
// using async await (preferred method)
async function getPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')  // fetch data
    const pokemonData = await response.json() // convert data
    console.log(pokemonData) // log data
    return pokemonData // return data so we can use it elsewhere if needed
  } catch (error) {
    console.log(error) // log error
  }
}

getPokemonData() // call function


// EXAMPLE USING FETCH()

fetch('https://swapi.dev/api/planets/')
  .then(response => response.json())
  .then((data) => {
    for (let planet of data.results) {
      console.log(planet.name)
    }
  })
  .catch(error => console.log('Error: ', error));
// Tatooine
// Alderaan
// Yavin IV
// Hoth
// Dagobah
// Bespin
// Endor
// Naboo
// Coruscant
// Kamino
