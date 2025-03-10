// A partially applied function is a function that pre-fills some arguments
// of another function and returns a new function that takes the remaining arguments.

// Example 1: Using .bind()
function multiply(a, b) {
  return a * b;
}

// bind `thisArg` to null, and pre-fill the first argument
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(4)); // 8  (2 * 4)
console.log(triple(12)); // 36 (3 * 12)

// Example 2: Using a Custom `partial` Function
function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}

const partialDouble = partial(multiply, 2);
const partialTriple = partial(multiply, 3);

console.log(partialDouble(4)); // 8
console.log(partialTriple(12)); // 36

// Example 3: API request
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
