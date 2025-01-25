// Use the click event listener when you want to respond to a user's
// interaction with a specific element, such as a button, link, or any
// other HTML element, by performing some action when that element is clicked.

// SYNTAX: 
// addEventListener("click", (event) => {});

// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

// EXAMPLE:
const button = document.querySelector('button');

button.addEventListener("click", (event) => {
    button.classList.add('clickedStyles');
    console.log(event);
});