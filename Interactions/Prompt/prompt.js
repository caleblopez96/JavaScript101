// prompt shows a message asking the user to input text. 
// It returns the text or, if Cancel button or Esc is clicked, null.

// SYNTAX: 
// prompt()
// prompt(message)
// prompt(message, defaultValue)

// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

// EXAMPLE:
let legalAge = 21;
let alertMessage = `Are you ${legalAge} or older?`;

let userInput = prompt(alertMessage); // Are you 21 or older
