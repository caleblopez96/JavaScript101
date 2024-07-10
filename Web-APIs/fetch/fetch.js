// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// When fetching data from an API that returns JSON, 
// you should parse the JSON response to interact with the data.

// SYNTAX:
// fetch()
// fetch(url, {options})

// fetch(url)
// .then(response => response.json())
// .then((data) => {
//    interact with the data
// })
// .catch(error => console.log("Error:", error))


// EXAMPLE:

fetch('https://swapi.dev/api/planets/')
.then(response => response.json())
.then((data) => {
  for(let planet of data.results) {
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


// EXAMPLE: 
// calling and using api to allow user input 
// to search item and returns the first result 
// of the searched for item

const tarkovAPI = 'https://api.tarkov.dev/graphql';

async function fetchData() {
  const itemName = document.querySelector('#itemName').value.toLowerCase();

fetch(tarkovAPI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(name: "${itemName}") {
      id,
      name,
      iconLink
    }  
  }`})
})
.then(response => response.json())
.then(data => {
  const items = data.data.items;
  const img = document.querySelector("img");
  img.src = data.data.items[0].iconLink;
  // console.log(data.data) for debugging
})
.catch(error => console.log("error", error))
}

document.querySelector("button").addEventListener("click", fetchData);

// EXAMPLE: 
// calling and using the api

// fetch(tarkovAPI, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify({query: `{
//     items(name: "glasses") {
//       id,
//       name,
//       shortName,
//       iconLink
//     }  
//   }`})
// })
// .then(response => response.json())
// .then(data => {
//   if (data.data.items && data.data.items.length > 0) {
//     const testDiv = document.querySelector(".test");
//     let itemNames = ''; // Initialize an empty string to accumulate item names

//     for (let i = 0; i < data.data.items.length; i++) {
//       console.log(data.data.items[i].name);
//       itemNames += data.data.items[i].name;
//     }
//     testDiv.textContent = itemNames;
//   }
// })
// .catch(error => console.log(error))

// Tactical glasses
// Anti-fragmentation glasses
// Round frame sunglasses
// Dundukk sport sunglasses
// RayBench Hipster Reserve sunglasses
// 6B34 anti-fragmentation glasses
// Pyramex Proximity safety glasses
// Oakley SI M Frame safety glasses
// Crossbow tactical glasses
// Oakley SI Gascan glasses
// RayBench Aviator glasses
// Twitch Rivals 2020 glasses
// NPP KlASS Condor glasses
// JohnB Liquid DNB glasses
// Oakley SI Batwolf glasses