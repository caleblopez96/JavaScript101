// fetch all
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    let characterArray = data.results

    let names = characterArray.map(character => character.name)

    console.log(names)
  })
  .catch((error) => console.error("Error fetching data:", error));