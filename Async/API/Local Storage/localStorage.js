// The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; 
// the stored data is saved across browser sessions.

// SYNTAX:
localStorage.setItem("key", "value")
localStorage.getItem("key") // returns value associated with key
localStorage.removeItem("key") // give key of item to remove
localStorage.clear() // clears localStorage

// EXAMPLE:

// setItem()
localStorage.setItem("myDog", "B's")

localStorage.getItem("myDog") // B's

localStorage.removeItem("myDog") // 

localStorage.clear();


fetch("https://pokeapi.co/api/v2/type/3")
  .then((response) => response.json())
  .then((data) => {
    let pokemonArray = data.pokemon;

    let pokemonNames = pokemonArray.map(pokemon => pokemon.pokemon.name)

    console.log(pokemonNames)
  })
  .catch(err => console.log("error", err))