// getting all pokemon names of type 3
fetch("https://pokeapi.co/api/v2/type/3")
  .then((response) => response.json())
  .then((data) => {
    let pokemonArray = data.pokemon

    let pokemonNames = pokemonArray.map(pokemon => pokemon.pokemon.name)

    console.log(pokemonNames)
  })
  .catch(err => console.log("error", err))




// get all pokemon names of type 1
fetch("https://pokeapi.co/api/v2/type/1")
  .then(response => response.json())
  .then(data => {
    let pokemonArray = data.pokemon

    let pokemonNames = pokemonArray.map(pokemon => pokemon.pokemon.name)

    console.log(pokemonNames)

  })
  .catch(err => console.log(`Error ${err}`))
