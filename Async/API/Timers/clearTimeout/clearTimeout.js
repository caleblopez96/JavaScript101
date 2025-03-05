// clears a timeout set with setTimeout

// SYNTAX:
// clearTimeout(timeoutId)

// PARAMETERS:
// timeoutId - id of setTimeout to clear

// RETURNS:
// None (undefined)

// EXAMPLE:
function greet() {
  console.log("hello");
}
const myGreeting = setTimeout(greet, 10000); // 7 --> timeout ID retrived from the console
clearTimeout(myGreeting); // stops the greet function from being executed by its setTimeout

// EXAMPLE:
const myTimeout = setTimeout(() => console.log("hello"), 3000);
clearTimeout(myTimeout);

// EXAMPLE: a button to cancel a redirect
// theoritcal HTML element
const cancelButton = document.querySelector("#cancelButton");

// create a redirect to google after 5 seconds
const timeoutId = setTimeout(() => {
  window.location.href = "http://www.google.com";
}, 5000);

// clear timeout so the redirect stops and you stay on the current page
cancelButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log("REDIRECT ABORTED");
});

// REFERENCES:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746852#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout
