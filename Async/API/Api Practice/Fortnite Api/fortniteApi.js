fetch("https://fortnite-api.com/v2/cosmetics/new")
  .then(response => response.json())
  .then(data => {
    let items = data.data.items // returns all item shop items in array
    // let cars = data.data.items.cars // returns cars in item shop
    // let tracks = data.data.items.tracks // returns tracks in item shop
    // let beans = data.data.items.beans // returns fall guys in item shop

    console.log(items)

  })
  .catch(error => console.log(error))

fetch("https://fortnite=api.com/v2/stats/br/v2/name/dableb")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.log(err))
