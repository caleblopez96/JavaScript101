// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// When fetching data from an API that returns JSON,
// you should parse the JSON response to interact with the data.

//** If possible, you should be using ASYNC/AWAIT with a try/catch block for asynchronous operations

// EXAMPLE: 
fetch('URL_HERE')
  .then((response) => response.json())  // handles response and JSON parse
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))  // Catch and log any errors


// EXAMPLE: with function
function fetchData() {
  fetch('URL_HERE')
    .then((response) => response.json()) // handles response and JSON parse
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error)) // Catch and log any errors
}

fetchData() // call the function
