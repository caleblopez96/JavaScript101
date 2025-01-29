// async...await is a syntactic sugar for handling promises.

// use async...await for a simpler, easier to read syntax compared to promise chaining.

// you cannot use await without async.

// With ASYNC...AWAIT with TRY/CATCH
async function fetchData() {
  try {
    const response = await fetch('URL_HERE');
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// Call the function to initiate the API request
fetchData()

// Without ASYNC...AWAIT
function fetchData() {
  fetch('URL_HERE')
    .then((response) => response.json()) // handles response and JSON parse
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error)) // Catch and log any errors
}

// Call the function to initiate the API request
fetchData()
