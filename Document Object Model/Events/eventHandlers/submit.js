// the submit event fires when a form is submitted

// SYNTAX:
// addEventListener("submit", (event) => {});

// EXAMPLE:

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents default event of submit
  console.log(event);
});