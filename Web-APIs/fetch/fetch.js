// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// SYNTAX:
// fetch()
// fetch(url, {options})

// EXAMPLE:
// const url = 'https://api.example.com/data';

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error: ', error));



// RESOURCE:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


const tarkovAPI = 'https://api.tarkov.dev/graphql';


fetch(tarkovAPI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(name: "glasses") {
      id,
      name,
      shortName,
      iconLink
    }  
  }`})
})
.then(response => response.json())
.then(data => {
  if (data.data.items && data.data.items.length > 0) {
    const testDiv = document.querySelector(".test");
    let itemNames = ''; // Initialize an empty string to accumulate item names

    for (let i = 0; i < data.data.items.length; i++) {
      console.log(data.data.items[i].name);
      itemNames += data.data.items[i].name;
    }
    testDiv.textContent = itemNames;
  }
})
.catch(error => console.log(error))
