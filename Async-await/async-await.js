// async...await is a syntactic sugar for handling promises.

// use async...await for a simpler, easier to read syntax compared to promise chaining.

// you cannot use await without async.

// Without ASYNC...AWAIT
async function fetchData(){
  return fetch('https://example.com/data')
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}

// With ASYNC...AWAIT
async function fetchData() {
  try {
    const response = await fetch('https://swapi.dev/api/planets/')
    const data = await response.json()
    for(let planet of data.results) {
      console.log(planet.name)
    }
} catch(error) {
    console.log(error)
  }
}

fetchData();