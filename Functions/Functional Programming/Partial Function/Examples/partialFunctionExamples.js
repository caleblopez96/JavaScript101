import partial from "../partialFunction";

// Example: API request
function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(`Sending request to: ${fullUrl}`);
  console.log(`Using API key: ${apiKey}`);
}

const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

// Create partially applied functions with fixed API details
const fetchMyApi = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey);

// Now, only pass the remaining `params` argument
fetchMyApi({ id: 1, sort: "desc" }); // Request to my API with specific parameters
fetchGoogle({ search: "dog" }); // Request to Google API with a search query

// Function to calculate sales tax and round to two decimal places
function calculateSalesTax(rate, amount) {
  const total = rate * amount;
  return parseFloat(total.toFixed(2));
}

// Create state-specific sales tax calculators using partial application
const calculateCASalesTax = partial(calculateSalesTax, 0.07);
const calculateTXSalesTax = partial(calculateSalesTax, 0.08);
