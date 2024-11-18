// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// When fetching data from an API that returns JSON, 
// you should parse the JSON response to interact with the data.

// EXAMPLE: USING fetch and async await

// This function gets Pokémon data from the internet
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

/* 
abilities : (2) [{…}, {…}]
base_experience: 101 
cries: {latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg', legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg'}
forms: [{…}]
game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
height: 3
held_items: (2) [{…}, {…}]
id: 132
is_default: true
location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters"
moves: [{…}]
name: "ditto"
order: 214
past_abilities: []
past_types: []
species: {name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-species/132/'}
sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', …}
stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
types: [{…}]
weight: 40
[[Prototype]]: Object
*/


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
