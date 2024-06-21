// The input event fires when the value 
// of an <input>, <select>, or <textarea> element
// has been changed as a direct result of a user
// action (such as typing in a textbox or checking a checkbox).

// SYNTAX: 
// addEventListener("input", (event) => {});

// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

// EXAMPLE:

const input = document.querySelector('input');

input.addEventListener("input", (event)=> {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  console.log(event.timeStamp);
});