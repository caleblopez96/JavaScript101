// Fake API
function queryAPI(searchTerm) {
  console.log(`Searching the API for ${searchTerm}`);
}
// Fake search input
const search = document.querySelector("#search");

//* Reusable debounce function
function debounce(callbackFn, delay) {
  let timeoutId;
  return (...arguments) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callbackFn(...arguments);
    }, delay);
  };
}
let debounceQueryAPI = debounce(queryAPI, 300);
search.addEventListener("input", (event) => {
  debounceQueryAPI(event.target.value);
});

// EXAMPLE: not reusable
let debounceTimeout;
search.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746862#overview
