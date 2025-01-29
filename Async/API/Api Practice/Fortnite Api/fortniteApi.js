fetch("https://fortnite-api.com/v2/cosmetics/new")
  .then(response => response.json())
  .then(data => {
    let items = data.data.items // returns all item shop items
    // let cars = data.data.items.cars // returns cars in item shop
    // let tracks = data.data.items.tracks // returns tracks in item shop
    console.log(items)
  })
  .catch(error => console.log(error))
