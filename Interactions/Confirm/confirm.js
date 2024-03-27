// window.prompt() instructs the browser to display
// a dialog with an optional message prompting the
// user to input some text, and to wait until the
// user either submits the text or cancels the dialog.

// SYNTAX: 
// confirm(message)

// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

// EXAMPLE: 
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
