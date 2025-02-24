// The Fetch API is used to make HTTP requests.
// Fetch is promise based; it uses the .then() and the .catch() methods.

// SYNTAX:
// fetch().then().then().catch()
// fetch(url).then(response).then(data).catch(error)

// PARAMETERS:
// url - the url of the api you're trying to hit
// response - the object representing the response from the api
// data - the data returned from the api
// error - the error to throw

// RETURNS:

// EXAMPLE:

const baseURL = "https://pokeapi.co/api/v2/pokemon/1";
const url = `${baseURL}/1`;

fetch(url)
  .then((res) => res.json())
  .then((data) =>
    console.log(data).catch((err) => console.log("error: ", err))
  );

// EXAMPLE:
fetch("URL_HERE")
  .then((response) => response.json()) // handles response and JSON parse
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error)); // Catch and log any errors

// EXAMPLE: with function
function fetchData() {
  fetch("URL_HERE")
    .then((response) => response.json()) // handles response and JSON parse
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log("Error:", error)); // Catch and log any errors
}

fetchData(); // call the function
