// debouncing allows you to

// EXAMPLE:

// Fake api:
function queryAPI() {
  console.log("API Queried");
}
// fake search input
const search = document.querySelector("#search");

// Every time a user types a character, queryAPI() is called immediately.
// If the user types "dog", three API calls are made (one for "d", one for "do", and one for "dog").
search.addEventListener("input", () => {
  queryAPI();
});

// Each time the user types a character, the previous setTimeout is cleared and a new one is started.
// The API is only called after the user stops typing for 400ms.
// If the user types "halloween", instead of 9 API calls, only 1 API call is made after they stop typing.

let debounceTimeout;
search.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746854#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Glossary/Debounce
